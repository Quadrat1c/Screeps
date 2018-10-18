'use strict';

Room.prototype.tryConstruct = function()
{
    if (global.config.visuals.showBuildPlan)
    {
        this.showBuildPlan();
        this.showExtensionPlan();
        //this.buildExtractor();
    }

    if(!this.memory.constructTick) { this.memory.constructTick = 0; }
    if(!this.memory.extensionTick) { this.memory.extensionTick = 0; }
    if(!this.memory.wallTick) { this.memory.wallTick = 0; }
    
    if(this.memory.constructTick < 50) { this.memory.constructTick++; }
    else
    {
        this.memory.constructTick = 0;
        this.createStructures();
    }
    
    if(this.memory.wallTick < 125) { this.memory.wallTick++; }
    else
    {
        if (this.controller.level >= 3)
        {
            this.memory.wallTick = 0;
            if (this.memory.storage) { this.createWalls(); }
        }
    }
    
    if(this.memory.extensionTick < 150) { this.memory.extensionTick++; }
    else
    {
        this.memory.extensionTick = 0;
        this.initRoads();
        this.createExtensions();
    }
}

Room.prototype.showExtensionPlan = function()
{
    //new RoomVisual(this.room).circle(10,20);

    let x;
    let y;
    let spawn = Game.getObjectById(this.memory.spawn);
    for (let i = 1; i < 5; i++) {
        x = getRandomInt(-spawn.room.controller.level, spawn.room.controller.level);
        y = getRandomInt(-spawn.room.controller.level, spawn.room.controller.level);

        if (x >= 0)
        {
            x += 2;
        }
        if (x <= 0)
        {
            x += -2;
        }

        new RoomVisual(this.room).circle(spawn.pos.x + x, spawn.pos.y + y, {fill: 'yellow', stroke: 'yellow', radius: 0.25});
    }
}

