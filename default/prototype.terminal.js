StructureTerminal.prototype.doTerminal = function(room)
{
	if (this.cooldown === 0)
	{
		let mineralType = room.memory.mineralType; // example: 'U' 'Z' etc
		let mineralStore = this.store[mineralType];
		
		if (mineralStore >= 10000 && this.store[RESOURCE_ENERGY] >= 25000)
		{
			let orders = Game.market.getAllOrders(o => {
				// TODO: Calculate Transaction Costs
				if (o.price >= 1 && o.type == ORDER_BUY && o.resourceType == mineralType)
				{
					//console.log(txt(COLOR.info, '[Order Found] Mineral: ' + mineralType + ' ID: ' + o.id));
					let ret = Game.market.deal(o.id, o.amount, room.name);
					console.log(ret);
					if(ret == OK)
					{
						let creditAmount = o.amount + o.price;
						console.log(txt(COLOR.success, '[Order Complete!] Mineral: ' + mineralType + ' ID: ' + o.id + 'Credits: ' + creditAmount));
					}
					else
					{
						console.log('order failed');
					}
				}
			});
		}
	}
	
};