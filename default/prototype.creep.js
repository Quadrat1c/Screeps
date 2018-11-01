'use strict';

Creep.prototype.run = function() {
    try {
        switch (this.memory.role) {
            case 'harvester':
                this.doHarvest();
                break;
            case 'upgrader':
                this.doUpgrade();
                break;
            case 'builder':
                this.doBuild();
                break;
            case 'repairer':
                this.doRepair();
                break;
            case 'hauler':
                this.doHaul();
                break;
            case 'miner':
                this.doMine();
                break;
            case 'mineralMiner':
                this.doMineralMine();
                break;
            case 'supplier':
                this.doSupply();
                break;
            case 'scout':
                this.doScout();
                break;
            case 'signer':
                this.doSigner();
                break;
            case 'longDistanceHarvester':
                this.doLongDistanceHarvest();
                break;
            case 'longDistanceHauler':
                this.doLongDistanceHaul();
                break;
            case 'longDistanceBuilder':
                this.doLongDistanceBuild();
                break;
            case 'claimer':
                this.doClaim();
                break;
            case 'bouncer':
                this.doBounce();
                break;
            case 'ranger':
                this.doRanger();
                break;
            case 'labTech':
                this.doLabTech();
                break;
            default:
                console.log('ERROR: Creep ' + this.name + ' does not have a role.');
                break;
        }
    } catch(ex) {
        console.log('Creep action error - Role: ' + this.memory.role + ' Exception: ' + ex.toString());
    }
};

Creep.prototype.getEnergy = function() {
    if (this.memory.role === 'hauler' || this.memory.role === 'supplier' || this.room.memory.energyConMode < 2) {
        let source = this.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
            filter: (resource) => { return resource.resourceType === RESOURCE_ENERGY && (resource.amount >= getMinimum(this.carryCapacity / 2, 50)) && resource.room.name === this.room.name }
        });
        if (this.room.controller.level < 4) {
            if (source) {
                if (this.pickup(source) === ERR_NOT_IN_RANGE) {
                    this.travelTo(source, { ignoreCreeps: false });
                }
                return true;
            }
        } else {
            // Swapped ground energy and added tombstones for tombstone patch
            let tombstone = this.pos.findClosestByRange(FIND_TOMBSTONES);
        
            if (tombstone && tombstone.store[RESOURCE_ENERGY] > 0 && this.pos.getRangeTo(tombstone.pos) <= 10) {
                if (this.withdraw(tombstone, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    this.travelTo(tombstone, {ignoreCreeps: false });
                }
                return true;
            } else {
                if (source && this.pos.getRangeTo(source.pos) <= 15) {
                    if (this.pickup(source) === ERR_NOT_IN_RANGE) {
                        this.travelTo(source, { ignoreCreeps: false });
                    }
                    return true;
                }
            }
        }
        
        let limit = getMinimum(this.carryCapacity, 100);
        if (this.memory.role === 'hauler') {
            limit = this.carryCapacity * 0.5;
        }
        let container = this.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => { return (structure.structureType === STRUCTURE_CONTAINER) &&
            (structure.store[RESOURCE_ENERGY] >= limit) && structure.room.name === this.room.name }
        });
        if (container) {
            if (this.withdraw(container, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                this.travelTo(container, { ignoreCreeps: false });
            }
            return true;
        }
    }
    
    return this.withdrawFromStorage();
};

Creep.prototype.moveHome = function() {
    if (this.memory.homeRoom) {
        let pos = new RoomPosition(25, 25, this.memory.homeRoom);
        this.travelTo(pos);
        return true;
    }
    return false;
};

Creep.prototype.findSource = function() {
    let sources = this.room.find(FIND_SOURCES);
    for (let i in sources) {
        let source = sources[i];
        if (checkSpaceToHarvest(source)) {
            return source.id;
        }
    }
    return 'error';
};

Creep.prototype.findMineral = function() {
    let minerals = this.room.find(FIND_MINERALS);
    for (let i in minerals) {
        let mineral = minerals[i];
        if (checkSpaceToHarvest(mineral)) {
            return mineral.id;
        }
    }
    return 'error findMineral()';
};

Creep.prototype.withdrawFromStorage = function() {
    if (this.room.memory.storage) {
        let storageStructure = Game.getObjectById(this.room.memory.storage);
        if (storageStructure) {
            if (storageStructure.store[RESOURCE_ENERGY] <= 500) {
                return false;
            }
            this.travelTo(storageStructure);
            this.withdraw(storageStructure, RESOURCE_ENERGY);
            return true;
        }
    }
    return false;
};

Creep.prototype.withdrawFromTerminal = function() {
    if (this.room.memory.terminal) {
        let terminalStructure = Game.getObjectById(this.room.memory.terminal);
        if (terminalStructure) {
            if (terminalStructure.store[RESOURCE_ENERGY] <= 500) {
                return false;
            }
            this.travelTo(terminalStructure);
            this.withdraw(terminalStructure, RESOURCE_ENERGY);
            console.log('withdraw from term');
            return true;
        }
    }
    return false;
};

Creep.prototype.checkRecycle = function() {
    if (this.ticksToLive <= 80) {
        if (this.room.name !== this.memory.homeRoom) {
            this.moveHome(); return true;
        }
    
        var spawn = Game.getObjectById(this.room.memory.spawn);
        if (spawn) {
            if (spawn.recycleCreep(this) === ERR_NOT_IN_RANGE) {
                this.travelTo(spawn.pos, { ignoreCreeps: false });
            }
        }
        return true;
    }
    return false;
};

Creep.prototype.moveRandom = function() {
    let num = Math.floor(Math.random() * 8);
    this.move(num);
};

Creep.prototype.detectHostiles = function() {
    const threats = this.room.find(FIND_HOSTILE_CREEPS, {filter: c => c.getActiveBodyparts(ATTACK) || c.getActiveBodyparts(RANGED_ATTACK)});
    if (threats && threats.length) {
        let opsAttack = 0;
        let opsRanged = 0;
        let opsHeal = 0;
        for (let i in threats) {
            opsAttack += threats[i].getActiveBodyparts(ATTACK);
            opsRanged += threats[i].getActiveBodyparts(RANGED_ATTACK);
            opsHeal += threats[i].getActiveBodyparts(HEAL);
        }
        console.log(txt(COLOR.warn, this.room.name + ' attack: ' + opsAttack + ' ranged: ' + opsRanged + ' heal: ' + opsHeal + ' Running to homeRoom'));
        return true;
    } else {
        return false;
    }
};