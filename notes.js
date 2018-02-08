Screeps Official Server Endpoints:
https://screeps.com/api/experimental/nukes
https://screeps.com/api/experimental/pvp?interval=100

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

/** Implement a Task **/
task.name.js (task code)
task.js	     (add task file)
main.js      (add task file)


============================\Attack squads/===========================

Assemble at auto-generated waypoint in room before attacking or in own room 
make sure not in the way of anything

Attack matrix for open spaces: (can be rotated)
[X][X][X]   X = Attackers/bruisers, Have A or W parts, ratio is 40A/W/10M - fully boosted
[J][H][J]   H = healers 10M/40H (boosted move + heal) - J = optional healers if out-gunned by towers
[R][R][R]   R = Ranged attackers, also have 2 to 6 heal parts depending on needs.


Attack matrix for 1-square tight spaces: (can be rotated).
[X][H][X] X = Attackers/bruisers, Have A or W parts

Wall attack squads are extendable with extra [H] on the sides

============================/Attack squads\==================thanks dissi


kasami
If the kbot is not able to defend the remote room, it will leave it for 5000-10000 ticks. The defenders are ranger+supporterteam, plus one warrior. If you beat them, it will abandon the outpost. (edited)
Bonus if you make it abandon all rooms next to the owned room, it is a high chance it will abandon the base, leaving everything behind.

kasami
Advanced technique for breaking a complete kbot-empire; take out a room (RCL6+), but leave the terminal. Either take resources back to your own base, or dump it on the ground.
The distribution-logic for kbot does not consider if a room is completely take out, and will continue sending energy from all other rooms to that terminal if it is low on energy
