'use strict';

Creep.prototype.doHaul = function()
{
    if (this.checkRecycle()) { return; }
    if(this.room.name != this.memory.homeRoom) { this.moveHome(); return; }
    
    if(this.memory.hauling && this.carry[RESOURCE_ENERGY] == 0)
    {
        this.memory.hauling = false;
    }
    if(!this.memory.hauling && this.carry[RESOURCE_ENERGY] >= getMaximum(50, this.carryCapacity * 0.7))
    {
        this.memory.hauling = true;
    }
    
    if(this.memory.hauling)
    {
        if(this.room.memory.defConMode == 'active')
        {
            if (this.findTower(500)) { return; }
            if (this.findSpawnOrExtension()) { return; }
            if (this.findStorage()) { return; }
            return;
        }
        
        if(this.room.memory.creeps.suppliers <= 0 || !this.room.memory.storage || !Game.getObjectById(this.room.memory.storage))
        {
            if (this.findTower(900)) { return; }
            if (this.findSpawnOrExtension()) { return; }
            if (this.findLink(800)) { return; }
        }
        
        //if (this.findTower(1000)) { return; }
        if(this.findLink(800)) { return; }
        if(this.room.energyAvailable < this.room.energyCapacityAvailable * 0.5 && this.findSpawnOrExtension()) { return; }
        if(this.findStorage()) { return; }
        
        if(this.carry.energy < this.carryCapacity) {
            //this.say('getEnergy');
            //console.log('creep is idle and not at capacity');
            this.getEnergy();
        }
        else
        {
            //console.log(_.sum(this.carry);
            // Go home
            this.moveRandom();
            let spawns = this.room.find(FIND_MY_SPAWNS);
            
            if(!this.pos.isNearTo(spawns[0]))
            {
                //this.say('moveRand');
                this.travelTo(spawns[0]);
            }
        }
    }
    else
    {
        this.getEnergy();
    }
};

Creep.prototype.findStorage = function(threshold)
{
    if(this.room.storage)
    {
        this.travelTo(this.room.storage, { ignoreCreeps: false });
        this.transfer(this.room.storage, RESOURCE_ENERGY);
        return true;
    }
    return false;
}

