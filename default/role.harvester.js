'use strict';

Creep.prototype.doHarvest = function()
{
    if(this.room.name != this.memory.homeRoom) { this.moveHome(); return; }
    
    let target = Game.getObjectById(this.memory.target);
    let harvestPos = new RoomPosition(target.memory.harvestPos.x, target.memory.harvestPos.y, target.memory.harvestPos.roomName);
    if (!this.pos.isEqualTo(harvestPos))
    {
        this.moveTo(harvestPos);
    }
    else
    {
        this.harvest(target);
        if (this.room.controller.level >= 2 && checkIfBuildable(harvestPos))
        {
            this.room.createConstructionSite(harvestPos, STRUCTURE_CONTAINER);
        }
    }
};