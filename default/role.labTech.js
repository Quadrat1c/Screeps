'use strict';

Creep.prototype.doLabTech = function() {
    //this.termToStorageEnergy();
    //return;

    if (this.ticksToLive < 50 && _.sum(this.carry) === 0) {
        // labTech will die soon recycle
        let spawn = Game.getObjectById(this.room.memory.spawn);
        if (spawn.recycleCreep(this) === ERR_NOT_IN_RANGE) {
            this.travelTo(spawn);
        }
    } else {
        // Memory.rooms['E8S5'].resources.resourceA = RESOURCE_UTRIUM_LEMERGITE;
        // Memory.rooms['E8S5'].resources.resourceA = RESOURCE_ZYNTHIUM_KEANITE;
        let resourceA = this.room.memory.resources.resourceA;
        let resourceB = this.room.memory.resources.resourceB;
        let labA = Game.getObjectById(this.room.memory.resources.reactions.seed_a);
        let labB = Game.getObjectById(this.room.memory.resources.reactions.seed_b);
        let terminal = Game.getObjectById(this.room.memory.terminal);

        if (this.memory.mineralTypeError) {
            this.travelTo(terminal);
            this.transfer(terminal, this.memory.mineralType);
            if (_.sum(this.carry) === 0) {
                this.memory.mineralTypeError = false;
            }
            return;
        }

        if (this.memory.emptyLabs) {
            this.labTechThings(labA, labB, terminal, resourceA, resourceB);
            return;
        }

        if (labA.mineralAmount < 5) {
            // Get resourceA
            if (_.sum(this.carry) === 0) {
                if (terminal.store[resourceA] > 100) {
                    this.memory.mineralType = resourceA;
                    if (this.withdraw(terminal, resourceA) === ERR_NOT_IN_RANGE) {
                        this.travelTo(terminal);
                    }
                } else {
                    this.memory.emptyLabs = true;
                }
                return;
            } else {
                if (this.transfer(labA, resourceA) === ERR_NOT_IN_RANGE) {
                    this.travelTo(labA);
                } else if (this.transfer(labA, resourceA === '-11')) {
                    this.memory.mineralTypeError = true;
                }
            }
            return;
        }

        if (labB.mineralAmount < 5) {
            // Get resourceB
            if (_.sum(this.carry) === 0) {
                if (terminal.store[resourceB] > 100) {
                    this.memory.mineralType = resourceB;
                    if (this.withdraw(terminal, resourceB) === ERR_NOT_IN_RANGE) {
                        this.travelTo(terminal);
                    }
                } else {
                    this.memory.emptyLabs = true;
                }
                return;
            } else {
                if (this.transfer(labB, resourceB) === ERR_NOT_IN_RANGE) {
                    this.travelTo(labB);
                }
            }
            return;
        }

        this.labTechThings(labA, labB, terminal, resourceA, resourceB);

    }
};

Creep.prototype.labTechThings = function(labA, labB, terminal, resourceA, resourceB) {
    let target = this.pos.findClosestByRange(FIND_MY_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType === STRUCTURE_LAB)
                && structure.energy < 10;
        }
    });
    if(target) {
        if (_.sum(this.carry) === 0) {
            if (terminal.store[RESOURCE_ENERGY] > 1000) {
                if (this.withdraw(terminal, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    this.travelTo(terminal);
                }
            }
            return;
        } else {
            this.travelTo(target);
            this.transfer(target, RESOURCE_ENERGY);
        }
        return;
    }


    let labs = this.room.find(FIND_MY_STRUCTURES, {
        filter: (structure) => { return (structure.structureType === STRUCTURE_LAB) }
    });
    let outputLabs = [];

    for (let i in labs) {
        if (labs[i] === labA || labs[i] === labB)
            continue;
        if (labs[i].mineralAmount > 500) {
            outputLabs.push(labs[i]);
        }
    }
    if (outputLabs.length) {
        if (_.sum(this.carry) === 0) {
            this.memory.mineralType = outputLabs[0].mineralType;
            if (this.withdraw(outputLabs[0], outputLabs[0].mineralType) === ERR_NOT_IN_RANGE) {
                this.travelTo(outputLabs[0]);
            }
        } else {
            this.travelTo(terminal);
            this.transfer(terminal, this.memory.mineralType);
        }
        return;
    }

    if (this.fillNuker(terminal)) {
        return;
    }

    if (this.memory.emptyLabs) {
        outputLabs = [];
        for (let i in labs) {
            if (labs[i].mineralAmount > 0) {
                outputLabs.push(labs[i]);
            }
        }

        if (outputLabs.length) {
            if (_.sum(this.carry) === 0) {
                this.memory.mineralType = outputLabs[0].mineralType;
                if (this.withdraw(outputLabs[0], outputLabs[0].mineralType) === ERR_NOT_IN_RANGE) {
                    this.travelTo(outputLabs[0]);
                }
                return;
            } else {
                if (this.transfer(terminal, this.memory.mineralType) === ERR_NOT_IN_RANGE) {
                    this.travelTo(terminal);
                }
            }
            return;
        } else {
            if (_.sum(this.carry) > 0) {
                if (this.transfer(terminal, this.memory.mineralType) === ERR_NOT_IN_RANGE) {
                    this.travelTo(terminal);
                }
            } else {
                //console.log(terminal.store[resourceB] > 100 && terminal.store[resourceA] > 100);
                if (terminal.store[resourceB] > 100 && terminal.store[resourceA] > 100) {

                    this.memory.emptyLabs = false;
                }
                this.travelTo(labB);
            }
        }
    }
};

Creep.prototype.fillNuker = function(terminal) {
    let nuker = Game.getObjectById(this.room.memory.nuker);

    if (nuker && nuker.ghodium < 5000) {
        if (_.sum(this.carry) === 0) {
            if (terminal.store[RESOURCE_GHODIUM] === 0) {
                return false;
            }
            this.memory.mineralType = RESOURCE_GHODIUM;
            if (this.withdraw(terminal, RESOURCE_GHODIUM) === ERR_NOT_IN_RANGE) {
                this.travelTo(terminal);
            }
            return true;
        } else {
            if (this.transfer(nuker, this.memory.mineralType) === ERR_NOT_IN_RANGE) {
                this.travelTo(nuker);
            }
            return true;
        }
    } else {
        return false;
    }
};

Creep.prototype.termToStorageEnergy = function() {
    let terminal = Game.getObjectById(this.room.memory.terminal);
    let storage = Game.getObjectById(this.room.memory.storage);

    if (terminal.store[RESOURCE_ENERGY] > 60000) {
        if (_.sum(this.carry) === 0) {
            if (this.withdraw(terminal, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                this.travelTo(terminal);
            }
            return true;
        } else {
            if (this.transfer(storage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                this.travelTo(storage);
            }
            return true;
        }
    }
    return false;
};