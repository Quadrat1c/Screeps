'use strict';

Room.prototype.run = function() {
    this.init();
    this.doUpkeep();
    this.runEnergyCon();
    this.runDefCon();
    this.tryConstruct();
    this.cacheRoom();
    this.doOperations();
    
    if (global.config.options.reportControllerUpgrade) {
        this.reportControllerUpgrade();
    }

    //this.viewRoom();
    //this.launchNuke();
};

Room.prototype.launchNuke = function() {

    if (this.name === 'E9S9') {
        let missile = Game.getObjectById(this.memory.nuker);
        missile.launchNuke(new RoomPosition(11,31, 'E12S6'));
    }/*
    if (this.name === 'E8S5') {
        let missile = Game.getObjectById(this.memory.nuker);
        missile.launchNuke(new RoomPosition(10,34, 'E13N1'));
    }*/
};

Room.prototype.viewRoom = function() {
    if (this.name === 'E9S9') {
        let observer = Game.getObjectById(this.memory.observer);
        console.log(observer);
        let ret = observer.observeRoom('E13S8');
        if (ret === OK) {
            this.memory.creeps.dismantler = 0;
        }
    }
};

Room.prototype.runDefCon = function() {
    const threats = this.find(FIND_HOSTILE_CREEPS, {
        filter: c => c.getActiveBodyparts(ATTACK) || c.getActiveBodyparts(RANGED_ATTACK) || c.getActiveBodyparts(WORK)
    });
    if (threats && threats.length) {
        let opsTotal = 0;
        for (let i in threats) {
            opsTotal += threats[i].getActiveBodyparts(ATTACK);
            opsTotal += threats[i].getActiveBodyparts(RANGED_ATTACK);
            opsTotal += threats[i].getActiveBodyparts(WORK);
        }
        if (opsTotal > 5) {
            this.memory.defConMode = 'active';
            console.log(txt(COLOR.warn, this.name + ' Threat: ' + opsTotal + ' DefCon Mode Activated.'));
        } else {
            console.log(txt(COLOR.warn, this.name + ' Threat: ' + opsTotal + ' Weak attack, DefCon is Inactive'));
        }
    } else {
        this.memory.defConMode = 'inactive';
    }
};

Room.prototype.runEnergyCon = function() {
    let storage = this.find(FIND_MY_STRUCTURES, {
        filter: (structure) => { return (structure.structureType === STRUCTURE_STORAGE) }
    });
    if (storage[0]) {
        let energyAmount = storage[0].store[RESOURCE_ENERGY];
        if (energyAmount >= 100000) {
            this.memory.energyConMode = 5;
        } else if (energyAmount >= 70000) {
            this.memory.energyConMode = 4;
        } else if (energyAmount >= 50000) {
            this.memory.energyConMode = 3;
        } else if (energyAmount >= 30000) {
            this.memory.energyConMode = 2;
        } else if (energyAmount >= 15000) {
            this.memory.energyConMode = 1;
        } else {
            this.memory.energyConMode = 0;
        }
    } else {
        this.memory.energyConMode = 0;
    }
};