Room.prototype.initRoads = function()
{
    let maxRoads = 5;
        
    let spawn = Game.getObjectById(this.memory.spawn);
    if(spawn)
    {
        // Initial Spawn Roads (incase swamp)
        this.createConstructionSite(spawn.pos.x, spawn.pos.y - 1, STRUCTURE_ROAD);
        this.createConstructionSite(spawn.pos.x, spawn.pos.y - 3, STRUCTURE_ROAD);
        this.createConstructionSite(spawn.pos.x - 1, spawn.pos.y - 2, STRUCTURE_ROAD);
        this.createConstructionSite(spawn.pos.x + 1, spawn.pos.y - 2, STRUCTURE_ROAD);
        this.createConstructionSite(spawn.pos.x + 1, spawn.pos.y, STRUCTURE_ROAD);
        this.createConstructionSite(spawn.pos.x - 1, spawn.pos.y, STRUCTURE_ROAD);
        this.createConstructionSite(spawn.pos.x, spawn.pos.y + 1, STRUCTURE_ROAD);
        this.createConstructionSite(spawn.pos.x - 1, spawn.pos.y + 2, STRUCTURE_ROAD);
        this.createConstructionSite(spawn.pos.x + 1, spawn.pos.y + 2, STRUCTURE_ROAD);

        let sources = _.map(this.find(FIND_SOURCES), function(source)
        {
            return { pos: source.memory.harvestPos, range: 0 };
        });
        let controllerObj = { pos: this.controller.pos, range: 1 };
        
        let roadCount = 0;
        
        for(let i in sources)
        {
            // Sources to spawn
            let results = PathFinder.search(spawn.pos, sources[i], { swampCost: 2});
            if(!results.incomplete)
            {
                for(let i in results.path)
                {
                    if(this.createConstructionSite(results.path[i], STRUCTURE_ROAD) == OK) { roadCount++; }
                    if(roadCount >= maxRoads) { return; }
                }
            }
            
            // Sources to controller
            results = PathFinder.search(sources[i].pos, controllerObj, { swampCost: 2});
            if(!results.incomplete)
            {
                for(let i in results.path)
                {
                    if(this.createConstructionSite(results.path[i], STRUCTURE_ROAD) == OK) { roadCount++; }
                    if(roadCount >= maxRoads) { return; }
                }
            }
        }
        
        // Spawn to controller
        let results = PathFinder.search(spawn.pos, controllerObj, { swampCost: 2});
        if(!results.incomplete)
        {
            for(let i in results.path)
            {
                if(this.createConstructionSite(results.path[i], STRUCTURE_ROAD) == OK) { roadCount++; }
                if(roadCount >= maxRoads) { return; }
            }
        }
        
        // Spawn to exits
        if(this.memory.storage)
        {
            if(this.memory.leftExits.length > 0)
            {
                let exit = this.memory.leftExits[Math.floor(this.memory.leftExits.length / 2)];
                let roadDest = new RoomPosition(exit.x + 2, exit.y, this.name);
                let exitPos = { pos: roadDest, range: 3 };
                let results = PathFinder.search(spawn.pos, exitPos, { swampCost: 2});
                if(!results.incomplete)
                {
                    for(let i in results.path)
                    {
                        if(this.createConstructionSite(results.path[i], STRUCTURE_ROAD) == OK) { roadCount++; }
                        if(roadCount >= maxRoads) { return; }
                    }
                }
            }
            if(this.memory.rightExits.length > 0)
            {
                let exit = this.memory.rightExits[Math.floor(this.memory.rightExits.length / 2)];
                let roadDest = new RoomPosition(exit.x - 2, exit.y, this.name);
                let exitPos = { pos: roadDest, range: 1 };
                let results = PathFinder.search(spawn.pos, exitPos, { swampCost: 2});
                if(!results.incomplete)
                {
                    for(let i in results.path)
                    {
                        if(this.createConstructionSite(results.path[i], STRUCTURE_ROAD) == OK) { roadCount++; }
                        if(roadCount >= maxRoads) { return; }
                    }
                }
            }
            if(this.memory.topExits.length > 0)
            {
                let exit = this.memory.topExits[Math.floor(this.memory.topExits.length / 2)];
                let roadDest = new RoomPosition(exit.x, exit.y + 2, this.name);
                let exitPos = { pos: roadDest, range: 1 };
                let results = PathFinder.search(spawn.pos, exitPos, { swampCost: 2});
                if(!results.incomplete)
                {
                    for(let i in results.path)
                    {
                        if(this.createConstructionSite(results.path[i], STRUCTURE_ROAD) == OK) { roadCount++; }
                        if(roadCount >= maxRoads) { return; }
                    }
                }
            }
            if(this.memory.botExits.length > 0)
            {
                let exit = this.memory.botExits[Math.floor(this.memory.botExits.length / 2)];
                let roadDest = new RoomPosition(exit.x, exit.y - 2, this.name);
                let exitPos = { pos: roadDest, range: 2 };
                let results = PathFinder.search(spawn.pos, exitPos, { swampCost: 2});
                if(!results.incomplete)
                {
                    for(let i in results.path)
                    {
                        if(this.createConstructionSite(results.path[i], STRUCTURE_ROAD) == OK) { roadCount++; }
                        if(roadCount >= maxRoads) { return; }
                    }
                }
            }
        }

        // Spawn to Mineral
        (this.controller.level >= 6)
        {
            let mineral = Game.getObjectById(this.memory.minerals);
            let mineralObj = { pos: mineral.pos, range: 1 };
            let results = PathFinder.search(spawn.pos, mineralObj, { swampCost: 2});
            if(!results.incomplete)
            {
                for(let i in results.path)
                {
                    if(this.createConstructionSite(results.path[i], STRUCTURE_ROAD) == OK) { roadCount++; }
                    if(roadCount >= maxRoads) { return; }
                }
            }
        }

    }
};

