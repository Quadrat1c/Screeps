'use strict';

Creep.prototype.doSupply = function()
{
    if(this.carry[RESOURCE_ENERGY] < this.carryCapacity && this.room.storage && this.pos.isNearTo(this.room.storage))
    {
        this.withdraw(this.room.storage, RESOURCE_ENERGY);
    }
    
    if(this.memory.hauling && this.carry[RESOURCE_ENERGY] <= getMaximum(50, this.carryCapacity * 0.2))
    {
        this.memory.hauling = false;
    }
    if(!this.memory.hauling && this.carry[RESOURCE_ENERGY] >= getMaximum(50, this.carryCapacity * 0.8))
    {
        this.memory.hauling = true;
    }
        
    if(this.memory.hauling)
    {
        if(this.room.memory.defConMode === 'active')
        {
            if (this.findTower(500)) { return; }
            if (this.findSpawnOrExtension()) { return; }
            return;
        }
        
        if (this.findTower(900)) { return; }
        if (this.findSpawnOrExtension()) { return; }
        if (this.findLink(800)) { return; }
        // if (this.room.memory.energyConMode >= 1)
        // {
        //     if (this.findLink(800)) { return; }
        // }
        
        // Go home
        //this.moveRandom();
        // let spawns = this.room.find(FIND_MY_SPAWNS);
        // if(!this.pos.isNearTo(spawns[0]))
        // {
        //     this.travelTo(spawns[0]);
        // }
    }
    else
    {
        if (this.withdrawFromStorage()) {return; }
        if (this.withdrawFromTerminal()) {return; }
    }
};

