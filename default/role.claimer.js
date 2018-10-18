'use strict';

Creep.prototype.doClaim = function()
{
    if(this.room.name == this.memory.target)
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

        // If we are home due to successful claim, recycle
        if(this.room.memory.spawn)
        {
            let spawn = Game.getObjectById(this.room.memory.spawn);
            if (spawn)
            {
                if (spawn.recycleCreep(this) == ERR_NOT_IN_RANGE)
                {
                    this.travelTo(spawn.pos);
                }
            }
            return;
        }
        
        if(!this.room.controller || this.room.controller.my)
        {
            this.memory.target = this.memory.homeRoom;
            return;
        }
        
        if(this.memory.colonize)
        {
            if(this.room.memory.sources.length >= 2 && ableToClaimRoom())
            {
                let ret = this.claimController(this.room.controller);
                if(ret == OK)
                {
                    return;
                }
                else if(ret == ERR_NOT_IN_RANGE)
                {
                    this.travelTo(this.room.controller.pos);
                }
            }
        }
        
        let ret = this.reserveController(this.room.controller);
        if(ret == ERR_NOT_IN_RANGE)
        {
            this.travelTo(this.room.controller.pos);
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
        
        this.travelTo(new RoomPosition(25, 25, this.memory.target), {ignoreRoads: true});
    }
};