Room.prototype.showBuildPlan = function()
{
    let spawn = Game.getObjectById(this.memory.spawn);
    
    // tower
    new RoomVisual(this.room).circle(spawn.pos.x - 1, spawn.pos.y - 3, {fill: 'red', stroke: 'red', radius: 0.25});
    // storage
    new RoomVisual(this.room).circle(spawn.pos.x, spawn.pos.y - 2, {fill: 'white', stroke: 'white', radius: 0.25});
    // link
    new RoomVisual(this.room).circle(spawn.pos.x, spawn.pos.y - 4, {fill: 'cyan', stroke: 'cyan', radius: 0.25});
    // spawns
    new RoomVisual(this.room).circle(spawn.pos.x + 1, spawn.pos.y - 1, {fill: 'green', stroke: 'green', radius: 0.40});
    new RoomVisual(this.room).circle(spawn.pos.x - 1, spawn.pos.y - 1, {fill: 'green', stroke: 'green', radius: 0.40});
    // terminal
    new RoomVisual(this.room).circle(spawn.pos.x + 1, spawn.pos.y - 3, {fill: 'pink', stroke: 'pink', radius: 0.35});
    // other towers
    new RoomVisual(this.room).circle(spawn.pos.x, spawn.pos.y + 2, {fill: 'red', stroke: 'red', radius: 0.15});
    new RoomVisual(this.room).circle(spawn.pos.x - 1, spawn.pos.y + 1, {fill: 'red', stroke: 'red', radius: 0.15});
    new RoomVisual(this.room).circle(spawn.pos.x + 1, spawn.pos.y + 1, {fill: 'red', stroke: 'red', radius: 0.15});
    new RoomVisual(this.room).circle(spawn.pos.x, spawn.pos.y + 3, {fill: 'red', stroke: 'red', radius: 0.15});

    // initial spawn roads
    new RoomVisual(this.room).circle(spawn.pos.x, spawn.pos.y - 1, {fill: 'grey', stroke: 'grey', radius: 0.15});
    new RoomVisual(this.room).circle(spawn.pos.x, spawn.pos.y - 3, {fill: 'grey', stroke: 'grey', radius: 0.15});
    new RoomVisual(this.room).circle(spawn.pos.x - 1, spawn.pos.y - 2, {fill: 'grey', stroke: 'grey', radius: 0.15});
    new RoomVisual(this.room).circle(spawn.pos.x + 1, spawn.pos.y - 2, {fill: 'grey', stroke: 'grey', radius: 0.15});
    new RoomVisual(this.room).circle(spawn.pos.x + 1, spawn.pos.y, {fill: 'grey', stroke: 'grey', radius: 0.15});
    new RoomVisual(this.room).circle(spawn.pos.x - 1, spawn.pos.y, {fill: 'grey', stroke: 'grey', radius: 0.15});
    new RoomVisual(this.room).circle(spawn.pos.x, spawn.pos.y + 1, {fill: 'grey', stroke: 'grey', radius: 0.15});
    new RoomVisual(this.room).circle(spawn.pos.x - 1, spawn.pos.y + 2, {fill: 'grey', stroke: 'grey', radius: 0.15});
    new RoomVisual(this.room).circle(spawn.pos.x + 1, spawn.pos.y + 2, {fill: 'grey', stroke: 'grey', radius: 0.15});
}