Room.prototype.init = function() {
    let spawns;
    if (!this.memory.spawn) {
        spawns = this.find(FIND_MY_SPAWNS);
        if (spawns.length) { this.memory.spawn = spawns[0].id; }
    }

    let sources;
    if (!this.memory.sources) {
        this.memory.sources = [];
        sources = this.find(FIND_SOURCES);
        for (let source of sources) {
            this.memory.sources.push(source.id);
            source.memory.harvester = 'none';
            source.memory.harvestPos = findConstructionSite(source, this.name);
        }
    }

    let minerals;
    if (!this.memory.minerals) {
        this.memory.minerals = [];
        minerals = this.find(FIND_MINERALS);
        for (let mineral of minerals) {
            this.memory.minerals.push(mineral.id);
            //mineral.memory.mineralMiner = 'none';
            //mineral.memory.harvestPos = findConstructionSite(mineral, this.name);
        }
    }

    if (!this.memory.mineralType) {
        minerals = this.find(FIND_MINERALS);
        for (let i in minerals) {
            let mineral = minerals[i];
            this.memory.mineralType = mineral.mineralType;
        }
    }

    // Check creep count memory
    if(!this.memory.creeps) { this.memory.creeps = {}; }
    if(!this.memory.creeps.miners) { this.memory.creeps.miners = 0; }
    if(!this.memory.creeps.harvesters) { this.memory.creeps.harvesters = 0; }
    if(!this.memory.creeps.haulers) { this.memory.creeps.haulers = 0; }
    if(!this.memory.creeps.builders) { this.memory.creeps.builders = 0; }
    if(!this.memory.creeps.repairers) { this.memory.creeps.repairers = 0; }
    if(!this.memory.creeps.upgraders) { this.memory.creeps.upgraders = 0; }
    if(!this.memory.creeps.suppliers) { this.memory.creeps.suppliers = 0; }
    if(!this.memory.creeps.bouncers) { this.memory.creeps.bouncers = 0; }
    if(!this.memory.creeps.rangers) { this.memory.creeps.rangers = 0; }
    if(!this.memory.creeps.dismantler) { this.memory.creeps.dismantler = 0; }
    if(!this.memory.creeps.drainer) { this.memory.creeps.drainer = 0; }
    if(!this.memory.creeps.longBuilders) { this.memory.creeps.longBuilders = 0; }
    if(!this.memory.creeps.mineralMiners) {this.memory.creeps.mineralMiners = 0; }
    if(!this.memory.creeps.labTechs) {this.memory.creeps.labTechs = 0; }
};

Room.prototype.doUpkeep = function() {
    let spawns = this.find(FIND_MY_SPAWNS);
    if (!spawns.length) {
        delete this.memory.spawn;
        return;
    }
    
    if(this.memory.hostile)           { delete this.memory.hostile; }
    if(this.memory.hostileControlled) { delete this.memory.hostileControlled; }
    if(this.memory.hostileStructures) { delete this.memory.hostileStructures; }
        
    this.findExitPositions();
    this.findExitRooms();
    this.getSourceRangeInfo();
    
    // Increment scout spawn timer
    if(this.controller.level >= 3) {
        if(!this.memory.scoutTick) { this.memory.scoutTick = 0; }
        if(this.memory.scoutTick < global.config.options.scoutTimer) { this.memory.scoutTick++; }
    }
    
    // Spawn creeps
    spawns = this.find(FIND_MY_SPAWNS);
    for (let spawn of spawns) {
        spawn.doSpawn(this);
    }
    
    // Operate towers
    let towers = this.find(FIND_MY_STRUCTURES, {
        filter: (structure) => (structure.structureType === STRUCTURE_TOWER)
    });
    for (let tower of towers) {
        if (tower) {
            tower.activate();
        }
    }
    
    // Operate links
    let spawnLink = Game.getObjectById(this.memory.spawnLink);
    if (spawnLink) {
        let controllerLink = Game.getObjectById(this.memory.controllerLink);
        if (controllerLink && (controllerLink.energy < controllerLink.energyCapacity * 0.3)) {
            spawnLink.transferEnergy(controllerLink);
        }
    }
    
    // Check for missing harvesters
    let sources = this.find(FIND_SOURCES);
    for (let source of sources) {
        if (source.memory.harvester === "active") {
            if (source.memory.checkTick && source.memory.checkTick <= 0) {
                source.memory.harvester = "none";
            } else {
                source.memory.checkTick--;
            }
        }
    }
};

