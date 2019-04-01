'use strict';

Creep.prototype.doRanger = function()
{
    if (this.room.name === this.memory.target) {
        let hostileCreeps = this.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        //let hostileStructures = this.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
        let hostileStructures = this.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
            filter: function(structs)
            {
                return (structs.structureType === STRUCTURE_TOWER ||
                    structs.structureType === STRUCTURE_SPAWN ||
                    structs.structureType === STRUCTURE_EXTENSION||
                    structs.structureType === STRUCTURE_STORAGE ||
                    structs.structureType === STRUCTURE_RAMPART);
            }
        });

        let constructionSites = this.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);

        if(hostileCreeps)
        {
            if(this.rangedAttack(hostileCreeps) === ERR_NOT_IN_RANGE) { this.travelTo(hostileCreeps); }
            this.kite(hostileCreeps);
            this.heal(this);
            return;
        }
        else if (hostileStructures) {
            if(this.rangedAttack(hostileStructures) === ERR_NOT_IN_RANGE) { this.travelTo(hostileStructures); }
            this.heal(this);
            return;
        } else if (constructionSites) {
            this.travelTo(constructionSites);
            return;
        } else {
            if (this.hits < this.hitsMax) {
                this.heal(this);
            } else {
                let myCreep = this.pos.findClosestByRange(FIND_MY_CREEPS, {
                    filter: c => c.getActiveBodyparts(ATTACK)
                });
                if (myCreep) {
                    if (myCreep.hits < myCreep.hitsMax) {
                        if (this.heal(myCreep) === ERR_NOT_IN_RANGE) {
                            this.travelTo(myCreep);
                        }
                    } else {
                        this.travelTo(myCreep);
                    }
                } else {
                    this.travelTo(new RoomPosition(25, 25, this.memory.target), {ignoreRoads: true});
                }
            }
        }
    }
    else
    {
        let constructionSites = this.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
        if (constructionSites) {
            this.travelTo(constructionSites);
        }
        if(this.hits >= this.hitsMax)
        {
            let friendlyCreep = this.pos.findClosestByRange(FIND_MY_CREEPS);
            if (friendlyCreep.hits < friendlyCreep.hitsMax) {
                if (this.heal(friendlyCreep) === ERR_NOT_IN_RANGE) {
                    this.travelTo(friendlyCreep);
                }
            } else {
                this.travelTo(new RoomPosition(25, 25, this.memory.target), {ignoreRoads: true});
            }
        }
    }
};

Creep.prototype.kite = function (fleeRange = 3) {
    let avoid = this.room.find(FIND_HOSTILE_CREEPS, {filter: (c) => c.getActiveBodyparts(ATTACK) > 0 || c.getActiveBodyparts(RANGED_ATTACK) > 0});

    let avoidance = _.map(this.pos.findInRange(avoid, fleeRange + 1),
        (c) => {
            return {pos: c.pos, range: 15};
        });
    let creep = this;
    let ret = PathFinder.search(this.pos, avoidance, {
        flee: true,
        swampCost: 50,
        maxRooms: 1,

        roomCallback: function (roomName) {
            let costs = new PathFinder.CostMatrix;
            addBorderToMatrix(creep.room, costs);
            return costs;
        }

    });

    if (ret.path.length > 0) {
        return this.move(this.pos.getDirectionTo(ret.path[0]));
    } else {
        return OK;
    }
};

/*
Creep.prototype.kite = function(target) {
    let range = this.pos.getRangeTo(target);
    if(range === 3 && target.getActiveBodyparts(ATTACK) > 0) {
        let x = this.pos.x + this.pos.x - target.pos.x;
        let y = this.pos.y + this.pos.y - target.pos.y;
        this.travelTo(new RoomPosition(x, y, this.memory.target), {ignoreRoads: true});
    } else if (range >= 3) {
        this.travelTo(target);
        return true;
    } else {
        let x = this.pos.x + this.pos.x - target.pos.x;
        let y = this.pos.y + this.pos.y - target.pos.y;
        this.travelTo(new RoomPosition(x, y, this.memory.target), {ignoreRoads: true});
        return true;
    }
};*/