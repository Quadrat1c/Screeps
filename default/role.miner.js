Creep.prototype.doMine = function()
{
    if (this.room.memory.creeps.harvesters > 0 && this.room.memory.creeps.haulers > 0)
    {
        let spawn = Game.getObjectById(this.room.memory.spawn);
        if (spawn)
        {
            if (spawn.recycleCreep(this) == ERR_NOT_IN_RANGE)
            {
                this.travelTo(spawn.pos, { ignoreCreeps: false });
            }
            return;
        }
    }
    
    if(!this.memory.working && this.carry[RESOURCE_ENERGY] == this.carryCapacity)
    {
        this.memory.working = true;
        //this.say('Carrying');
    }
    if(this.memory.working && this.carry[RESOURCE_ENERGY] == 0)
    {
        this.memory.working = false;
        this.memory.target = this.findSource();
        //this.say('Mining');
    }
    
    if(!this.memory.working)
    {
        if(this.getEnergy()) { return; }
        
        if (!this.memory.target || this.memory.target == 'error')
        {
            this.memory.target = this.findSource();
        }
        
        let source = Game.getObjectById(this.memory.target);
        if(this.harvest(source) == ERR_NOT_IN_RANGE)
        {
            this.travelTo(source);
        }
    }
    else
    {
        this.findSpawnOrExtension();
    }
};