Room.prototype.doOperations = function () {
    // Operate Terminal Orders
    if (global.config.options.enableTerminal) {
        let terminals = this.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType === STRUCTURE_TERMINAL); //||
                //structure.structureType == STRUCTURE_STORAGE); //&&
                //structure.store < structure.storeCapacity;
            }
        });

        if (terminals) {
            for (let terminal of terminals) {
                terminal.doTerminal(this);
            }
        }
    }

    // Operate Labs
    if (global.config.options.enableLabs) {
        let labs = this.find(FIND_MY_STRUCTURES, {
            filter: (structure) => { return (structure.structureType === STRUCTURE_LAB) }
        });
        this.autoRegisterLabs(labs);

        if (labs.length >= 10) {
            if (this.flowerRegisterCheck(labs)) {
                // TODO: get labs running
                // labs are registered and ready to run!
                let data = this.memory.resources.reactions;
                let slave_a = Game.getObjectById(data.seed_a);
                let slave_b = Game.getObjectById(data.seed_b);
                if (slave_a.mineralAmount < 5) { return; }
                if (slave_b.mineralAmount < 5) { return; }

                let outputLabs = [];

                //Grab the output labs from the room object. The output labs are the ones that aren't the inputs

                for (let i in labs) {
                    if (labs[i] === slave_a || labs[i] === slave_b)
                        continue;
                    outputLabs.push(labs[i]);
                }

                for (let i = 0; i < outputLabs.length; i++) {
                    if (outputLabs[i].cooldown > 0) { return; }
                    if (outputLabs[i].runReaction(slave_a, slave_b) === OK) {

                    } else {
                        console.log(outputLabs[i].runReaction(slave_a, slave_b));
                    }
                }
            } else {
                // we do not have registered labs run auto register
                this.autoRegisterLabs(labs);
            }
        }
    }
};

Room.prototype.reportControllerUpgrade = function() {
    if (!this.memory.controlTick) {
        this.memory.controlTick = 0;
    }
    if (this.memory.controlTick < 500) {
        this.memory.controlTick++;
    } else {
        this.memory.controlTick = 0;
        let progress = this.controller.progress;
        if (!this.memory.controlProg) {
            this.memory.controlProg = progress;
        } else {
            let newDiff = progress - this.memory.controlProg;
            let rate = newDiff / 500;
            let progLeft = this.controller.progressTotal - this.controller.progress;
            console.log(txt(COLOR.info, 'Room ' + this.name + ' controller Upgrade - Rate: ' + rate + ' ETA: ' + progLeft / rate + ' ticks.'));
        }
        this.memory.controlProg = progress;
    }
};

Room.prototype.getSourceRangeInfo = function() {
    if (!this.memory.avgSourceRange || this.memory.avgSourceRange == null) {
        let range = 0;
        let spawn = Game.getObjectById(this.memory.spawn);
        let sources = this.find(FIND_SOURCES);
        
        for (let i = 0; i < sources.length; i++) {
            let sourcePos = { pos: sources[i].pos, range: 1 };
            let results = PathFinder.search(spawn.pos, sourcePos, { swampCost: 2});
            if (results.incomplete) {
                console.log('source range pathing error');
            } else {
                range += results.path.length;
            }
        }
        this.memory.avgSourceRange = range / sources.length;
    }
    
    if (!this.memory.avgSourceSeparation || this.memory.avgSourceSeparation == null) {
        let distance = 0;
        let sources = this.find(FIND_SOURCES);
        
        for (let i = 0; i < sources.length; i++) {
            let iPosition = new RoomPosition(sources[i].memory.harvestPos.x, sources[i].memory.harvestPos.y, this.name);
            let sourceDistance = 0;
            for (let j = 0; j < sources.length; j++) {
                if (j !== i) {
                    let jPosition = new RoomPosition(sources[j].memory.harvestPos.x, sources[j].memory.harvestPos.y, this.name);
                    let sourcePos = { pos: jPosition, range: 1 };
                    let results = PathFinder.search(iPosition, sourcePos, { swampCost: 2});
                    if (results.incomplete) {
                        console.log('source range pathing error');
                    } else {
                        sourceDistance += results.path.length;
                    }
                }
            }
            distance += sourceDistance / (sources.length - 1);
        }
        this.memory.avgSourceSeparation = distance / sources.length;
    }
};

