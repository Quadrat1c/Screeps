'use strict';

Creep.prototype.doBuild = function()
{
    if(this.room.name != this.memory.homeRoom) { this.moveHome(); return; }
    
    if(!this.memory.building) { this.memory.building = false; }
    
    if(this.memory.building && this.carry[RESOURCE_ENERGY] == 0)
    {
        this.memory.building = false;
    }
    if(!this.memory.building && this.carry[RESOURCE_ENERGY] >= getMinimum(50, this.carryCapacity * 0.75))
    {
        this.memory.building = true;
    }

    if(this.memory.building)
    {
        if (this.findTowerSite()) { return; }
        if (this.findStorageSite()) { return; }
        if (this.findAnySite()) { return; }
        //if (this.findExtensionSite()) { return; }
        //if (this.findRampartSite()) { return; }
        
        else
        {
            let spawn = Game.getObjectById(this.room.memory.spawn);
            if (spawn)
            {
                if (spawn.recycleCreep(this) == ERR_NOT_IN_RANGE)
                {
                    this.travelTo(spawn.pos, { ignoreCreeps: false });
                }
                return true;
            }
        }
    }
    else if (this.carry[RESOURCE_ENERGY] < this.carryCapacity)
    {
        this.getEnergy();
    }
};

Creep.prototype.findStorageSite = function()
{
    let target = this.pos.findClosestByRange(FIND_CONSTRUCTION_SITES,
    {
        filter: (site) => (site.structureType == STRUCTURE_STORAGE)
    });
    
    if(target)
    {
        if(this.build(target) == ERR_NOT_IN_RANGE)
        {
            this.travelTo(target);
        }
        return true;
    }
    return false;
}

Creep.prototype.findExtensionSite = function()
{
    let target = this.pos.findClosestByRange(FIND_CONSTRUCTION_SITES,
    {
        filter: (site) => (site.structureType == STRUCTURE_EXTENSION)
    });
    
    if(target)
    {
        if(this.build(target) == ERR_NOT_IN_RANGE)
        {
            this.travelTo(target);
        }
        return true;
    }
    return false;
}

Creep.prototype.findRampartSite = function()
{
    let target = this.pos.findClosestByRange(FIND_CONSTRUCTION_SITES,
    {
        filter: (site) => (site.structureType == STRUCTURE_RAMPART)
    });
    if(target)
    {
        if(this.build(target) == ERR_NOT_IN_RANGE)
        {
            this.travelTo(target);
        }
        return true;
    }
    return false;
}

Creep.prototype.findTowerSite = function()
{
    let target = this.pos.findClosestByRange(FIND_CONSTRUCTION_SITES,
    {
        filter: (site) => (site.structureType == STRUCTURE_TOWER)
    });

    if (target)
    {
        if (this.build(target) == ERR_NOT_IN_RANGE)
        {
            this.travelTo(target);
        }
        return true;
    }
    return false;
}

Creep.prototype.findAnySite = function()
{
    let target = this.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
    if(target)
    {
        if(this.build(target) == ERR_NOT_IN_RANGE)
        {
            this.travelTo(target);
        }
        return true;
    }
    return false;
}