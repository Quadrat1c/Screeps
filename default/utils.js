cleanCreepMemory = function() {
    for (let name in Memory.creeps) {
      if (!Game.creeps[name]) {
        switch (Memory.creeps[name].role) {
          case "harvester":
            Memory.sources[Memory.creeps[name].target].harvester = "none";
            Memory.rooms[Memory.creeps[name].homeRoom].creeps.harvesters--;
            break;
          case "hauler":
            Memory.rooms[Memory.creeps[name].homeRoom].creeps.haulers--;
            break;
          case "builder":
            Memory.rooms[Memory.creeps[name].homeRoom].creeps.builders--;
            break;
          case "repairer":
            Memory.rooms[Memory.creeps[name].homeRoom].creeps.repairers--;
            break;
          case "upgrader":
            Memory.rooms[Memory.creeps[name].homeRoom].creeps.upgraders--;
            break;
          case "supplier":
            Memory.rooms[Memory.creeps[name].homeRoom].creeps.suppliers--;
            break;
          case "miner":
            Memory.rooms[Memory.creeps[name].homeRoom].creeps.miners--;
            break;
          case "mineralMiner":
            Memory.rooms[Memory.creeps[name].homeRoom].creeps.mineralMiners--;
            break;
          case "longDistanceHarvester":
            Memory.sources[Memory.creeps[name].target].longHarvester = "none";
            break;
          case "longDistanceHauler":
            Memory.sources[Memory.creeps[name].target].longHauler = "none";
            if (global.config.options.reportLongDistanceHauling) {
              console.log(txt(COLOR.success, "Long distance hauler expired - Transferred: " + Memory.creeps[name].transferred + " Target: " + Memory.creeps[name].target + " Room: " + Memory.creeps[name].homeRoom));
            }
            break;
          case "longDistanceBuilder":
            Memory.rooms[Memory.creeps[name].target].creeps.longBuilders--;
            break;
          case "claimer":
            // TODO: Fix these, not working
            if (Memory.rooms[Memory.creeps[name].target].neighborData) {
              Memory.rooms[Memory.creeps[name].target].neighborData.claimer =
                "none";
            }
            //console.log(Memory.creeps[name].colonize + ' ' + Memory.rooms[Memory.creeps[name].target].colonizing);
            if (Memory.creeps[name].colonize) {
              Memory.rooms[Memory.creeps[name].target].colonizing = false;
            }
            break;
          case "bouncer":
            Memory.rooms[Memory.creeps[name].target].creeps.bouncers--;
            break;
          case "ranger":
            Memory.rooms[Memory.creeps[name].target].creeps.rangers--;
            break;
          case "dismantler":
            Memory.rooms[Memory.creeps[name].target].creeps.dismantler--;
            break;
          case "drainer":
            Memory.rooms[Memory.creeps[name].target].creeps.drainer--;
            break;
          case "labTech":
              Memory.rooms[Memory.creeps[name].homeRoom].creeps.labTechs--;
            break;
          default:
            break;
        }
        delete Memory.creeps[name];
      }
    }
  };
  
  processFlags = function() {
    let allFlags = Object.keys(Game.flags);
    for (let it of allFlags) {
      let flag = Game.flags[it];
      switch (flag.color) {
        case COLOR_GREEN:
          try {
            if (flag.room) {
              if (flag.room.find(FIND_MY_SPAWNS).length > 0) {
                flag.remove();
              } else {
                flag.room.createConstructionSite(flag.pos, STRUCTURE_SPAWN);
              }
            }
          } catch (ex) {
            console.log("Error processing green flag: " + ex.toString());
          }
          break;
  
        case COLOR_RED:
          try {
            //let name of flag.room.memory.exitRooms;
            let spawn = Game.getObjectById("5bbb7dfdfda2e00013304fff");
            //console.log('red flag found: ', flag.pos.roomName);
            //console.log('red flag found', flag.room.roomName);
            let name = flag.pos.roomName;
  
            if (Memory.rooms[name].creeps.rangers < 1) {
              let ret = spawn.createRanger(
                spawn.pos.roomName.energyCapacityAvailable * 0.4,
                name
              );
              if (ret === OK) {
                Memory.rooms[name].creeps.rangers++;
                if (global.config.options.reportHostileNeighbors) {
                  console.log("Spawned ranger for room " + name);
                }
              } else if (ret !== ERR_NOT_ENOUGH_ENERGY) {
                console.log("Error spawning ranger: " + ret);
              }
              return;
            }
          } catch (ex) {
            console.log("Error processing red flag: " + ex.toString());
          }
          break;

        case COLOR_PURPLE:
          try {
            const debugSymbols = {
                container: '⊔',
                exit: '🚪',
                extension: '⚬',
                lab: '🔬',
                link: '🔗',
                nuker: '☢',
                observer: '👁',
                powerSpawn: '⚡',
                rampart: '#',
                road: '·',
                spawn: '⭕',
                storage: '⬓',
                terminal: '⛋',
                tower: '⚔',
            };

            const visual = new RoomVisual(this.roomName);
            //let spawn = Game.getObjectById(this.memory.spawn);
            
            // tower
            visual.text(debugSymbols['tower'], flag.pos.x - 1, flag.pos.y - 3);
            // storage
            visual.text(debugSymbols['storage'], flag.pos.x, flag.pos.y - 2);
            // link
            visual.text(debugSymbols['link'], flag.pos.x, flag.pos.y - 4);
            // spawns
            visual.text(debugSymbols['spawn'], flag.pos.x + 1, flag.pos.y - 1);
            visual.text(debugSymbols['spawn'], flag.pos.x - 1, flag.pos.y - 1);
            // terminal
            visual.text(debugSymbols['terminal'], flag.pos.x + 1, flag.pos.y - 3);
            // other towers
            visual.text(debugSymbols['tower'], flag.pos.x - 2, flag.pos.y - 2);
            visual.text(debugSymbols['tower'], flag.pos.x - 2, flag.pos.y - 4);
            visual.text(debugSymbols['tower'], flag.pos.x - 1, flag.pos.y - 6);
            visual.text(debugSymbols['tower'], flag.pos.x - 2, flag.pos.y - 5);
            // labs
            visual.text(debugSymbols['lab'], flag.pos.x, flag.pos.y + 2);
            visual.text(debugSymbols['lab'], flag.pos.x - 1, flag.pos.y + 2);
            visual.text(debugSymbols['lab'], flag.pos.x - 1, flag.pos.y + 3);
            visual.text(debugSymbols['lab'], flag.pos.x + 1, flag.pos.y + 3);
            visual.text(debugSymbols['lab'], flag.pos.x + 1, flag.pos.y + 4);
            visual.text(debugSymbols['lab'], flag.pos.x, flag.pos.y + 4);
            visual.text(debugSymbols['lab'], flag.pos.x - 2, flag.pos.y + 3);
            visual.text(debugSymbols['lab'], flag.pos.x - 2, flag.pos.y + 4);
            visual.text(debugSymbols['lab'], flag.pos.x, flag.pos.y + 5);
            visual.text(debugSymbols['lab'], flag.pos.x - 1, flag.pos.y + 5);
            // nuker
            visual.text(debugSymbols['nuker'], flag.pos.x - 1, flag.pos.y - 5);
            // power spawn
            visual.text(debugSymbols['powerSpawn'], flag.pos.x + 1, flag.pos.y - 5);
            // observer
            visual.text(debugSymbols['observer'], flag.pos.x, flag.pos.y - 6);
          } catch (ex) {
            console.log("Error processing purple flag: " + ex.toString());
          }
          break;
  
        default:
          console.log("Error Unknown flag in Room: " + flag.pos.roomName);
          //flag.remove();
          break;
      }
    }
  };
  
  getContainerEnergy = function(room) {
    if (!room.memory.sources) {
      return;
    }
    let energyTotal = 0;
    for (let id of room.memory.sources) {
      let source = Game.getObjectById(id);
      let position = new RoomPosition(
        source.memory.harvestPos.x,
        source.memory.harvestPos.y,
        source.memory.harvestPos.roomName
      );
      let structures = room.lookForAt(LOOK_STRUCTURES, position);
      for (let i in structures) {
        if (structures[i].structureType === STRUCTURE_CONTAINER) {
          energyTotal += structures[i].store[RESOURCE_ENERGY];
        }
      }
    }
  
    let resources = room.find(FIND_DROPPED_RESOURCES, {
      filter: resource => {
        return resource.resourceType === RESOURCE_ENERGY;
      }
    });
  
    for (let energy of resources) {
      energyTotal += energy.amount;
    }
  
    return energyTotal;
  };
  
  generateRandomId = function() {
    return Math.floor(Math.random() * 10000).toString();
  };
  
  getNumMyRooms = function() {
    let count = 0;
    for (room in Game.rooms) {
      if (Game.rooms[room].controller && Game.rooms[room].controller.my) {
        count++;
      }
    }
    return count;
  };
  
  ableToClaimRoom = function() {
    return getNumMyRooms() < Game.gcl.level;
  };
  
  // Returns true if there is an adjacent position to harvest from source
  checkSpaceToHarvest = function(source) {
    let array = [
      { x: -1, y: -1 },
      { x: -1, y: 1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 }
    ];
  
    for (let i = 0; i < array.length; i++) {
      let position = new RoomPosition(
        source.pos.x + array[i].x,
        source.pos.y + array[i].y,
        source.room.name
      );
  
      let terrain = position.lookFor(LOOK_TERRAIN);
      let creeps = position.lookFor(LOOK_CREEPS);
  
      if (
        (terrain[0] === "plain" || terrain[0] === "swamp") &&
        creeps.length <= 0
      ) {
        return true;
      }
    }
  };
  
  findConstructionSite = function(source, roomName) {
    let array = [
      { x: -1, y: -1 },
      { x: -1, y: 1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 }
    ];
  
    for (let i = 0; i < array.length; i++) {
      let position = new RoomPosition(
        source.pos.x + array[i].x,
        source.pos.y + array[i].y,
        roomName
      );
  
      let terrain = position.lookFor(LOOK_TERRAIN);
      let structures = position.lookFor(LOOK_STRUCTURES);
      if (
        terrain[0] !== "wall" &&
        (structures.length <= 0 || structures[0].structureType === "road")
      ) {
        //console.log('found ' + position + ' for building');
        return new RoomPosition(
          source.pos.x + array[i].x,
          source.pos.y + array[i].y,
          roomName
        );
      }
    }
  
    return undefined;
  };
  
  findBuildableSpace = function(source, roomName) {
    let array = [
      { x: -1, y: -1 },
      { x: -1, y: 1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 }
    ];
  
    for (let i = 0; i < array.length; i++) {
      let position = new RoomPosition(
        source.pos.x + array[i].x,
        source.pos.y + array[i].y,
        roomName
      );
  
      let terrain = position.lookFor(LOOK_TERRAIN);
      if (terrain[0] !== "wall") {
        return new RoomPosition(
          source.pos.x + array[i].x,
          source.pos.y + array[i].y,
          roomName
        );
      }
    }
  
    return undefined;
  };

  resetBoostProduction = function(roomName) {
      let data,
          myRooms = _.filter(Game.rooms, {'my': true});

      for (let room of myRooms) {

          if ((roomName === undefined || room.name === roomName)) {

              data = room.memory.resources;

              console.log(room.name);

              if (!_.isUndefined(data)) {

                  data.offers = [];
                  data.orders = [];

                  if (data.terminal[0])
                      data.terminal[0].orders = [];

                  if (data.storage[0])
                      data.storage[0].orders = [];

                  if (data.reactions)
                      data.reactions.orders = [];

                  if (data.lab) {
                      data.lab = [];
                      _.values(Game.structures).filter(i => i.structureType === 'lab').map(i => i.room.setStore(i.id, RESOURCE_ENERGY, 2000));
                  }
                  delete data.boostTiming;
                  delete data.seedCheck;
              } else
                  console.log(`${room.name} has no memory.resources`);
          }
      }
      if (roomName === undefined)
          delete Memory.boostTiming;
  };
  
  getMinimum = function(x, y) {
    if (x < y) {
      return x;
    } else {
      return y;
    }
  };
  
  getMaximum = function(x, y) {
    if (x > y) {
      return x;
    } else {
      return y;
    }
  };
  
  checkIfBuildable = function(roomPos) {
    let terrain = roomPos.lookFor(LOOK_TERRAIN);
    let structures = roomPos.lookFor(LOOK_STRUCTURES);
    //console.log('terrain: ' + terrain[0] + 'structures: ' + structures.length);
    return (
      terrain[0] !== "wall" &&
      (structures.length <= 0 ||
        (structures.length === 1 && structures[0].structureType === "road"))
    );
  };
  
  // manipulate log output
  // simply put a color as "style"
  // or an object, containing any css
  // example usage: txt(COLOR.info, 'your text here')
  txt = function(style, text) {
    if (isObj(style)) {
      let css = "";
      let format = key => (css += key + ":" + style[key] + ";");
      _.forEach(Object.keys(style), format);
      return '<font style="' + css + '">' + text + "</font>";
    }
    if (style) return '<font style="color:' + style + '">' + text + "</font>";
    else return text;
  };
  // predefined log colors
  COLOR = {
    death: { color: "black", "font-weight": "bold" },
    info: "#92a8d1",
    success: "#86af49",
    birth: "#b5e7a0",
    warn: "#e3eaa7",
    error: "#eca1a6",
    system: { color: "#999", "font-size": "10px" }
  };
  
  isObj = function(value) {
    if (value === null) return false;
    return typeof value === "function" || typeof value === "object";
  };
