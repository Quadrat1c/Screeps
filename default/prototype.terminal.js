StructureTerminal.prototype.doTerminal = function(room) {

    if (!this.room.memory.orderTick) {
        this.room.memory.orderTick = 0;
    }

    if (this.room.memory.orderTick < 10) {
        this.room.memory.orderTick++;
    } else {
        this.room.memory.orderTick = 0;
        this.doSellOrders(room);
        //this.showOder(room);

        if (config.options.enablePurchasePower && this.cooldown === 0 &&
            this.store[RESOURCE_POWER] === undefined && this.room.controller.level >= 8) {
            this.doBuyOders(room, RESOURCE_POWER);
        }
    }

};

StructureTerminal.prototype.showOder = function(room) {
    if (this.cooldown === 0) {
        let mineralType = room.memory.mineralType; // example: 'U' 'Z' etc
        let mineralStore = this.store[mineralType];

        // if mineralStore and energyStore is X amount
        let orders = Game.market.getAllOrders(o => o.type === ORDER_BUY && o.resourceType === mineralType
            && o.price >= 0.5 && o.amount >= 1000 && Game.market.calcTransactionCost(o.amount, o.roomName, room.name) < 20000);

        /*
        let orderCosts;
        for (i = 0; i < orders.length; i++) {
            const cost = Game.market.calcTransactionCost(orders[i].amount, orders[i].roomName, room.name);
            orderCosts.push(cost);
        }

        console.log(Math.min.apply( Math, orderCosts));*/
    }
};

StructureTerminal.prototype.doBuyOders = function(room, mineralType) {
    if (this.store[RESOURCE_ENERGY] <= 25000) {
        return;
    }

    let mineralCost = this.getMineralCost(mineralType);

    let orders = Game.market.getAllOrders(o => {
        if (o.price <= mineralCost && o.type === ORDER_SELL && o.resourceType === mineralType && o.amount >= 2000) {
            const cost = Game.market.calcTransactionCost(o.amount, o.roomName, room.name);
            if (cost < 15000) {
                let ret = Game.market.deal(o.id, o.amount, room.name);
                console.log(ret);
                if(ret === OK) {
                    let creditAmount = o.amount + o.price;
                    console.log(txt(COLOR.success, '[Buy Order Complete! ' + room.name +'] Mineral: ' + mineralType + ' ID: ' + o.id + ' Credits: ' + creditAmount + ' Energy Cost: ' + cost));
                } else {
                    console.log(txt(COLOR.warn, '[Buy Order Failed!] Room: ' + room.name + ' Type: ' + o.type
                        + ' Amount: ' + o.amount + ' ID: ' + o.id));
                }
            }
        }
    });
};

StructureTerminal.prototype.doSellOrders = function(room) {
    if (this.cooldown === 0) {
        let mineralType = room.memory.mineralType; // example: 'U' 'Z' etc
        let mineralStore = this.store[mineralType];
        let mineralCost = this.getMineralCost(mineralType);

        if (mineralStore >= 60000 && this.store[RESOURCE_ENERGY] >= 25000) {
            let orders = Game.market.getAllOrders(o => {
                // TODO: Calculate Transaction Costs
                if (o.price >= mineralCost && o.type === ORDER_BUY && o.resourceType === mineralType && o.amount >= 1000) {
                    //console.log(txt(COLOR.info, '[Order Found] Mineral: ' + mineralType + ' ID: ' + o.id));
                    const cost = Game.market.calcTransactionCost(o.amount, o.roomName, room.name);
                    if (cost < 20000) {
                        let ret = Game.market.deal(o.id, o.amount, room.name);
                        console.log(ret);
                        if(ret === OK) {
                            let creditAmount = o.amount + o.price;
                            console.log(txt(COLOR.success, '[Sell Order Complete!] Mineral: ' + mineralType + ' ID: ' + o.id + ' Credits: ' + creditAmount + ' Energy Cost: ' + cost));
                        } else {
                            console.log(txt(COLOR.warn, '[Sell Order Failed!] Room: ' + room.name + ' Type: ' + o.type
                                + ' Amount: ' + o.amount + ' ID: ' + o.id));
                        }
                    }
                }
            });
        }
    }
};

StructureTerminal.prototype.calcLowestCostOrder = function (arr) {

};

StructureTerminal.prototype.calcTransactionCost = function (amount, orderRoom, myRoom) {
    return Game.market.calcTransactionCost(amount, orderRoom, myRoom);
};

StructureTerminal.prototype.getMineralCost = function(mineral) {
    switch (mineral) {
        case 'U': return config.orders.RESOURCE_UTRIUM;
        case 'O': return config.orders.RESOURCE_OXYGEN;
        case 'H': return config.orders.RESOURCE_HYDROGEN;
        case 'C': return config.orders.RESOURCE_CATALYST;
        case 'K': return config.orders.RESOURCE_KEANIUM;
        case 'L': return config.orders.RESOURCE_LEMERGIUM;
        case 'Z': return config.orders.RESOURCE_ZYNTHIUM;
        case RESOURCE_POWER: return config.orders.RESOURCE_POWER;
        default: return config.orders.DEFAULT;
    }
};