Room.prototype.createStructures = function()
{
    let spawn = Game.getObjectById(this.memory.spawn);
    if (!spawn) { return; }
    if (this.controller.level >= 2)
    {
    }
    if (this.controller.level >= 3)
    {
        this.createConstructionSite(spawn.pos.x - 1, spawn.pos.y - 3, STRUCTURE_TOWER);
        this.createConstructionSite(spawn.pos.x - 1, spawn.pos.y - 3, STRUCTURE_RAMPART);   // tower rampart
        this.createConstructionSite(spawn.pos.x, spawn.pos.y, STRUCTURE_RAMPART);           // spawn rampart
    }
    if (this.controller.level >= 4)
    {
        this.createConstructionSite(spawn.pos.x, spawn.pos.y - 2, STRUCTURE_STORAGE);
        this.createConstructionSite(spawn.pos.x, spawn.pos.y - 2, STRUCTURE_RAMPART);       // storage rampart
    }
    if (this.controller.level >= 5)
    {
        this.buildTower(spawn.pos);
        this.createLinks();
    }
    if (this.controller.level >= 6)
    {
        this.createConstructionSite(spawn.pos.x + 1, spawn.pos.y - 3, STRUCTURE_TERMINAL);
        this.createConstructionSite(spawn.pos.x + 1, spawn.pos.y - 3, STRUCTURE_RAMPART);   // terminal rampart
        // if extractor or construction site is not present
        this.buildExtractor();
    }
    if (this.controller.level >= 7)
    {
        this.createConstructionSite(spawn.pos.x + 1, spawn.pos.y - 1, STRUCTURE_SPAWN);
        this.createConstructionSite(spawn.pos.x + 1, spawn.pos.y - 1, STRUCTURE_RAMPART);   // spawn rampart
    }
    if (this.controller.level >= 8)
    {
        this.createConstructionSite(spawn.pos.x - 1, spawn.pos.y - 1, STRUCTURE_SPAWN);
        this.createConstructionSite(spawn.pos.x + 1, spawn.pos.y - 1, STRUCTURE_RAMPART);   // spawn rampart
    }
};

Room.prototype.createLinks = function()
{
    let spawn = Game.getObjectById(this.memory.spawn);
    if (!this.memory.spawnLink || !Game.getObjectById(this.memory.spawnLink))
    {
        if(!this.memory.sLinkPos && this.createConstructionSite(spawn.pos.x, spawn.pos.y - 4, STRUCTURE_LINK) == OK)
        {
            this.memory.sLinkPos = { x: spawn.pos.x, y: spawn.pos.y - 4, roomName: this.name };
            console.log('new site id: ' + this.memory.sLinkPos.x + ', ' + this.memory.sLinkPos.y);
        }
        if(this.memory.sLinkPos)
        {
            let structures = this.lookForAt(LOOK_STRUCTURES, 
                new RoomPosition(this.memory.sLinkPos.x, this.memory.sLinkPos.y, this.memory.sLinkPos.roomName));
            for(let link of structures)
            {
                if (link.structureType == STRUCTURE_LINK)
                {
                    this.memory.spawnLink = link.id;
                    console.log('new link id: ' + link.id);
                }
            }
        }
    }
    
    if (!this.memory.controllerLink || !Game.getObjectById(this.memory.controllerLink))
    {
        let constructPos = findConstructionSite(this.controller, this.name);
        if (!this.memory.cLinkPos && this.createConstructionSite(constructPos, STRUCTURE_LINK) == OK)
        {
            this.memory.cLinkPos = { x: constructPos.x, y: constructPos.y, roomName: this.name };
            console.log('new site id: ' + this.memory.cLinkPos.x + ', ' + this.memory.cLinkPos.y);
        }
        if(this.memory.cLinkPos)
        {
            let structures = this.lookForAt(LOOK_STRUCTURES, 
                new RoomPosition(this.memory.cLinkPos.x, this.memory.cLinkPos.y, this.memory.cLinkPos.roomName));
            for(let link of structures)
            {
                if (link.structureType == STRUCTURE_LINK)
                {
                    this.memory.controllerLink = link.id;
                    console.log('new link id: ' + link.id);
                }
            }
        }
    }
}

