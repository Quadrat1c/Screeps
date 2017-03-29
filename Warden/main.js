/**
 *
 * .::    .   .::::::.    :::::::.. :::::::-.  .,:::::::::.    :::.
 * ';;,  ;;  ;;;' ;;`;;   ;;;;``;;;; ;;,   `';,;;;;''''`;;;;,  `;;;
 *  '[[, [[, [[' ,[[ '[[,  [[[,/[[[' `[[     [[ [[cccc   [[[[[. '[[
 *    Y$c$$$c$P c$$$cc$$$c $$$$$$c    $$,    $$ $$""""   $$$ "Y$c$$
 *     "88"888   888   888,888b "88bo,888_,o8P' 888oo,__ 888    Y88
 *      "M "M"   YMM   ""` MMMM   "W" MMMMP"`   """"YUMMMMMM     YM
 *
 * Warden [Version: MAD] Manage, Attack, Defend
 * Real-Time AI/Behaviour for Screeps
 *
 **/

creeps.forEach(function(creep)
{
  // default
  var input = [];
  for (var i in creeps)
  {
    var output = creep.network.activate(input);
    creep.mainLoop(output);
    
    // learn
    var learningRate = .8;
    var target = [
      targetA(creep),
      targetB(creep),
      targetWeight(creep)];
    creep.network.propagate(learningRate, target);
  }
});
