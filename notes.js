// Power Bank: (Parts based off watching Dissi)
// ATK 50 (25/25) Move/Atk
// HEAL 32 (16/16) Move/Heal
// HEAL 32 (16/16) Move/Heal
[MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK]
[MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,HEAL,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL]

/** private server **/

// custom.task.taskName.js
// custom.creep.behaviour.behaviourName.js
// virial.mainInjection.js (LOAD/INITIALIZE)

// Basic task implementation:
const mod = {};
module.exports = mod;
mod.extend = function() {
	try {
		Task.installTask('taskName');
		Creep.behaviour.behaviourName = load('creep.behaviour.behaviourName');
	} catch(e) {
		console.log(e.stack || e);
	}
};