Room.prototype.createExtensions = function()
{
    let spawn = Game.getObjectById(this.memory.spawn);

    let x;
    let y;

    for (let i = 1; i < 5; i++) {
        x = getRandomInt(-spawn.room.controller.level, spawn.room.controller.level);
        y = getRandomInt(-spawn.room.controller.level, spawn.room.controller.level);
        if (x >= 0)
        { 
            x += 2;
            if (this.createConstructionSite(spawn.pos.x + x, spawn.pos.y + y, STRUCTURE_EXTENSION) === OK) {
                this.createConstructionSite(spawn.pos.x + x - 1, spawn.pos.y + y, STRUCTURE_ROAD);
                this.createConstructionSite(spawn.pos.x + x, spawn.pos.y + y - 1, STRUCTURE_ROAD);
            } 
        }
        if (x <= 0)
        { 
            x += -2;
            if (this.createConstructionSite(spawn.pos.x + x, spawn.pos.y + y, STRUCTURE_EXTENSION) === OK) {
                this.createConstructionSite(spawn.pos.x + x + 1, spawn.pos.y + y, STRUCTURE_ROAD);
                this.createConstructionSite(spawn.pos.x + x, spawn.pos.y + y + 1, STRUCTURE_ROAD);
            } 

        }
    }
    /*
    let rowLength = 4;
    let countMax = 6;
    
    // Defines where the rows start - measured for row length 6
    let array = [
        { x:  2,  y:  0 },
        { x: -5,  y:  0 },
        { x:  2,  y: -2 },
        { x: -5,  y: -2 },
        { x:  2,  y:  2 },
        { x: -5,  y:  2 },
        { x:  2,  y: -4 },
        { x: -5,  y: -4 },
        { x:  2,  y:  4 },
        { x: -5,  y:  4 },
        { x:  2,  y: -6 },
        { x: -5,  y: -6 },
        { x:  2,  y:  6 },
        { x: -5,  y:  6 }
        ];
    
    let spawn = Game.getObjectById(this.memory.spawn);
    if (!spawn) { return; }
    
    let spawnPos = new RoomPosition(spawn.pos.x, spawn.pos.y, spawn.room.name);
    let count = 0;
    
    // Loops through rows of extensions
    for(let i = 0; i < array.length; i++)
    {
        for(let j = 0; j < rowLength; j++)
        {
            let position = new RoomPosition(spawnPos.x + array[i].x + j, spawnPos.y + array[i].y, spawn.room.name);
            if(checkIfBuildable(position))
            {
                //console.log('[i]: ' + i + ' [j]: ' + j + ' [building ext]: ' + position);
                if (this.createConstructionSite(position, STRUCTURE_EXTENSION) == OK)
                {
                    count++;
                    this.createConstructionSite(new RoomPosition(position.x, position.y - 1, spawn.room.name), STRUCTURE_ROAD);
                    this.createConstructionSite(new RoomPosition(position.x, position.y + 1, spawn.room.name), STRUCTURE_ROAD);
                    if (j == rowLength - 1) { this.createConstructionSite(new RoomPosition(position.x + 1, position.y, spawn.room.name), STRUCTURE_ROAD); }
                    else if (j == 0) { this.createConstructionSite(new RoomPosition(position.x - 1, position.y, spawn.room.name), STRUCTURE_ROAD); }
                }
                if (count >= countMax) { return; }
            }
        }
    }
    */
}

