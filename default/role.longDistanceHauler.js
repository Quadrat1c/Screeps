Creep.prototype.doLongDistanceHaul = function()
{
    if(!this.memory.transferred) { this.memory.transferred = 0; }
    if(this.checkRecycle()) { return; }
    
    let harvestPos = new RoomPosition(this.memory.targetPos.x, this.memory.targetPos.y, this.memory.targetPos.roomName);
    if(this.room.name === this.memory.targetPos.roomName)
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
        
        if(this.carry[RESOURCE_ENERGY] >= this.carryCapacity)
        {
            this.moveHome();
        }
        else
        {
            if(this.pos.isNearTo(harvestPos))
            {
                let resource;
                let results = this.room.lookForAt(LOOK_ENERGY, harvestPos);
                if(results.length)
                {
                    resource = _.filter(results, function(r) { return r.resourceType === RESOURCE_ENERGY });
                    if(resource[0].amount > 50)
                    {
                        this.pickup(resource[0]);
                        return;
                    }
                }
                
                let container;
                results = this.room.lookForAt(LOOK_STRUCTURES, harvestPos);
                if(results.length)
                {
                    container = _.filter(results, function(c) { return c.structureType === STRUCTURE_CONTAINER });
                    if(container[0].store[RESOURCE_ENERGY] > 0)
                    {
                        this.withdraw(container[0], RESOURCE_ENERGY);
                        return;
                    }
                }
                
            }
            else { this.travelTo(harvestPos); }
        }
    } else if (this.room.name === this.memory.homeRoom) {
        if (this.memory.danger) {
            this.memory.dangerWait--;
            this.moveHome();

            if (this.memory.dangerWait < 1)
                this.memory.danger = false;
            
            return;
        }

        if (this.carry[RESOURCE_ENERGY] > 0) {
            if (this.room.storage) {
                if (this.room.terminal && this.room.storage.store[RESOURCE_ENERGY] >= 50000 && this.room.terminal.store[RESOURCE_ENERGY] <= 50000) {
                    this.travelTo(this.room.terminal);
                    if (this.transfer(this.room.terminal, RESOURCE_ENERGY) === OK) {
                        this.memory.transferred = this.memory.transferred + this.carry[RESOURCE_ENERGY];
                    }
                } else {
                    let nuker = Game.getObjectById(this.room.memory.nuker);
                    if (nuker && this.room.storage.store[RESOURCE_ENERGY] >= 100000 && nuker.energy < 300000) {
                        this.travelTo(nuker);
                        if (this.transfer(nuker, RESOURCE_ENERGY) === OK) {
                            this.memory.transferred = this.memory.transferred + this.carry[RESOURCE_ENERGY];
                        }
                    } else {
                        this.travelTo(this.room.storage);
                        if (this.transfer(this.room.storage, RESOURCE_ENERGY) === OK) {
                            this.memory.transferred = this.memory.transferred + this.carry[RESOURCE_ENERGY];
                        }
                    }
                }
            }
        } else {
            this.travelTo(harvestPos);
        }
    }
    else
    {
        if(this.carry[RESOURCE_ENERGY] >= this.carryCapacity)
        {
            this.moveHome();
        }
        else { this.travelTo(harvestPos); }
    }
};