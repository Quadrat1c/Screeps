'use strict';

StructureTower.prototype.activate = function() {
    let hostiles = this.room.find(FIND_HOSTILE_CREEPS);
    let target;
    let healCount = -1;
    for (let i in hostiles) {
        let count = _.filter(hostiles[i].body, function(bp){return bp == HEAL;}).length;
        if (count >= healCount) {
            healCount = count;
            target = hostiles[i];
        }
    }
    if (target) {
        this.attack(target);
        return;
    }
    
    let lowCreeps = this.room.find(FIND_MY_CREEPS,
    {
       filter: (creep) => (creep.hits < creep.hitsMax) 
    });
    if (lowCreeps.length > 0) {
        this.heal(lowCreeps[0]);
        return;
    }
        
    if (this.energy > this.energyCapacity * 0.6) {
        let lowStructures = this.room.find(FIND_STRUCTURES,
        {
            filter: (structure) => (structure.hits < structure.hitsMax && structure.hits <= 1000)
        });
        if (lowStructures.length > 0) {
            let lowStructure = _.min(lowStructures, _.property('hits'));
            this.repair(lowStructure);
            return;
        }
    }
};