Room.prototype.findRepairTarget = function() {
    let damagedStructures = this.find(FIND_STRUCTURES, {
        filter: (structure) => (structure.hits < structure.hitsMax && structure.structureType !== STRUCTURE_WALL && structure.structureType !== STRUCTURE_RAMPART && structure.structureType !== STRUCTURE_ROAD)
                            || (structure.hits < global.config.options.minWallHits && (structure.structureType === STRUCTURE_WALL || structure.structureType === STRUCTURE_RAMPART))
                            || (structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax * 0.6)
    });
    if (damagedStructures.length) {
        let lowestHitStructure = _.min(damagedStructures, _.property('hits'));
        return lowestHitStructure.id;
    } else {
        return undefined;
    }
};

Room.prototype.getNumDamagedWalls = function() {
    let hitLimit = global.config.options.minWallHits;
    if (this.controller.level >= 8) {
        hitLimit = 300000000;
    }
    
    let damagedStructures = this.find(FIND_STRUCTURES, {
        filter: (structure) => (structure.hits < hitLimit && (structure.structureType === STRUCTURE_WALL
                             || structure.structureType === STRUCTURE_RAMPART))
    });
    return damagedStructures.length ? damagedStructures.length : 0;
};

Room.prototype.getNumRepairTargets = function() {
    let damagedStructures = this.find(FIND_STRUCTURES, {
        filter: (structure) => (structure.hits < structure.hitsMax && structure.structureType !== STRUCTURE_WALL && structure.structureType !== STRUCTURE_RAMPART && structure.structureType !== STRUCTURE_ROAD)
                            || (structure.hits < global.config.options.minWallHits && (structure.structureType === STRUCTURE_WALL || structure.structureType === STRUCTURE_RAMPART))
                            || (structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax * 0.6)
    });
    return damagedStructures.length ? damagedStructures.length : 0;
};

Room.prototype.tryColonize = function(spawn) {
    if (this.memory.energyConMode < 2) { // < 3
        return false;
    }

    let allFlags = Object.keys(Game.flags);
    for (let it of allFlags) {
        let flag = Game.flags[it];
        if (flag.color === COLOR_GREEN) {
            if (ableToClaimRoom() && !Memory.rooms[flag.pos.roomName].colonizing && (!flag.room || !flag.room.controller)) {
                let ret = spawn.createClaimer(getMaximum(this.energyCapacityAvailable * 0.5, 650), flag.pos.roomName, true);
                if (ret === OK) {
                    Memory.rooms[flag.pos.roomName].colonizing = true;
                    console.log(txt(COLOR.info, 'Spawning claimer to colonize room ' + flag.pos.roomName));
                } else if (ret !== ERR_NOT_ENOUGH_ENERGY) { console.log(txt(COLOR.error, 'Error spawning claimer: ' + ret)); }
                return true;
            }
            if (flag.room && flag.room.controller && flag.room.controller.my) {
                if (flag.room.memory.creeps.longBuilders < 3) {
                    let ret = spawn.createLongDistanceBuilder(getMaximum(this.energyCapacityAvailable * 0.7, 900), flag.room.name);
                    if (ret === OK) {
                        flag.room.memory.creeps.longBuilders++;
                        console.log(txt(COLOR.info, 'Spawning builder to colonize room ' + flag.room.name));
                    } else if (ret !== ERR_NOT_ENOUGH_ENERGY) { console.log(txt(COLOR.error, 'Error spawning long distance builder: ' + ret)); }
                    return true;
                }
            }
        }
    }
    return false;
};

Room.prototype.createLabHub = function(labs) {
    let cache = labs[0].room.memory.reactions.labHubs || {};
    let key = labs[0].id;
    cache[key] = {
      lab1: labs[0].id,
      lab2: labs[1].id,
      outputLab: labs[2].id
    };
    labs[0].room.memory.reactions.labHubs = cache;
};