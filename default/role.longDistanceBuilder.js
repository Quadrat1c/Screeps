Creep.prototype.doLongDistanceBuild = function()
{
    //if(this.checkRecycle()) { return; }
    
    if(this.room.name === this.memory.homeRoom)
    {
        if(this.carry[RESOURCE_ENERGY] >= this.carryCapacity)
        {
            this.travelTo(new RoomPosition(25, 25, this.memory.target));
            return;
        }
        else
        {
            this.getEnergy();
            return;
        }
    }
    else if(this.room.name === this.memory.target)
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
            this.memory.dangerWait = 50;
            this.memory.danger = true;
        }
        else
            this.memory.danger = false;

        if(!this.memory.working && this.carry[RESOURCE_ENERGY] === this.carryCapacity)
        {
            this.memory.working = true;
            //this.say('Carrying');
        }
        if(this.memory.working && this.carry[RESOURCE_ENERGY] === 0)
        {
            this.memory.working = false;
            //this.memory.target = this.findSource();
            //this.say('Mining');
        }

        if(this.carry[RESOURCE_ENERGY] > 0 && this.memory.working)
        {
            let roomName = this.pos.roomName;
            let target = this.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if(target)
            {
                if(this.build(target) === ERR_NOT_IN_RANGE)
                {
                    this.travelTo(target);
                    return;
                }
            }
            else
            {
                this.findSpawnOrExtension();
            }
        }
        else
        {
            if(!this.memory.working)
            {
                //let source = Game.getObjectById(this.findSource());
                let source = this.pos.findClosestByRange(FIND_SOURCES);
                //console.log(source);
                if(this.harvest(source) === ERR_NOT_IN_RANGE)
                {
                    this.travelTo(source);
                }
            }
            //this.moveHome();
            return;
        }
    }
    else
    {
        if(this.carry[RESOURCE_ENERGY] > 0)
        {
            this.travelTo(new RoomPosition(25, 25, this.memory.target));
            return;
        }
        else
        {
            //console.log('t');
            //this.moveHome();
            return;
        }
    }
};
