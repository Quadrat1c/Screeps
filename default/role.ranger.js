'use strict';

Creep.prototype.doRanger = function()
{
    /*
    if((this.memory.target == this.memory.homeRoom && Memory.rooms[this.memory.target].defConMode == 'inactive')
        || (Memory.rooms[this.memory.target].neighborData && !Memory.rooms[this.memory.target].neighborData.hostile))
    {
        if(this.room.name == this.memory.homeRoom)
        {
            let spawn = Game.getObjectById(this.room.memory.spawn);
            if (spawn)
            {
                if (spawn.recycleCreep(this) == ERR_NOT_IN_RANGE)
                {
                    this.travelTo(spawn.pos, { ignoreCreeps: false });
                }
            }
        }
        else
        {
            this.moveHome();
        }
        return;
    }*/
    
    if(this.room.name == this.memory.target)
    {
        let hostileCreeps = this.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        //let hostileStructures = this.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
        let hostileStructures = this.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
            filter: function(structs)
            {
                return (structs.structureType == STRUCTURE_TOWER || 
                        structs.structureType == STRUCTURE_SPAWN || 
                        structs.structureType == STRUCTURE_EXTENSION);
            }
        });

        let constructionSites = this.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
        
        if(hostileCreeps)
        {
            this.kite(hostileCreeps);
            if(this.rangedAttack(hostileCreeps) == ERR_NOT_IN_RANGE) { this.travelTo(hostileCreeps); }
            //this.kite(hostileCreeps);
            this.heal(this);
            return;
        }
        else if (hostileStructures)
        {
            if(this.rangedAttack(hostileStructures) == ERR_NOT_IN_RANGE) { this.travelTo(hostileStructures); }
            this.heal(this);
            return;
        }
        else if (constructionSites)
        {
            this.travelTo(constructionSites);
            return;
        }
        else(this.hits >= this.hitsMax)
        {
            if(this.hits < this.hitsMax) { this.heal(this); }
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
    if (target.pos.inRangeTo(this.pos, 2)) {
        //this.travelTo(target.x + 1);
        //this.travelTo(this.pos.x + 1);
        console.log('rangerKite', this.pos, this.pos.x, target.pos);
        this.travelTo(new RoomPosition(this.pos.x + this.pos.x - target.pos.x, this.pos.y + this.pos.y - target.pos.y), {ignoreRoads: true});
        return true;
    } else if (target.pos.inRangeTo(this.pos, 3)) {
        this.travelTo(target);
        return true;
    } else {
        this.travelTo(target);
        return true;
    }
    return false;
}