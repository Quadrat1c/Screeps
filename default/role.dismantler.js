'use strict';

Creep.prototype.doDismantler = function() {
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
            //this.moveHome();
        }
        return;
    }

    if (this.room.name === this.memory.target) {

        let hostileTowers = this.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
            filter: function(structs) {
                return (structs.structureType === STRUCTURE_TOWER);
            }
        });
        if (hostileTowers) {
            this.say('Bow2thaCow', true);
            if (this.dismantle(hostileTowers) === ERR_NOT_IN_RANGE) {
                this.travelTo(hostileTowers);
            }
            return;
        }
        //this.moveHome();
        //return;
        let hostileStructures = this.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES,
            {
                filter: (structure) =>
                {
                    return (structure.structureType === STRUCTURE_SPAWN ||
                        structure.structureType === STRUCTURE_EXTENSION ||
                        structure.structureType === STRUCTURE_STORAGE ||
                        structure.structureType === STRUCTURE_TERMINAL ||
                        structure.structureType === STRUCTURE_LAB ||
                        structure.structureType === STRUCTURE_LINK);
                        //structure.store < structure.storeCapacity;
                }
            });
        if (hostileStructures) {
            if (this.dismantle(hostileStructures) === ERR_NOT_IN_RANGE) {
                this.travelTo(hostileStructures);
            }
        }
        else
        {
            //this.heal(this);
            if(this.hits < this.hitsMax) {
                //this.moveHome();
            }

            else { this.travelTo(new RoomPosition(25, 25, this.memory.target), {ignoreRoads: true}); }
        }
    } else {
        if(this.hits >= this.hitsMax) {
            //this.moveHome();
            this.travelTo(new RoomPosition(25, 25, this.memory.target), {ignoreRoads: true});
        }
    }
};