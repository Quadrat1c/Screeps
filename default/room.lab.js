Room.prototype.autoRegisterLabs = function (labs) {

    let data = this.memory.resources,
        numberOfLabs = labs.length;

    // create Memory object
    if (!_.isUndefined(data) && _.isUndefined(data.seedCheck))
        data.seedCheck = {
            numberOfLabs: numberOfLabs,
            flowerRegisterChecked: false
        };

    // if some labs are registered, check if it is ok, register otherwise
    if (data && data.reactions && data.reactions.seed_a && data.reactions.seed_b) {

        if (data.seedCheck.numberOfLabs !== numberOfLabs || !data.seedCheck.flowerRegisterChecked) {
            if (this.flowerRegisterCheck(labs)) {
                data.seedCheck.numberOfLabs = numberOfLabs;
                data.seedCheck.flowerRegisterChecked = true;
                console.log(this + 'room labs correctly registered. flowerRegisterChecked: true');
            } else if ((numberOfLabs === 3 && global.config.options.MAKE_REACTIONS_WITH_3LABS) || numberOfLabs === 6 || numberOfLabs === 10) {
                console.log(this + 'room labs are under registration');
                resetBoostProduction(this);
                this.registerFlower(labs);
            }
        }
    }
    // no seeds are registered
    else if //(
    (numberOfLabs === 3 || numberOfLabs === 6 || numberOfLabs === 10) {
        console.log(this, 'room labs are under registration');
        this.registerFlower(labs);
    }
};

Room.prototype.registerFlower = function (labs) {

    let findSeed = function () {
            let seeds = [],
                counter = 0,
                numberOfLabs = labs.length;

            for (let seedCandidate of labs) {
                for (let lab of labs) {
                    if (lab.id === seedCandidate.id)
                        continue;
                    if (lab.pos.inRangeTo(seedCandidate, 2))
                        counter++;
                }
                if (counter === numberOfLabs - 1)
                    seeds.push(seedCandidate.id);
                counter = 0;
            }
            return seeds;
        },
        seeds = findSeed();

    if (seeds.length >= 2) {
        this.registerReactionFlower(seeds[0], seeds[1]);
        console.log(this + 'auto-registering reactor flower SUCCEED');
        console.log(this + 'seeds are: ');
        console.log(this + seeds[0] + ' ' + seeds[1]);
    } else {
        console.log(this, 'auto-registering reactor flower FAILED');
        console.log(this, 'possible seeds are:');
        //global.BB(seeds);
    }
};

Room.prototype.flowerRegisterCheck = function (labs) {

    let data = this.memory.resources,
        numberOfLabs = labs.length,
        seed_a = Game.getObjectById(data.reactions.seed_a),
        seed_b = Game.getObjectById(data.reactions.seed_b),
        counter = 0;

    for (let lab of labs) {
        if (lab.id === seed_a.id || lab.id === seed_b.id)
            continue;
        if (lab.pos.inRangeTo(seed_a, 2) && lab.pos.inRangeTo(seed_b, 2))
            counter++;
    }

    return counter === numberOfLabs - 2;

};

Room.prototype.registerReactionFlower = function(seed_a_id, seed_b_id) {
    if (this.memory.resources === undefined) {
        this.memory.resources = {
            lab: [],
            container: [],
            terminal: [],
            storage: [],
        };
    }
    if ( this.memory.resources.powerSpawn === undefined ) this.memory.resources.powerSpawn = [];

    let seed_a = Game.getObjectById(seed_a_id);
    let seed_b = Game.getObjectById(seed_b_id);
    if ( !seed_a || !seed_b || seed_a.structureType !== STRUCTURE_LAB || seed_b.structureType !== STRUCTURE_LAB ) return ERR_INVALID_TARGET;

    let data = this.memory.resources;
    if ( data.reactions === undefined ) data.reactions = {
        orders: [],
    };
    data.reactions.reactorType = 'flower';
    data.reactions.reactorMode = 'idle';
    data.reactions.seed_a = seed_a_id;
    data.reactions.seed_b = seed_b_id;

    let data_a = data.lab.find( l => l.id === seed_a_id );
    if ( data_a ) {
        data_a.reactionState = 'seed';
    }
    let data_b = data.lab.find( l => l.id === seed_b_id );
    if ( data_b ) {
        data_b.reactionState = 'seed';
    }

    return OK;
};

Room.prototype.saveLabs = function() {
    let labs = this.find(FIND_MY_STRUCTURES, {
        filter: (structure) => ( structure.structureType === STRUCTURE_LAB )
    });
    if (labs.length > 0) {
        this.memory.labs = [];
        let storageLabs = this.storage ? this.storage.pos.findInRange(labs, 2).map(l => l.id) : [];

        this.memory.labs = [];

        // for each entry add to memory ( if not contained )
        let add = (lab) => {
            let labData = this.memory.labs.find( (l) => l.id === lab.id );
            if( !labData ) {
                this.memory.labs.push({
                    id: lab.id,
                    storage: storageLabs.includes(lab.id),
                });
            }
        };
        labs.forEach(add);
    } else delete this.memory.labs;
};