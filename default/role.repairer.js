'use strict';

Creep.prototype.doRepair = function()
{
    if(!this.memory.repairing) { this.memory.repairing = false; }
    
    if(this.memory.repairing && this.carry[RESOURCE_ENERGY] == 0)
    {
        this.memory.repairing = false;
    }
    if(!this.memory.repairing && this.carry[RESOURCE_ENERGY] == this.carryCapacity)
    {
        this.memory.repairing = true;
        
        if(this.room.name != this.memory.homeRoom) { this.moveHome(); return; }
        this.memory.target = this.room.findRepairTarget();
        //this.memory.repairCount = 0;
    }
    
    if(this.memory.repairing)
    {
        let target = Game.getObjectById(this.memory.target);
        if (!target)
        {
            var spawn = Game.getObjectById(this.room.memory.spawn);
            if (spawn)
            {
                if (spawn.recycleCreep(this) == ERR_NOT_IN_RANGE)
                {
                    this.travelTo(spawn.pos, { ignoreCreeps: false });
                }
                return true;
            }
        }
        else if (target.hits == target.hitsMax)
        {
            if(this.room.name != this.memory.homeRoom) { this.moveHome(); return; }
            this.memory.target = this.room.findRepairTarget();
            //this.memory.repairCount = 0;
        }
    
        let ret = this.repair(target);
        if(ret == ERR_NOT_IN_RANGE)
        {
            this.travelTo(target);
        }
        else if(ret == OK)
        {
            if(!this.pos.isNearTo(target) && this.room.memory.defConMode == 'inactive') { this.travelTo(target); }
            
            // this.memory.repairCount++;
            // if(!this.memory.repairCount) { this.memory.repairCount = 0; }
            // if(this.memory.repairCount >= 25)
            // {
            //     if(this.room.name != this.memory.homeRoom) { this.moveHome(); return; }
            //     this.memory.target = this.room.findRepairTarget();
            //     this.memory.repairCount = 0;
            // }
        }
    }
    else if (this.carry[RESOURCE_ENERGY] < this.carryCapacity)
    {
        this.getEnergy();
    }
};