Room.prototype.createWalls = function()
{
    let maxCount = 25;
    
    let count = 0;
    let nearEnd = true;
    let leftExits = this.memory.leftExits;
    for(let i = 0; i < leftExits.length; i++)
    {
        let buildRampart = false;
        if(i % 3 == 0) { buildRampart = true; }
        let newPos = leftExits[i];
        if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 2, 0, buildRampart)) { count++; }
        if(nearEnd)
        {
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 0, -2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 1, -2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 2, -2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 2, -1, false)) { count++; }
            nearEnd = false;
        }
        if (!nearEnd && ((i != leftExits.length - 1 && Math.abs(leftExits[i+1].y - leftExits[i].y) != 1) || i == leftExits.length - 1))
        {
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 0, 2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 1, 2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 2, 2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 2, 1, false)) { count++; }
            nearEnd = true;
        }
        if (count >= maxCount) { return; }
    }
    
    nearEnd = true;
    let rightExits = this.memory.rightExits;
    for(let i = 0; i < rightExits.length; i++)
    {
        let buildRampart = false;
        if(i % 3 == 0) { buildRampart = true; }
        let newPos = rightExits[i];
        if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -2, 0, buildRampart)) { count++; }
        if(nearEnd)
        {
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 0, -2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -1, -2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -2, -2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -2, -1, false)) { count++; }
            nearEnd = false;
        }
        if (!nearEnd && ((i != rightExits.length - 1 && Math.abs(rightExits[i+1].y - rightExits[i].y) != 1) || i == rightExits.length - 1))
        {
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 0, 2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -1, 2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -2, 2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -2, 1, false)) { count++; }
            nearEnd = true;
        }
        if (count >= maxCount) { return; }
    }
    
    nearEnd = true;
    let topExits = this.memory.topExits;
    for(let i = 0; i < topExits.length; i++)
    {
        let buildRampart = false;
        if(i % 3 == 0) { buildRampart = true; }
        let newPos = topExits[i];
        if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 0, 2, buildRampart)) { count++; }
        if(nearEnd)
        {
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -2, 0, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -2, 1, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -2, 2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -1, 2, false)) { count++; }
            nearEnd = false;
        }
        if (!nearEnd && ((i != topExits.length - 1 && Math.abs(topExits[i+1].x - topExits[i].x) != 1) || i == topExits.length - 1))
        {
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 2, 0, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 2, 1, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 2, 2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 1, 2, false)) { count++; }
            nearEnd = true;
        }
        if (count >= maxCount) { return; }
    }
    
    nearEnd = true;
    let botExits = this.memory.botExits;
    for(let i = 0; i < botExits.length; i++)
    {
        let buildRampart = false;
        if(i % 3 == 0) { buildRampart = true; }
        let newPos = botExits[i];
        if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 0, -2, buildRampart)) { count++; }
        if(nearEnd)
        {
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -2, 0, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -2, -1, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -2, -2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), -1, -2, false)) { count++; }
            nearEnd = false;
        }
        if (!nearEnd && ((i != botExits.length - 1 && Math.abs(botExits[i+1].x - botExits[i].x) != 1) || i == botExits.length - 1))
        {
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 2, 0, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 2, -1, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 2, -2, false)) { count++; }
            if(this.buildWall(new RoomPosition(newPos.x, newPos.y, this.name), 1, -2, false)) { count++; }
            nearEnd = true;
        }
        if (count >= maxCount) { return; }
    }
}

// RoomPosition, x offset, y offset
Room.prototype.buildWall = function(pos, x, y, rampart)
{
    let newPos = pos;
    newPos.x += x;
    newPos.y += y;
    if(checkIfBuildable(newPos))
    {
        if(rampart == true && this.createConstructionSite(newPos, STRUCTURE_RAMPART) == OK) { return true; }
        else if(this.createConstructionSite(newPos, STRUCTURE_WALL) == OK) { return true; }
    }
    return false;
}

Room.prototype.buildTower = function(origin)
{
    if(this.createBotTower()) { return true; }
    else if(this.createTopTower()) { return true; }
    else if(this.createLeftTower()) { return true; }
    else if(this.createRightTower()) { return true; }
    else if(this.createConstructionSite(origin.x - 1, origin.y + 1, STRUCTURE_TOWER) == OK) { return true; }
    else if(this.createConstructionSite(origin.x + 1, origin.y + 1, STRUCTURE_TOWER) == OK) { return true; }
    else if(this.createConstructionSite(origin.x, origin.y + 2, STRUCTURE_TOWER) == OK) { return true; }
    else if(this.createConstructionSite(origin.x, origin.y + 3, STRUCTURE_TOWER) == OK) { return true; }
    else { return false; }
};

