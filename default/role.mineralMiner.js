Creep.prototype.doMineralMine = function()
{
	/*
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
    }*/
    //console.log(this.carry[RESOURCE_ENERGY]);
    //console.log(_.sum(this.carry));
    if(!this.memory.working && _.sum(this.carry) === this.carryCapacity)
    {
        this.memory.working = true;
        //this.say('Carrying');
    }
    if(this.memory.working && _.sum(this.carry) === 0)
    {
        this.memory.working = false;
        this.memory.target = this.findMineral();
        //this.say('Mining');
    }
    
    if(!this.memory.working)
    {
        //if(this.getEnergy()) { return; }
        
        if (!this.memory.target || this.memory.target === 'error')
        {
            this.memory.target = this.findMineral();
        }
        
        let mineral = Game.getObjectById(this.memory.target);
        if(this.harvest(mineral) === ERR_NOT_IN_RANGE)
        {
            this.travelTo(mineral);
        }
    }
    else
    {
        this.findStorageOrTerminal();
    }
};

Creep.prototype.findStorageOrTerminal = function()
{
    let target = this.pos.findClosestByRange(FIND_MY_STRUCTURES,
    {
        filter: (structure) =>
        {
            return (structure.structureType === STRUCTURE_TERMINAL); //||
                    //structure.structureType == STRUCTURE_STORAGE); //&&
                    //structure.store < structure.storeCapacity;
        }
    });

    if(target)
    {
    	//console.log('there is a target');
        this.travelTo(target);
        for (const resourceType in this.carry)
        {
        	this.transfer(target, resourceType);
        }
        //this.transfer(target, RESOURCE_ENERGY);
        return true;
    }
    return false;
};
