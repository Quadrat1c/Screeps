'use strict';

Creep.prototype.doBounce = function() {
    if ((this.memory.target === this.memory.homeRoom && Memory.rooms[this.memory.target].defConMode === 'inactive')
        || (Memory.rooms[this.memory.target].neighborData && !Memory.rooms[this.memory.target].neighborData.hostile)) {
        if (this.room.name === this.memory.homeRoom) {
            let spawn = Game.getObjectById(this.room.memory.spawn);
            if (spawn) {
                if (spawn.recycleCreep(this) === ERR_NOT_IN_RANGE) {
                    this.travelTo(spawn.pos, { ignoreCreeps: false });
                }
            }
        } else {
            this.moveHome();
        }
        return;
    }
    
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
        if (hostileCreeps) {
            if (this.attack(hostileCreeps) === ERR_NOT_IN_RANGE) {
                this.travelTo(hostileCreeps);
            }
        } else if (hostileStructures) {
            if(this.attack(hostileStructures) === ERR_NOT_IN_RANGE) { this.travelTo(hostileStructures); }
        }
        else
        {
            //this.heal(this);
            if(this.hits < this.hitsMax) {
                this.moveHome();
            }
            else { this.travelTo(new RoomPosition(25, 25, this.memory.target), {ignoreRoads: true}); }
        }
    }
    else
    {
        if(this.hits >= this.hitsMax)
        {
            this.travelTo(new RoomPosition(25, 25, this.memory.target), {ignoreRoads: true});
        }
    }
};