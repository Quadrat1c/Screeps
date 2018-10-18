'use strict';

Creep.prototype.doLongDistanceHarvest = function()
{
    let harvestPos = new RoomPosition(this.memory.targetPos.x, this.memory.targetPos.y, this.memory.targetPos.roomName);
    if(this.room.name == this.memory.targetPos.roomName)
    {
        if(this.memory.danger)
        {
            this.memory.dangerWait--;
            this.moveHome();

            if(this.memory.dangerWait < 1)
                this.memory.danger = false;
            
            return;
        }

        if(this.detectHostiles())
        {
            this.memory.dangerWait = 40;
            this.memory.danger = true;
        }
        else
            this.memory.danger = false;

        let container;
        let site;
        let results;
        
        results = this.room.lookForAt(LOOK_CONSTRUCTION_SITES, harvestPos);
        if(results && results.length)
        {
            site = _.filter(results, function(s) { return s.structureType == STRUCTURE_CONTAINER });
        }
        
        if(site && site.length > 0)
        {
            this.buildHarvestContainer(site[0]);
            return;
        }
        else
        {
            results = this.room.lookForAt(LOOK_STRUCTURES, harvestPos);
            if(results && results.length)
            {
                container = _.filter(results, function(c) { return c.structureType == STRUCTURE_CONTAINER && c.hits < c.hitsMax });
            }
            
            if(container && container.length > 0 && container[0].hits < container[0].hitsMax)
            {
                this.repairHarvestContainer(container[0]);
                return;
            }
            
            if(!this.pos.isEqualTo(harvestPos))
            {
                this.travelTo(harvestPos, { ignoreCreeps: false });
                return;
            }
            
            this.harvest(Game.getObjectById(this.memory.target));
            if(!container && checkIfBuildable(harvestPos)) { this.room.createConstructionSite(harvestPos, STRUCTURE_CONTAINER); }
        }
    }
    else
    {
        if(this.memory.danger)
        {
            this.memory.dangerWait--;
            this.moveHome();

            if(this.memory.dangerWait < 1)
                this.memory.danger = false;
            
            return;
        }
        this.travelTo(harvestPos);
    }
};

Creep.prototype.buildHarvestContainer = function(site)
{
    if(!this.memory.building) { this.memory.building = false; }
    if(this.memory.building && this.carry[RESOURCE_ENERGY] == 0)
    {
        this.memory.building = false;
    }
    if(!this.memory.building && this.carry[RESOURCE_ENERGY] == this.carryCapacity)
    {
        this.memory.building = true;
    }
    
    if(this.memory.building)
    {
        if(this.pos.isEqualTo(site.pos))
        {
            this.moveHome();
        }
        else
        {
            let ret = this.build(site);
            if(ret == ERR_NOT_IN_RANGE)
            {
                this.travelTo(site.pos);
            }
        }
    }
    else
    {
        let target = Game.getObjectById(this.memory.target);
        if(this.harvest(target) == ERR_NOT_IN_RANGE)
        {
            this.travelTo(target.pos);
        }
    }
}

Creep.prototype.repairHarvestContainer = function(container)
{
    if(!this.memory.building) { this.memory.building = false; }
    if(this.memory.building && this.carry[RESOURCE_ENERGY] == 0)
    {
        this.memory.building = false;
    }
    if(!this.memory.building && this.carry[RESOURCE_ENERGY] == this.carryCapacity)
    {
        this.memory.building = true;
    }
    
    if(this.memory.building)
    {
        if(this.pos.isEqualTo(container.pos))
        {
            this.moveHome();
        }
        else
        {
            let ret = this.repair(container);
            if(ret == ERR_NOT_IN_RANGE)
            {
                this.travelTo(container.pos);
            }
        }
    }
    else
    {
        let target = Game.getObjectById(this.memory.target);
        if(this.harvest(target) == ERR_NOT_IN_RANGE)
        {
            this.travelTo(target.pos);
        }
    }
}

