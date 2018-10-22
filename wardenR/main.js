/*  __    __              _            
 * / / /\ \ \__ _ _ __ __| | ___ _ __  
 * \ \/  \/ / _` | '__/ _` |/ _ \ '_ \ 
 *  \  /\  / (_| | | | (_| |  __/ | | |
 *   \/  \/ \__,_|_|  \__,_|\___|_| |_|
 *                           Re-Loaded
 */

'use strict';

require('require');

module.exports.loop = function () {
    let ver = '0.0.5';

    // CPU usage variables
    let initCPU, memCPU, roomCPU, creepCPU, finalCPU;
    if (global.config.options.reportCPU) { 
        initCPU = Game.cpu.getUsed(); 
    }

    // Show CPU Bucket if below 9600
    let cpuBucket = Game.cpuBucket;
    if (cpuBucket <= 9600) { 
        console.log('*ALERT* CPU Bucket: ' + cpuBucket); 
    }

    // Clean memory
    cleanCreepMemory();
    if (global.config.options.reportCPU) { 
        memCPU = Game.cpu.getUsed() - initCPU; 
    }

    // Process flags
    processFlags();

    // Process rooms and their structures
    for (let name in Game.rooms) {
        var room = Game.rooms[name];
        var spawns = room.find(FIND_MY_SPAWNS);
        if (spawns.length) { 
            room.run(); 
        } else { 
            room.checkRoom(); 
        }
    }

    if (global.config.options.reportCPU) {
        roomCPU = Game.cpu.getUsed() - memCPU - initCPU;
    }

    // Process creeps
    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        if (!creep.memory.homeRoom) {
            creep.memory.homeRoom = creep.pos.roomName;
        }
        creep.run();
    }

    if (global.config.options.reportCPU) {
        creepCPU = Game.cpu.getUsed() - roomCPU - memCPU - initCPU;
        finalCPU = Game.cpu.getUsed();
        console.log('Initial CPU: ',initCPU.toFixed(2), ' || Memory CPU: ',memCPU.toFixed(2), ' || Room CPU: ',roomCPU.toFixed(2), ' || Creeps CPU: ', creepCPU.toFixed(2), '|| Final CPU: ', finalCPU.toFixed(2));
    }
};