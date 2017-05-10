// This task will react on yellow/purple flags, sending a attackSquad to the flags position.
let mod = {};
module.exports = mod;
mod.name = 'attackSquad';
mod.minControllerLevel = 3;
// hook into events
mod.register = () => {};
// for each flag
mod.handleFlagFound = flag => {
    // if it is a yellow/yellow flag
    if (flag.compareTo(FLAG_COLOR.attackSquad) && Task.nextCreepCheck(flag, mod.name)) {
        Util.set(flag.memory, 'task', mod.name);
        // check if a new creep has to be spawned
        Task.attackSquad.checkForRequiredCreeps(flag);
    }
};
mod.creep = {
    aMelee: {
        fixedBody: [ATTACK, MOVE],
        multiBody: {
            [MOVE]: 2,
            [ATTACK]: 3,
            [TOUGH]: 1,
        },
        name: "aMelee", 
        behaviour: "melee", 
        queue: 'Low'
    },
    aHealer: {
      fixedBody: [HEAL, MOVE],
      multiBody: {
        [MOVE]: 2,
        [HEAL]: 3,
        [TOUGH]: 1,
      },
      name: "aHealer",
      behaviour: "healer",
      queue: 'Low'
    },
};
// check if a new creep has to be spawned
mod.checkForRequiredCreeps = (flag) => {
    // get task memory
    let memory = Task.attackSquad.memory(flag);
    // re-validate if too much time has passed
    Task.validateAll(memory, flag, mod.name, {roomName: flag.pos.roomName, checkValid: true});
    // count creeps assigned to task
    let count = memory.queued.length + memory.spawning.length + memory.running.length;
    // if creep count below requirement spawn a new creep creep
    if( count < 2 ) {
        Task.spawn(
            Task.attackSquad.creep.aMelee, // creepDefinition
            { // destiny
                task: 'attackSquad', // taskName
                targetName: flag.name, // targetName
                flagName: flag.name // custom
            },
            { // spawn room selection params
                targetRoom: flag.pos.roomName, 
                minEnergyCapacity: 200, 
                rangeRclRatio: 1.8, // stronger preference of higher RCL rooms
                allowTargetRoom: true,
            },
            creepSetup => { // callback onQueued
                let memory = Task.attackSquad.memory(Game.flags[creepSetup.destiny.targetName]);
                memory.queued.push({
                    room: creepSetup.queueRoom,
                    name: creepSetup.name,
                    targetName: flag.name
                });
            }
        );
        Task.spawn(
            Task.attackSquad.creep.aHealer, // creepDefinition
            { // destiny
                task: 'attackSquad', // taskName
                targetName: flag.name, // targetName
                flagName: flag.name // custom
            },
            { // spawn room selection params
                targetRoom: flag.pos.roomName, 
                minEnergyCapacity: 200, 
                rangeRclRatio: 1.8, // stronger preference of higher RCL rooms
                allowTargetRoom: true,
            },
            creepSetup => { // callback onQueued
                let memory = Task.attackSquad.memory(Game.flags[creepSetup.destiny.targetName]);
                memory.queued.push({
                    room: creepSetup.queueRoom,
                    name: creepSetup.name,
                    targetName: flag.name
                });
            }
        );
    }
};
// when a creep starts spawning
mod.handleSpawningStarted = params => { // params: {spawn: spawn.name, name: creep.name, destiny: creep.destiny}
    // ensure it is a creep which has been queued by this task (else return)
    if ( !params.destiny || !params.destiny.task || params.destiny.task != 'attackSquad' )
        return;
    // get flag which caused queueing of that creep
    let flag = Game.flags[params.destiny.flagName];
    if (flag) {
        // get task memory
        let memory = Task.attackSquad.memory(flag);
        // save spawning creep to task memory
        memory.spawning.push(params);
        // clean/validate task memory queued creeps
        Task.validateQueued(memory, flag, mod.name);
    }
};
// when a creep completed spawning
mod.handleSpawningCompleted = creep => {
    // ensure it is a creep which has been requested by this task (else return)
    if (!creep.data || !creep.data.destiny || !creep.data.destiny.task || creep.data.destiny.task != 'attackSquad')
        return;
    // get flag which caused request of that creep
    let flag = Game.flags[creep.data.destiny.flagName];
    if (flag) {
        // calculate & set time required to spawn and send next substitute creep
        // TODO: implement better distance calculation
        creep.data.predictedRenewal = creep.data.spawningTime + (routeRange(creep.data.homeRoom, flag.pos.roomName)*50);

        // get task memory
        let memory = Task.attackSquad.memory(flag);
        // save running creep to task memory
        memory.running.push(creep.name);

        // clean/validate task memory spawning creeps
        Task.validateSpawning(memory, flag, mod.name);
    }
};
// when a creep died (or will die soon)
mod.handleCreepDied = name => {
    // get creep memory
    let mem = Memory.population[name];
    // ensure it is a creep which has been requested by this task (else return)
    if (!mem || !mem.destiny || !mem.destiny.task || mem.destiny.task != 'attackSquad')
        return;
    // get flag which caused request of that creep
    let flag = Game.flags[mem.destiny.flagName];
    if (flag) {
        const memory = Task.attackSquad.memory(flag);
        Task.validateRunning(memory, flag, mod.name, {roomName: flag.pos.roomName, deadCreep: name});
    }
};
// get task memory
mod.memory = (flag) => {
    if( !flag.memory.tasks ) 
        flag.memory.tasks = {};
    if( !flag.memory.tasks.attackSquad ) {
        flag.memory.tasks.attackSquad = {
            queued: [], 
            spawning: [],
            running: []
        };
    }
    return flag.memory.tasks.attackSquad;
};
