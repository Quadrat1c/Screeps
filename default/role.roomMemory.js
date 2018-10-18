'use strict';

Room.prototype.checkRoom = function()
{
    this.init();
    
    // From here onwards is for neighboring rooms only
    if(!this.memory.neighborData) { this.memory.neighborData = {}; }
    
    if(this.controller)
    {
        this.memory.neighborData.hostileControlled = (this.controller.level > 0 && !this.controller.my);
    }
    
    let enemyCreeps = this.find(FIND_HOSTILE_CREEPS);
    let enemyStructures = this.find(FIND_HOSTILE_STRUCTURES);
    this.memory.neighborData.hostile = enemyCreeps.length > 0 || enemyStructures.length > 0;
    
    // Init neighbor operations memory
    if(!this.memory.neighborData.claimer) { this.memory.neighborData.claimer = 'none'; }
    
    let skLair = this.find(FIND_HOSTILE_STRUCTURES).filter(a => a.structureType === 'keeperLair').map(a => a.id);
    if (skLair.length > 0)
    {
        this.memory.neighborData.skLair = true;
    }
    else
    {
        this.memory.neighborData.skLair = false;
    }
};

Room.prototype.cacheRoom = function()
{
    if(!this.memory.cacheTick) { this.memory.cacheTick = 0; }
    if(this.memory.cacheTick < 30) { this.memory.cacheTick++; }
    else
    {
        this.memory.cacheTick = 0;
        //this.cacheTowers();
        //this.cacheRoads();
        //this.cacheContainers();
        this.cacheSites();
        this.cacheStorage();
        this.cacheTerminal();
    }
};

Room.prototype.findExitRooms = function()
{
    if(!this.memory.exitRooms)
    {
        this.memory.exitRooms = [];
        let rooms = Game.map.describeExits(this.name);
        for(var key in rooms)
        {
            this.memory.exitRooms.push(rooms[key]);
        }
    }
}

Room.prototype.findExitPositions = function()
{
    if(!this.memory.leftExits)
    {
        let leftPos = [];
        for(let i = 0; i < 50; i++)
        {
            let target = new RoomPosition(0, i, this.name);
            let terrain = target.lookFor(LOOK_TERRAIN);
            if (terrain[0] != 'wall')
            {
                leftPos.push(target);
            }
        }
        this.memory.leftExits = leftPos;
    }
    
    if(!this.memory.rightExits)
    {
        let rightPos = [];
        for(let i = 0; i < 50; i++)
        {
            let target = new RoomPosition(49, i, this.name);
            let terrain = target.lookFor(LOOK_TERRAIN);
            if (terrain[0] != 'wall')
            {
                rightPos.push(target);
            }
        }
        this.memory.rightExits = rightPos;
    }
    
    if(!this.memory.topExits)
    {
        let topPos = [];
        for(let i = 0; i < 50; i++)
        {
            let target = new RoomPosition(i, 0, this.name);
            let terrain = target.lookFor(LOOK_TERRAIN);
            if (terrain[0] != 'wall')
            {
                topPos.push(target);
            }
        }
        this.memory.topExits = topPos;
    }
    
    if(!this.memory.botExits)
    {
        let botPos = [];
        for(let i = 0; i < 50; i++)
        {
            let target = new RoomPosition(i, 49, this.name);
            let terrain = target.lookFor(LOOK_TERRAIN);
            if (terrain[0] != 'wall')
            {
                botPos.push(target);
            }
        }
        this.memory.botExits = botPos;
    }
}

Room.prototype.cacheTowers = function()
{
    let structures = this.find(FIND_MY_STRUCTURES, 
    {
        filter: (structure) => (structure.structureType == STRUCTURE_TOWER)
    });
    
    let arr = [];
    for(let i in structures)
    {
        arr.push(structures[i].id);
    }
    this.memory.towers = arr;
};

Room.prototype.cacheRoads = function()
{
    let structures = this.find(FIND_STRUCTURES, 
    {
        filter: (structure) => (structure.structureType == STRUCTURE_ROAD)
    });
    
    let arr = [];
    for(let i in structures)
    {
        arr.push(structures[i].id);
    }
    this.memory.roads = arr;
};

Room.prototype.cacheContainers = function()
{
    let structures = this.find(FIND_STRUCTURES, 
    {
        filter: (structure) => (structure.structureType == STRUCTURE_CONTAINER)
    });
    
    let arr = [];
    for(let i in structures)
    {
        arr.push(structures[i].id);
    }
    this.memory.containers = arr;
};

Room.prototype.cacheSites = function()
{
    let structures = this.find(FIND_CONSTRUCTION_SITES);
    
    let arr = [];
    for(let i in structures)
    {
        arr.push(structures[i].id);
    }
    this.memory.sites = arr;
};

Room.prototype.cacheStorage = function()
{
    if(!this.memory.storage || !Game.getObjectById(this.memory.storage))
    {
        let storage = this.find(FIND_MY_STRUCTURES,
        {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURE_STORAGE);
            }
        });
        if(storage[0])
        {
            this.memory.storage = storage[0].id;
        }
    }
};

Room.prototype.cacheTerminal = function()
{
    if(!this.memory.terminal || !Game.getObjectById(this.memory.terminal))
    {
        let terminal = this.find(FIND_MY_STRUCTURES,
        {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURE_TERMINAL);
            }
        });
        if(terminal[0])
        {
            this.memory.terminal = terminal[0].id;
        }
    }
};