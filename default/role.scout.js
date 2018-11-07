'use strict';

Creep.prototype.doScout = function() {
    this.breadthFirstSearch();
};

Creep.prototype.breadthFirstSearch = function() {
    if (!this.memory.searchIndex) {
        this.memory.searchIndex = 0;
    }
    
    if (!this.memory.seen) {
        this.memory.seen = [this.room.name];
    }
    
    if (!this.memory.search) {
        this.addExitsToSearch();
        this.memory.roomTarget = this.memory.search[this.memory.searchIndex];
    }
    
    if (this.room.name === this.memory.roomTarget) {
        let ret = this.signController(this.room.controller, 'Q');
        if (ret === OK) {
            this.memory.seen.push(this.room.name);
        
            this.addExitsToSearch();
            
            this.memory.searchIndex++;
            this.memory.roomTarget = this.memory.search[this.memory.searchIndex];
        } else if (ret === ERR_NOT_IN_RANGE) {
            this.travelTo(this.room.controller.pos);
        }
    } else {
        this.travelTo(new RoomPosition(25, 25, this.memory.roomTarget), {ignoreRoads: true});
        // if hostile run away?
    }
};

Creep.prototype.findRandomExit = function() {
    let rooms = Game.map.describeExits(this.pos.roomName);
    let exits = Object.keys(rooms);
    let random = Math.floor(Math.random() * exits.length);
    return rooms[exits[random]];
};

Creep.prototype.addExitsToSearch = function() {
    if (!this.memory.search) {
        this.memory.search = [];
    }
    let rooms = Game.map.describeExits(this.room.name);
    for (let key in rooms) {
        if(this.memory.seen.indexOf(rooms[key]) === -1
            && this.memory.search.indexOf(rooms[key]) === -1) {
            this.memory.search.push(rooms[key]);
        }
    }
};