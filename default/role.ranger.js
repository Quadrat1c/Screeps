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
                    structs.structureType === STRUCTURE_EXTENSION);
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
        else if (hostileStructures)
        {
            if(this.rangedAttack(hostileStructures) === ERR_NOT_IN_RANGE) { this.travelTo(hostileStructures); }
            this.heal(this);
            return;
        }
        else if (constructionSites)
        {
            this.travelTo(constructionSites);
            return;
        } else {
            if (this.hits < this.hitsMax) { this.heal(this); }
            this.travelTo(new RoomPosition(25, 25, this.memory.target), {ignoreRoads: true});
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
            this.travelTo(new RoomPosition(25, 25, this.memory.target), {ignoreRoads: true});
        }
    }
};

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
};