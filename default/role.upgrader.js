'use strict';

Creep.prototype.doUpgrade = function() {
    // make sure upgrader stays in home room
    if(this.room.name !== this.memory.homeRoom) { this.moveHome(); return; }

    if (this.room.controller.level >= 5 && Game.getObjectById(this.room.memory.controllerLink) && Game.getObjectById(this.room.memory.spawnLink))
    {
        let link = Game.getObjectById(this.room.memory.controllerLink);
        if(this.withdraw(link, RESOURCE_ENERGY) !== OK)
        {
            this.travelTo(link);
        }
        if(this.upgradeController(this.room.controller) === ERR_NOT_IN_RANGE)
        {
            this.travelTo(this.room.controller);
        }
        return;
    }
    
    if(!this.memory.upgrading) { this.memory.upgrading = false; }
    
    if(this.memory.upgrading && this.carry[RESOURCE_ENERGY] === 0)
    {
        this.memory.upgrading = false;
    }
    if(!this.memory.upgrading && this.carry[RESOURCE_ENERGY] === this.carryCapacity)
    {
        this.memory.upgrading = true;
    }
    
    if(this.memory.upgrading)
    {
        if(this.upgradeController(this.room.controller) === ERR_NOT_IN_RANGE)
        {
            this.travelTo(this.room.controller);
        }
    }
    else if (this.carry[RESOURCE_ENERGY] < this.carryCapacity)
    {
        this.getEnergy();
    }
};