Room.prototype.createBotTower = function()
{
    if(this.memory.botExits.length > 0)
    {
        let exitPos = this.memory.botExits[Math.floor(this.memory.botExits.length / 2)];
        let origin = new RoomPosition(exitPos.x, exitPos.y - 5, exitPos.roomName);
        let ret;
        for(let i = 0; i < 7; i++)
        {
            ret = this.checkAndBuildTower(origin.x + i, origin.y);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
            
            ret = this.checkAndBuildTower(origin.x - i, origin.y);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
        }
        for(let i = 0; i < 7; i++)
        {
            ret = this.checkAndBuildTower(origin.x + i, origin.y - 1);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
            
            ret = this.checkAndBuildTower(origin.x - i, origin.y - 1);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
        }
    }
    return false;
};

Room.prototype.createTopTower = function()
{
    if(this.memory.topExits.length > 0)
    {
        let exitPos = this.memory.topExits[Math.floor(this.memory.topExits.length / 2)];
        let origin = new RoomPosition(exitPos.x, exitPos.y + 5, exitPos.roomName);
        let ret;
        for(let i = 0; i < 7; i++)
        {
            ret = this.checkAndBuildTower(origin.x + i, origin.y);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
            
            ret = this.checkAndBuildTower(origin.x - i, origin.y);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
        }
        for(let i = 0; i < 7; i++)
        {
            ret = this.checkAndBuildTower(origin.x + i, origin.y + 1);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
            
            ret = this.checkAndBuildTower(origin.x - i, origin.y + 1);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
        }
    }
    return false;
};

Room.prototype.createLeftTower = function()
{
    if(this.memory.leftExits.length > 0)
    {
        let exitPos = this.memory.leftExits[Math.floor(this.memory.leftExits.length / 2)];
        let origin = new RoomPosition(exitPos.x + 5, exitPos.y, exitPos.roomName);
        let ret;
        for(let i = 0; i < 7; i++)
        {
            ret = this.checkAndBuildTower(origin.x, origin.y + i);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
            
            ret = this.checkAndBuildTower(origin.x, origin.y - i);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
        }
        for(let i = 0; i < 7; i++)
        {
            ret = this.checkAndBuildTower(origin.x + 1, origin.y + i);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
            
            ret = this.checkAndBuildTower(origin.x + 1, origin.y - i);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
        }
    }
        return false;
};

Room.prototype.createRightTower = function()
{
    if(this.memory.rightExits.length > 0)
    {
        let exitPos = this.memory.rightExits[Math.floor(this.memory.rightExits.length / 2)];
        let origin = new RoomPosition(exitPos.x - 5, exitPos.y, exitPos.roomName);
        let ret;
        for(let i = 0; i < 7; i++)
        {
            ret = this.checkAndBuildTower(origin.x, origin.y + i);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
            
            ret = this.checkAndBuildTower(origin.x, origin.y - i);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
        }
        for(let i = 0; i < 7; i++)
        {
            ret = this.checkAndBuildTower(origin.x - 1, origin.y + i);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
            
            ret = this.checkAndBuildTower(origin.x - 1, origin.y - i);
            if(ret == 'built') { return true; }
            else if(ret == 'exists') { return false; }
        }
    }
    return false;
};

Room.prototype.checkAndBuildTower = function(x, y)
{
    let results = this.lookForAt(LOOK_STRUCTURES, x, y);
    if(_.filter(results, function(s) { return s.structureType == STRUCTURE_TOWER; }).length > 0) { return 'exists'; }
    else if(this.createConstructionSite(x, y, STRUCTURE_TOWER) == OK) { return 'built'; }
    else { return 'unable'; }
}

Room.prototype.buildExtractor = function()
{
    let mineral = Game.getObjectById(this.memory.minerals);
    let x; let y;
    this.createConstructionSite(mineral.pos.x, mineral.pos.y, STRUCTURE_EXTRACTOR);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}