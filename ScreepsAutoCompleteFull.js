
/** CREEP BODY PARTS **/

/**
 * @constant
 * @type {string}
 */
const MOVE = "move";

/**
 * @constant
 * @type {string}
 */
const WORK = "work";

/**
 * @constant
 * @type {string}
 */
const CARRY = "carry";

/**
 * @constant
 * @type {string}
 */
const ATTACK = "attack";

/**
 * @constant
 * @type {string}
 */
const RANGED_ATTACK = "ranged_attack";

/**
 * @constant
 * @type {string}
 */
const TOUGH = "tough";

/**
 * @constant
 * @type {string}
 */
const HEAL = "heal";

/**
 * @constant
 * @type {string}
 */
const CLAIM = "claim";

/** DIRECTION CONSTANTS **/

/**
 * @constant
 * @type {number}
 */
const TOP = 1;

/**
 * @constant
 * @type {number}
 */
const TOP_RIGHT = 2;

/**
 * @constant
 * @type {number}
 */
const RIGHT = 3;

/**
 * @constant
 * @type {number}
 */
const BOTTOM_RIGHT = 4;

/**
 * @constant
 * @type {number}
 */
const BOTTOM = 5;

/**
 * @constant
 * @type {number}
 */
const BOTTOM_LEFT = 6;

/**
 * @constant
 * @type {number}
 */
const LEFT = 7;

/**
 * @constant
 * @type {number}
 */
const TOP_LEFT = 8;

/** ERROR CONSTANTS **/

/**
 * @constant
 * @type {number}
 */
const OK = 0;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_OWNER = -1;

/**
 * @constant
 * @type {number}
 */
const ERR_NO_PATH = -2;

/**
 * @constant
 * @type {number}
 */
const ERR_NAME_EXISTS = -3;

/**
 * @constant
 * @type {number}
 */
const ERR_BUSY = -4;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_FOUND = -5;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_ENOUGH_ENERGY = -6;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_ENOUGH_RESOURCES = -6;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_ENOUGH_EXTENSIONS = -6;

/**
 * @constant
 * @type {number}
 */
const ERR_INVALID_TARGET = -7;

/**
 * @constant
 * @type {number}
 */
const ERR_FULL = -8;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_IN_RANGE = -9;

/**
 * @constant
 * @type {number}
 */
const ERR_INVALID_ARGS = -10;

/**
 * @constant
 * @type {number}
 */
const ERR_TIRED = -11;

/**
 * @constant
 * @type {number}
 */
const ERR_NO_BODYPART = -12;

/**
 * @constant
 * @type {number}
 */
const ERR_RCL_NOT_ENOUGH = -14;

/**
 * @constant
 * @type {number}
 */
const ERR_GCL_NOT_ENOUGH = -15;

/** COLOR CONSTANTS **/

/**
 * @constant
 * @type {number}
 */
const COLOR_RED = 1;

/**
 * @constant
 * @type {number}
 */
const COLOR_PURPLE = 2;

/**
 * @constant
 * @type {number}
 */
const COLOR_BLUE = 3;

/**
 * @constant
 * @type {number}
 */
const COLOR_CYAN = 4;

/**
 * @constant
 * @type {number}
 */
const COLOR_GREEN = 5;

/**
 * @constant
 * @type {number}
 */
const COLOR_YELLOW = 6;

/**
 * @constant
 * @type {number}
 */
const COLOR_ORANGE = 7;

/**
 * @constant
 * @type {number}
 */
const COLOR_BROWN = 8;

/**
 * @constant
 * @type {number}
 */
const COLOR_GREY = 9;

/**
 * @constant
 * @type {number}
 */
const COLOR_WHITE = 10;

/** FIND CONSTANTS **/

/**
 * @constant
 * @type {number}
 */
const FIND_EXIT_TOP = 1;

/**
 * @constant
 * @type {number}
 */
const FIND_EXIT_RIGHT = 3;

/**
 * @constant
 * @type {number}
 */
const FIND_EXIT_BOTTOM = 5;

/**
 * @constant
 * @type {number}
 */
const FIND_EXIT_LEFT = 7;

/**
 * @constant
 * @type {number}
 */
const FIND_EXIT = 10;

/**
 * @constant
 * @type {number}
 */
const FIND_CREEPS = 101;

/**
 * @constant
 * @type {number}
 */
const FIND_MY_CREEPS = 102;

/**
 * @constant
 * @type {number}
 */
const FIND_HOSTILE_CREEPS = 103;

/**
 * @constant
 * @type {number}
 */
const FIND_SOURCES_ACTIVE = 104;

/**
 * @constant
 * @type {number}
 */
const FIND_SOURCES = 105;

/**
 * @constant
 * @type {number}
 */
const FIND_DROPPED_ENERGY = 106;

/**
 * @constant
 * @type {number}
 */
const FIND_DROPPED_RESOURCES = 106;

/**
 * @constant
 * @type {number}
 */
const FIND_STRUCTURES = 107;

/**
 * @constant
 * @type {number}
 */
const FIND_MY_STRUCTURES = 108;

/**
 * @constant
 * @type {number}
 */
const FIND_HOSTILE_STRUCTURES = 109;

/**
 * @constant
 * @type {number}
 */
const FIND_FLAGS = 110;

/**
 * @constant
 * @type {number}
 */
const FIND_CONSTRUCTION_SITES = 111;

/**
 * @constant
 * @type {number}
 */
const FIND_MY_SPAWNS = 112;

/**
 * @constant
 * @type {number}
 */
const FIND_HOSTILE_SPAWNS = 113;

/**
 * @constant
 * @type {number}
 */
const FIND_MY_CONSTRUCTION_SITES = 114;

/**
 * @constant
 * @type {number}
 */
const FIND_HOSTILE_CONSTRUCTION_SITES = 115;

/**
 * @constant
 * @type {number}
 */
const FIND_MINERALS = 116;

/**
 * @constant
 * @type {number}
 */
const FIND_NUKES = 117;

/**
 * @constant
 * @type {number}
 */
const FIND_TOMBSTONES = 118;

/**
 * @constant
 * @type {number}
 */
const FIND_POWER_CREEPS = 119;

/**
 * @constant
 * @type {number}
 */
const FIND_MY_POWER_CREEPS = 120;

/**
 * @constant
 * @type {number}
 */
const FIND_HOSTILE_POWER_CREEPS = 121;

/**
 * @constant
 * @type {string}
 */
const MODE_SIMULATION = "simulation";

/**
 * @constant
 * @type {string}
 */
const MODE_SURVIVAL = "survival";

/**
 * @constant
 * @type {string}
 */
const MODE_WORLD = "world";

/**
 * @constant
 * @type {string}
 */
const MODE_ARENA = "arena";

/** STRUCTURE CONSTANTS **/

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_EXTENSION = "extension";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_RAMPART = "rampart";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_ROAD = "road";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_SPAWN = "spawn";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_WALL = "constructedWall";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_LINK = "link";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_KEEPER_LAIR = "keeperLair";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_CONTROLLER = "controller";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_STORAGE = "storage";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_TOWER = "tower";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_OBSERVER = "observer";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_POWER_BANK = "powerBank";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_POWER_SPAWN = "powerSpawn";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_PORTAL = "portal";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_EXTRACTOR = "extractor";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_LAB = "lab";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_TERMINAL = "terminal";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_CONTAINER = "container";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_NUKER = "nuker";

/** RESOURCE CONSTANTS **/

/**
 * @constant
 * @type {string}
 */
const SUBSCRIPTION_TOKEN = 'token';

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ENERGY = "energy";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_POWER = "power";
/**
 * @constant
 * @type {string}
 */
const RESOURCE_HYDROGEN = "H";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_OXYGEN = "O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM = "U";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_KEANIUM = "K";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LEMERGIUM = "L";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM = "Z";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYST = "X";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_OPS = "ops";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_HYDROXIDE = "OH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM_KEANITE = "ZK";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM_LEMERGITE = "UL";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_GHODIUM = "G";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM_HYDRIDE = "UH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM_OXIDE = "UO";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_KEANIUM_HYDRIDE = "KH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_KEANIUM_OXIDE = "KO";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LEMERGIUM_HYDRIDE = "LH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LEMERGIUM_OXIDE = "LO";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM_HYDRIDE = "ZH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM_OXIDE = "ZO";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_GHODIUM_HYDRIDE = "GH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_GHODIUM_OXIDE = "GO";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM_ACID = "UH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM_ALKALIDE = "UHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_KEANIUM_ACID = "KH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_KEANIUM_ALKALIDE = "KHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LEMERGIUM_ACID = "LH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LEMERGIUM_ALKALIDE = "LHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM_ACID = "ZH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM_ALKALIDE = "ZHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_GHODIUM_ACID = "GH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_GHODIUM_ALKALIDE = "GHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_UTRIUM_ACID = "XUH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_UTRIUM_ALKALIDE = "XUHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_KEANIUM_ACID = "XKH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_KEANIUM_ALKALIDE = "XKHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_LEMERGIUM_ACID = "XLH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_ZYNTHIUM_ACID = "XZH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = "XZHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_GHODIUM_ACID = "XGH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_GHODIUM_ALKALIDE = "XGHO2";

/**
 * @constant
 * @type {object}
 */
const REACTIONS = {
    H: {
        O: "OH",
        L: "LH",
        K: "KH",
        U: "UH",
        Z: "ZH",
        G: "GH"
    },
    O: {
        H: "OH",
        L: "LO",
        K: "KO",
        U: "UO",
        Z: "ZO",
        G: "GO"
    },
    Z: {
        K: "ZK",
        H: "ZH",
        O: "ZO"
    },
    L: {
        U: "UL",
        H: "LH",
        O: "LO"
    },
    K: {
        Z: "ZK",
        H: "KH",
        O: "KO"
    },
    G: {
        H: "GH",
        O: "GO"
    },
    U: {
        L: "UL",
        H: "UH",
        O: "UO"
    },
    OH: {
        UH: "UH2O",
        UO: "UHO2",
        ZH: "ZH2O",
        ZO: "ZHO2",
        KH: "KH2O",
        KO: "KHO2",
        LH: "LH2O",
        LO: "LHO2",
        GH: "GH2O",
        GO: "GHO2"
    },
    X: {
        UH2O: "XUH2O",
        UHO2: "XUHO2",
        LH2O: "XLH2O",
        LHO2: "XLHO2",
        KH2O: "XKH2O",
        KHO2: "XKHO2",
        ZH2O: "XZH2O",
        ZHO2: "XZHO2",
        GH2O: "XGH2O",
        GHO2: "XGHO2"
    },
    ZK: {
        UL: "G"
    },
    UL: {
        ZK: "G"
    },
    LH: {
        OH: "LH2O"
    },
    ZH: {
        OH: "ZH2O"
    },
    GH: {
        OH: "GH2O"
    },
    KH: {
        OH: "KH2O"
    },
    UH: {
        OH: "UH2O"
    },
    LO: {
        OH: "LHO2"
    },
    ZO: {
        OH: "ZHO2"
    },
    KO: {
        OH: "KHO2"
    },
    UO: {
        OH: "UHO2"
    },
    GO: {
        OH: "GHO2"
    },
    LH2O: {
        X: "XLH2O"
    },
    KH2O: {
        X: "XKH2O"
    },
    ZH2O: {
        X: "XZH2O"
    },
    UH2O: {
        X: "XUH2O"
    },
    GH2O: {
        X: "XGH2O"
    },
    LHO2: {
        X: "XLHO2"
    },
    UHO2: {
        X: "XUHO2"
    },
    KHO2: {
        X: "XKHO2"
    },
    ZHO2: {
        X: "XZHO2"
    },
    GHO2: {
        X: "XGHO2"
    }
};

/**
 * @constant
 * @type {object}
 */
const BOOSTS = {
    work: {
        UO: {
            harvest: 2
        },
        UHO2: {
            harvest: 3
        },
        XUHO2: {
            harvest: 4
        },
        LH: {
            build: 1.3,
            repair: 1.3
        },
        LH2O: {
            build: 1.65,
            repair: 1.65
        },
        XLH2O: {
            build: 2,
            repair: 2
        },
        ZH: {
            dismantle: 2
        },
        ZH2O: {
            dismantle: 3
        },
        XZH2O: {
            dismantle: 4
        },
        GH: {
            upgradeController: 1.3
        },
        GH2O: {
            upgradeController: 1.65
        },
        XGH2O: {
            upgradeController: 2
        }
    },
    attack: {
        UH: {
            attack: 2
        },
        UH2O: {
            attack: 3
        },
        XUH2O: {
            attack: 4
        }
    },
    ranged_attack: {
        KO: {
            rangedAttack: 2,
            rangedMassAttack: 2
        },
        KHO2: {
            rangedAttack: 3,
            rangedMassAttack: 3
        },
        XKHO2: {
            rangedAttack: 4,
            rangedMassAttack: 4
        }
    },
    heal: {
        LO: {
            heal: 2,
            rangedHeal: 2
        },
        LHO2: {
            heal: 3,
            rangedHeal: 3
        },
        XLHO2: {
            heal: 4,
            rangedHeal: 4
        }
    },
    carry: {
        KH: {
            capacity: 2
        },
        KH2O: {
            capacity: 3
        },
        XKH2O: {
            capacity: 4
        }
    },
    move: {
        ZO: {
            fatigue: 2
        },
        ZHO2: {
            fatigue: 3
        },
        XZHO2: {
            fatigue: 4
        }
    },
    tough: {
        GO: {
            damage: .7
        },
        GHO2: {
            damage: .5
        },
        XGHO2: {
            damage: .3
        }
    }
};

/**
 * @constant
 * @type {string[]}
 */
const RESOURCES_ALL = [
    RESOURCE_ENERGY,
    RESOURCE_POWER,
    RESOURCE_HYDROGEN,
    RESOURCE_OXYGEN,
    RESOURCE_UTRIUM,
    RESOURCE_KEANIUM,
    RESOURCE_LEMERGIUM,
    RESOURCE_ZYNTHIUM,
    RESOURCE_CATALYST,
    RESOURCE_GHODIUM,
    RESOURCE_HYDROXIDE,
    RESOURCE_ZYNTHIUM_KEANITE,
    RESOURCE_UTRIUM_LEMERGITE,
    RESOURCE_UTRIUM_HYDRIDE,
    RESOURCE_UTRIUM_OXIDE,
    RESOURCE_KEANIUM_HYDRIDE,
    RESOURCE_KEANIUM_OXIDE,
    RESOURCE_LEMERGIUM_HYDRIDE,
    RESOURCE_LEMERGIUM_OXIDE,
    RESOURCE_ZYNTHIUM_HYDRIDE,
    RESOURCE_ZYNTHIUM_OXIDE,
    RESOURCE_GHODIUM_HYDRIDE,
    RESOURCE_GHODIUM_OXIDE,
    RESOURCE_UTRIUM_ACID,
    RESOURCE_UTRIUM_ALKALIDE,
    RESOURCE_KEANIUM_ACID,
    RESOURCE_KEANIUM_ALKALIDE,
    RESOURCE_LEMERGIUM_ACID,
    RESOURCE_LEMERGIUM_ALKALIDE,
    RESOURCE_ZYNTHIUM_ACID,
    RESOURCE_ZYNTHIUM_ALKALIDE,
    RESOURCE_GHODIUM_ACID,
    RESOURCE_GHODIUM_ALKALIDE,
    RESOURCE_CATALYZED_UTRIUM_ACID,
    RESOURCE_CATALYZED_UTRIUM_ALKALIDE,
    RESOURCE_CATALYZED_KEANIUM_ACID,
    RESOURCE_CATALYZED_KEANIUM_ALKALIDE,
    RESOURCE_CATALYZED_LEMERGIUM_ACID,
    RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE,
    RESOURCE_CATALYZED_ZYNTHIUM_ACID,
    RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE,
    RESOURCE_CATALYZED_GHODIUM_ACID,
    RESOURCE_CATALYZED_GHODIUM_ALKALIDE,
    RESOURCE_OPS
];

/**
 * @constant
 * @type {string[]}
 */
const BODYPARTS_ALL = [
    MOVE,
    WORK,
    CARRY,
    ATTACK,
    RANGED_ATTACK,
    TOUGH,
    HEAL,
    CLAIM
];

/**
 * @constant
 * @type {string[]}
 */
const COLORS_ALL = [
    COLOR_RED,
    COLOR_PURPLE,
    COLOR_BLUE,
    COLOR_CYAN,
    COLOR_GREEN,
    COLOR_YELLOW,
    COLOR_ORANGE,
    COLOR_BROWN,
    COLOR_GREY,
    COLOR_WHITE
];

const REACTION_TIME = {
    OH: 20,
    ZK: 5,
    UL: 5,
    G: 5,
    UH: 10,
    UH2O: 5,
    XUH2O: 60,
    UO: 10,
    UHO2: 5,
    XUHO2: 60,
    KH: 10,
    KH2O: 5,
    XKH2O: 60,
    KO: 10,
    KHO2: 5,
    XKHO2: 60,
    LH: 15,
    LH2O: 10,
    XLH2O: 65,
    LO: 10,
    LHO2: 5,
    XLHO2: 60,
    ZH: 20,
    ZH2O: 40,
    XZH2O: 160,
    ZO: 10,
    ZHO2: 5,
    XZHO2: 60,
    GH: 10,
    GH2O: 15,
    XGH2O: 80,
    GO: 10,
    GHO2: 30,
    XGHO2: 150,
};

/**
 * @constant
 * @type {object}
 */
const BODYPART_COST = {
    move:           50,
    work:          100,
    attack:         80,
    carry:          50,
    heal:          250,
    ranged_attack: 150,
    tough:          10,
    claim:         600
};

/**
 * Spawn time per body part in ticks
 * @constant
 * @type {number}
 */
const CREEP_SPAWN_TIME = 3;

/**
 * @constant
 * @type {number}
 */
const CREEP_RENEW_RATIO = 1.2;

/**
 * Lifetime of a creep
 * @constant
 * @type {number}
 */
const CREEP_LIFE_TIME = 1500;

/**
 * Lifetime of a creep with CLAIM body parts
 * @constant
 * @type {number}
 */
const CREEP_CLAIM_LIFE_TIME = 500;

/**
 * use unknown
 * @constant
 * @type {number}
 */
const CREEP_CORPSE_RATE = 0.2;

/**
 * @constant
 * @type {string[]}
 */
const OBSTACLE_OBJECT_TYPES = ["spawn", "creep", "powerCreep", "source", "mineral", "controller", "constructedWall", "extension", "link", "storage", "tower", "observer", "powerSpawn", "powerBank", "lab", "terminal","nuker"];

/**
 * @constant
 * @type {number}
 */
const ENERGY_REGEN_TIME = 300;

/**
 * @constant
 * @type {number}
 */
const ENERGY_DECAY = 1000;

/**
 * @constant
 * @type {number}
 */
const MINERAL_REGEN_TIME = 50000;

/**
 * @constant
 * @type {object}
 */
const MINERAL_MIN_AMOUNT = {
    H: 140000,
    O: 140000,
    L: 70000,
    K: 70000,
    Z: 70000,
    U: 70000,
    X: 70000
};

/**
 * @constant
 * @type {number}
 */
const MINERAL_RANDOM_FACTOR = 2;

/**
 * @constant
 * @type {number}
 */
const REPAIR_COST = 0.01;

/**
 * @constant
 * @type {number}
 */
const DISMANTLE_COST = 0.005;

/**
 * @constant
 * @type {number}
 */
const RAMPART_DECAY_AMOUNT = 300;

/**
 * @constant
 * @type {number}
 */
const RAMPART_DECAY_TIME = 100;

/**
 * @constant
 * @type {number}
 */
const RAMPART_HITS = 1;

/**
 * @constant
 * @type {object}
 */
const RAMPART_HITS_MAX = {
    2: 300000,
    3: 1000000,
    4: 3000000,
    5: 10000000,
    6: 30000000,
    7: 100000000,
    8: 300000000
};

/**
 * @constant
 * @type {number}
 */
const SPAWN_HITS = 5000;

/**
 * @constant
 * @type {number}
 */
const SPAWN_ENERGY_START = 300;

/**
 * @constant
 * @type {number}
 */
const SPAWN_ENERGY_CAPACITY = 300;

/**
 * @constant
 * @type {number}
 */
const SOURCE_ENERGY_CAPACITY = 3000;

/**
 * @constant
 * @type {number}
 */
const SOURCE_ENERGY_NEUTRAL_CAPACITY = 1500;

/**
 * @constant
 * @type {number}
 */
const SOURCE_ENERGY_KEEPER_CAPACITY = 4500;

/**
 * @constant
 * @type {number}
 */
const ROAD_HITS = 5000;

/**
 * @constant
 * @type {number}
 */
const WALL_HITS = 1;

/**
 * @constant
 * @type {number}
 */
const WALL_HITS_MAX = 300000000;

/**
 * @constant
 * @type {number}
 */
const EXTENSION_HITS = 1000;

/**
 * @constant
 * @type {object}
 */
const EXTENSION_ENERGY_CAPACITY = {
    0: 50,
    1: 50,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 100,
    8: 200
};

/**
 * @constant
 * @type {number}
 */
const ROAD_WEAROUT = 1;

/**
 * @constant
 * @type {number}
 */
const ROAD_DECAY_AMOUNT = 100;

/**
 * @constant
 * @type {number}
 */
const ROAD_DECAY_TIME = 1000;

/**
 * @constant
 * @type {number}
 */
const LINK_HITS = 1000;

/**
 * @constant
 * @type {number}
 */
const LINK_HITS_MAX = 1000;

/**
 * @constant
 * @type {number}
 */
const LINK_CAPACITY = 800;

/**
 * @constant
 * @type {number}
 */
const LINK_COOLDOWN = 1;

/**
 * @constant
 * @type {number}
 */
const LINK_LOSS_RATIO = 0.03;

/**
 * @constant
 * @type {number}
 */
const CONTAINER_HITS = 250000;

/**
 * @constant
 * @type {number}
 */
const CONTAINER_CAPACITY = 2000;

/**
 * @constant
 * @type {number}
 */
const CONTAINER_DECAY = 5000;

/**
 * @constant
 * @type {number}
 */
const CONTAINER_DECAY_TIME = 100;

/**
 * @constant
 * @type {number}
 */
const CONTAINER_DECAY_TIME_OWNED = 500;

/**
 * @constant
 * @type {number}
 */
const NUKER_HITS = 1000;

/**
 * @constant
 * @type {number}
 */
const NUKER_COOLDOWN = 100000;

/**
 * @constant
 * @type {number}
 */
const NUKER_ENERGY_CAPACITY = 300000;

/**
 * @constant
 * @type {number}
 */
const NUKER_GHODIUM_CAPACITY = 5000;

/**
 * @constant
 * @type {number}
 */
const NUKE_LAND_TIME = 50000;

/**
 * @constant
 * @type {number}
 */
const NUKE_RANGE = 10;

/**
 * @constant
 * @type {object}
 */
const NUKE_DAMAGE = {
    0: 10000000,
    2: 5000000
};

/**
 * @constant
 * @type {number}
 */
const PORTAL_DECAY = 30000;

/**
 * @constant
 * @type {number}
 */
const TOMBSTONE_DECAY_PER_PART = 5;

/**
 * @constant
 * @type {string}
 */
const ORDER_SELL = 'sell';

/**
 * @constant
 * @type {string}
 */
const ORDER_BUY = 'buy';

/**
 * @constant
 * @type {number}
 */
const STORAGE_CAPACITY = 1000000;

/**
 * @constant
 * @type {number}
 */
const STORAGE_HITS = 10000;

/**
 * @constant
 * @type {number}
 */
const CARRY_CAPACITY = 50;

/**
 * @constant
 * @type {number}
 */
const HARVEST_POWER = 2;

/**
 * @constant
 * @type {number}
 */
const HARVEST_MINERAL_POWER = 1;

/**
 * @constant
 * @type {number}
 */
const REPAIR_POWER = 100;

/**
 * @constant
 * @type {number}
 */
const DISMANTLE_POWER = 100;

/**
 * @constant
 * @type {number}
 */
const BUILD_POWER = 5;

/**
 * @constant
 * @type {number}
 */
const ATTACK_POWER = 30;

/**
 * @constant
 * @type {number}
 */
const UPGRADE_CONTROLLER_POWER = 1;

/**
 * @constant
 * @type {number}
 */
const RANGED_ATTACK_POWER = 10;

/**
 * @constant
 * @type {number}
 */
const HEAL_POWER = 12;

/**
 * @constant
 * @type {number}
 */
const RANGED_HEAL_POWER = 4;

/**
 * @constant
 * @type {object}
 */
const CONSTRUCTION_COST = {
    spawn: 15000,
    extension: 3000,
    road: 300,
    constructedWall: 1,
    rampart: 1,
    link: 5000,
    storage: 30000,
    tower: 5000,
    observer: 8000,
    powerSpawn: 100000,
    extractor: 5000,
    lab: 50000,
    terminal: 100000,
    container: 5000,
    nuker: 100000
};

/**
 * @constant
 * @type {number}
 */
const CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5;

/**
 * @constant
 * @type {object}
 */
const CONTROLLER_LEVELS = {
    1: 200,
    2: 45000,
    3: 135000,
    4: 405000,
    5: 1215000,
    6: 3645000,
    7: 10935000
};

/**
 * @constant
 * @type {object}
 */
const CONTROLLER_STRUCTURES = {
    spawn: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 2, 8: 3 },
    extension: { 0: 0, 1: 0, 2: 5, 3: 10, 4: 20, 5: 30, 6: 40, 7: 50, 8: 60 },
    link: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 2, 6: 3, 7: 4, 8: 6 },
    road: { 0: 2500, 1: 2500, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500 },
    constructedWall: { 1: 0, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500 },
    rampart: { 1: 0, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500 },
    storage: { 1: 0, 2: 0, 3: 0, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1 },
    tower: { 1: 0, 2: 0, 3: 1, 4: 1, 5: 1, 6: 2, 7: 2, 8: 4 },
    observer: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1 },
    powerSpawn: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1 }
};

/**
 * @constant
 * @type {object}
 */
const CONTROLLER_DOWNGRADE = {
    1: 20000,
    2: 5000,
    3: 10000,
    4: 20000,
    5: 40000,
    6: 60000,
    7: 100000,
    8: 150000
};

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_DOWNGRADE_RESTORE = 100;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD = 5000;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_CLAIM_DOWNGRADE = 0.2;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_RESERVE = 1;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_RESERVE_MAX = 5000;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_MAX_UPGRADE_PER_TICK = 15;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_ATTACK_BLOCKED_UPGRADE = 1000;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_NUKE_BLOCKED_UPGRADE = 200;

/**
 * @constant
 * @type {number}
 */
const TERMINAL_CAPACITY = 300000;

/**
 * @constant
 * @type {number}
 */
const TERMINAL_HITS = 3000;

/**
 * @constant
 * @type {number}
 */
const TERMINAL_SEND_COST = 0.1;

/**
 * @constant
 * @type {number}
 */
const TERMINAL_MIN_SEND = 100;

/**
 * @constant
 * @type {number}
 */
const TOWER_HITS = 3000;

/**
 * @constant
 * @type {number}
 */
const TOWER_CAPACITY = 1000;

/**
 * @constant
 * @type {number}
 */
const TOWER_ENERGY_COST = 10;

/**
 * @constant
 * @type {number}
 */
const TOWER_POWER_ATTACK = 600;

/**
 * @constant
 * @type {number}
 */
const TOWER_POWER_HEAL = 400;

/**
 * @constant
 * @type {number}
 */
const TOWER_POWER_REPAIR = 800;

/**
 * @constant
 * @type {number}
 */
const TOWER_OPTIMAL_RANGE = 5;

/**
 * @constant
 * @type {number}
 */
const TOWER_FALLOFF_RANGE = 20;

/**
 * @constant
 * @type {number}
 */
const TOWER_FALLOFF = 0.75;

/**
 * @constant
 * @type {number}
 */
const OBSERVER_HITS = 500;

/**
 * @constant
 * @type {number}
 */
const OBSERVER_RANGE = 10;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_HITS = 2000000;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_CAPACITY_MAX = 5000;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_CAPACITY_MIN = 500;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_CAPACITY_CRIT = 0.3;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_DECAY = 5000;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_HIT_BACK = 0.5;

/**
 * @constant
 * @type {number}
 */
const POWER_SPAWN_HITS = 5000;

/**
 * @constant
 * @type {number}
 */
const POWER_SPAWN_ENERGY_CAPACITY = 5000;

/**
 * @constant
 * @type {number}
 */
const POWER_SPAWN_POWER_CAPACITY = 100;

/**
 * @constant
 * @type {number}
 */
const POWER_SPAWN_ENERGY_RATIO = 50;

/**
 * @constant
 * @type {number}
 */
const LAB_HITS = 500;

/**
 * @constant
 * @type {number}
 */
const LAB_MINERAL_CAPACITY = 3000;

/**
 * @constant
 * @type {number}
 */
const LAB_ENERGY_CAPACITY = 2000;

/**
 * @constant
 * @type {number}
 */
const LAB_BOOST_ENERGY = 20;

/**
 * @constant
 * @type {number}
 */
const LAB_BOOST_MINERAL = 30;

/**
 * @constant
 * @type {number}
 */
const LAB_COOLDOWN = 10;

/**
 * @constant
 * @type {number}
 */
const GCL_POW = 2.4;

/**
 * @constant
 * @type {number}
 */
const GCL_MULTIPLY = 1000000;

/**
 * @constant
 * @type {number}
 */
const GCL_NOVICE = 3;

/**
 * @constant
 * @type {number}
 */
const TERRAIN_MASK_WALL = 1;

/**
 * @constant
 * @type {number}
 */
const TERRAIN_MASK_SWAMP = 2;

/**
 * @constant
 * @type {number}
 */
const TERRAIN_MASK_LAVA = 4;

/**
 * @constant
 * @type {number}
 */
const MAX_CONSTRUCTION_SITES = 100;

/**
 * @constant
 * @type {number}
 */
const MAX_CREEP_SIZE = 50;

/** LOOK CONSTANTS **/

/**
 * @constant
 * @type {string}
 */
const LOOK_CREEPS = "creep";

/**
 * @constant
 * @type {string}
 */
const LOOK_ENERGY = "energy";

/**
 * @constant
 * @type {string}
 */
const LOOK_RESOURCES = "resource";

/**
 * @constant
 * @type {string}
 */
const LOOK_SOURCES = "source";

/**
 * @constant
 * @type {string}
 */
const LOOK_MINERALS = "mineral";

/**
 * @constant
 * @type {string}
 */
const LOOK_STRUCTURES = "structure";

/**
 * @constant
 * @type {string}
 */
const LOOK_FLAGS = "flag";

/**
 * @constant
 * @type {string}
 */
const LOOK_CONSTRUCTION_SITES = "constructionSite";

/**
 * @constant
 * @type {string}
 */
const LOOK_NUKES = "nuke";

/**
 * @constant
 * @type {string}
 */
const LOOK_TERRAIN = "terrain";

/**
 * @constant
 * @type {string}
 */
const LOOK_TOMBSTONES = "tombstone";

/**
 * @constant
 * @type {string}
 */
const SYSTEM_USERNAME = 'Screeps';

/**
 * @constant
 * @deprecated use SIGN_PLANNED_AREA instead.
 * @type {string}
 */
const SIGN_NOVICE_AREA = 'A new Novice Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';

/**
 * @constant
 * @deprecated use SIGN_PLANNED_AREA instead.
 * @type {string}
 */
const SIGN_RESPAWN_AREA = 'A new Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';

/**
 * @constant
 * @type {string}
 */
const SIGN_PLANNED_AREA = 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';

/**
 * @constant
 * @type {number}
 */
const TERMINAL_COOLDOWN = 10;

/**
 * @constant
 * @type {number}
 */
const POWER_LEVEL_MULTIPLY = 1000;

/**
 * @constant
 * @type {number}
 */
const POWER_LEVEL_POW = 2;

/**
 * @constant
 * @type {number}
 */
const POWER_CREEP_SPAWN_COOLDOWN = 8*3600*1000;

/**
 * @constant
 * @type {number}
 */
const POWER_CREEP_DELETE_COOLDOWN = 24*3600*1000;

/**
 * @constant
 * @type {number}
 */
const POWER_CREEP_MAX_LEVEL = 25;

/**
 * @constant
 * @type {number}
 */
const POWER_CREEP_LIFE_TIME = 5000;

/**
 * @constant
 * @type {object}
 */
const POWER_CLASS = {
        OPERATOR: 'operator'
    },

/**
 * @constant
 * @type {number}
 */
const PWR_GENERATE_OPS = 1;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_SPAWN = 2;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_TOWER = 3;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_STORAGE = 4;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_LAB = 5;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_EXTENSION = 6;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_OBSERVER = 7;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_TERMINAL = 8;

/**
 * @constant
 * @type {number}
 */
const PWR_DISRUPT_SPAWN = 9;

/**
 * @constant
 * @type {number}
 */
const PWR_DISRUPT_TOWER = 10;

/**
 * @constant
 * @type {number}
 */
const PWR_DISRUPT_SOURCE = 11;

/**
 * @constant
 * @type {number}
 */
const PWR_SHIELD = 12;

/**
 * @constant
 * @type {number}
 */
const PWR_REGEN_SOURCE = 13;

/**
 * @constant
 * @type {number}
 */
const PWR_REGEN_MINERAL = 14;

/**
 * @constant
 * @type {number}
 */
const PWR_DISRUPT_TERMINAL = 15;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_POWER = 16;

/**
 * @constant
 * @type {number}
 */
const PWR_FORTIFY = 17;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_CONTROLLER = 18;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_FACTORY = 19;

/**
 * @constant
 * @type {object}
 */
const POWER_INFO = {
        [exports.PWR_GENERATE_OPS]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 50,
            effect: [1, 2, 4, 6, 8]
        },
        [exports.PWR_OPERATE_SPAWN]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 300,
            duration: 1000,
            range: 3,
            ops: 100,
            effect: [0.9, 0.7, 0.5, 0.35, 0.2]
        },
        [exports.PWR_OPERATE_TOWER]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 10,
            duration: 100,
            range: 3,
            ops: 10,
            effect: [1.1, 1.2, 1.3, 1.4, 1.5]
        },
        [exports.PWR_OPERATE_STORAGE]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 800,
            duration: 1000,
            range: 3,
            ops: 100,
            effect: [500000,1000000,2000000,4000000,7000000]
        },
        [exports.PWR_OPERATE_LAB]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 50,
            duration: 1000,
            range: 3,
            ops: 10,
            effect: [2,4,6,8,10]
        },
        [exports.PWR_OPERATE_EXTENSION]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 50,
            range: 3,
            ops: 2,
            effect: [0.2, 0.4, 0.6, 0.8, 1.0]
        },
        [exports.PWR_OPERATE_OBSERVER]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 400,
            duration: [200,400,600,800,1000],
            range: 3,
            ops: 10,
        },
        [exports.PWR_OPERATE_TERMINAL]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 500,
            duration: 1000,
            range: 3,
            ops: 100,
            effect: [0.9, 0.8, 0.7, 0.6, 0.5]
        },
        [exports.PWR_DISRUPT_SPAWN]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 5,
            range: 20,
            ops: 10,
            duration: [1,2,3,4,5]
        },
        [exports.PWR_DISRUPT_TOWER]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 0,
            duration: 5,
            range: 3,
            ops: 10,
            effect: [0.9, 0.8, 0.7, 0.6, 0.5],
        },
        [exports.PWR_DISRUPT_SOURCE]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 100,
            range: 3,
            ops: 100,
            duration: [100, 200, 300, 400, 500]
        },
        [exports.PWR_SHIELD]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            effect: [5000, 10000, 15000, 20000, 25000],
            duration: 50,
            cooldown: 20,
            energy: 100,
        },
        [exports.PWR_REGEN_SOURCE]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [10, 11, 12, 14, 22],
            cooldown: 100,
            duration: 300,
            range: 3,
            effect: [50,100,150,200,250],
            period: 15
        },
        [exports.PWR_REGEN_MINERAL]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [10, 11, 12, 14, 22],
            cooldown: 100,
            duration: 100,
            range: 3,
            effect: [2,4,6,8,10],
            period: 10
        },
        [exports.PWR_DISRUPT_TERMINAL]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [20, 21, 22, 23, 24],
            cooldown: 8,
            duration: 10,
            range: 50,
            ops: [50,40,30,20,10]

        },
        [exports.PWR_FORTIFY]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 5,
            range: 3,
            ops: 5,
            duration: [1, 2, 3, 4, 5]
        },
        [exports.PWR_OPERATE_POWER]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [10, 11, 12, 14, 22],
            cooldown: 1000,
            range: 3,
            duration: 800,
            ops: 200,
            effect: [1, 2, 3, 4, 5]
        },
        [exports.PWR_OPERATE_CONTROLLER]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [20, 21, 22, 23, 24],
            cooldown: 1000,
            range: 3,
            duration: 800,
            ops: 200,
            effect: [10, 20, 30, 40, 50]
        },
        [exports.PWR_OPERATE_FACTORY]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 1000,
            range: 3,
            duration: 800,
            ops: 100
        },
    };



/**
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep}
 */
Creep = function() { };

Creep.prototype =
{
    /**
     * An array describing the creep’s body
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#body}
     *
     * @type {Array<{boost:string, type:string, hits:number}>}
     *
     * @note boost: If the body part is boosted, this property specifies the mineral type which is used for boosting. One of the RESOURCE_* constants.
     * @note type: One of the body part types constants.
     * @note hits: The remaining amount of hit points of this body part.
     *
     */
    body: [],

    /**
     * An object with the creep's cargo contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(creep.carry) to get the total amount of contents.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#carry}
     *
     * @type {object<string, number>}
     */
    carry: {},

    /**
     * The total amount of resources the creep can carry.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#carryCapacity}
     *
     * @type {number}
     */
    carryCapacity: 0,

    /**
     * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#fatigue}
     *
     * @type {number}
     */
    fatigue: 0,

    /**
     * The current amount of hit points of the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#hits}
     *
     * @type {number}
     */
    hits: 0,

    /**
     * The maximum amount of hit points of the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#hitsMax}
     *
     * @type {number}
     */
    hitsMax: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#id}
     *
     * @type {string}
     */
    id: "",

    /**
     * A shorthand to Memory.creeps[creep.name].
     * You can use it for quick access the creep’s specific memory data object.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#memory}
     *
     * @type {*}
     */
    memory: {},

    /**
     * Whether it is your creep or foe.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#my}
     *
     * @type {boolean}
     */
    my: true,

    /**
     * Creep’s name.
     * You can choose the name while creating a new creep, and it cannot be changed later.
     * This name is a hash key to access the creep via the Game.creeps object.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#name}
     *
     * @type {string}
     */
    name: "",

    /**
     * The text message that the creep was saying at the last tick.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#saying}
     *
     * @type {string}
     */
    saying: "",

    /**
     * An object with the creep’s owner info
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#owner}
     *
     * @type {{username:string}}
     */
    owner:
    {
        username: ""
    },

    /**
     * Whether this creep is still being spawned.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#spawning}
     *
     * @type {boolean}
     */
    spawning: false,

    /**
     * The remaining amount of game ticks after which the creep will die.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#ticksToLive}
     *
     * @type {number}
     */
    ticksToLive: 0,

    /**
     * Attack another creep or structure in a short-ranged attack.
     * Requires the ATTACK body part.
     * If the target is inside a rampart, then the rampart is attacked instead.
     * The target has to be at adjacent square to the creep.
     * If the target is a creep with ATTACK body parts and is not inside a rampart, it will automatically hit back at the attacker.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#attack}
     *
     * @type {function}
     *
     * @param {Creep|Spawn|Structure} target The target object to be attacked.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    attack: function(target) { },

    /**
     * Decreases the controller's downgrade or reservation timer for 1 tick per every 5 CLAIM body parts (so the creep must have at least 5xCLAIM).
     * The controller under attack cannot be upgraded for the next 1,000 ticks.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#attackController}
     *
     * @type {function}
     *
     * @param {StructureController} target The target controller object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    attackController: function(target) { },

    /**
     * Build a structure at the target construction site using carried energy.
     * Requires WORK and CARRY body parts.
     * The target has to be within 3 squares range of the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#build}
     *
     * @type {function}
     *
     * @param {ConstructionSite} target The target construction site to be built.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    build: function(target) { },

    /**
     * Cancel the order given during the current game tick.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#cancelOrder}
     *
     * @type {function}
     *
     * @param {string} methodName The name of a creep's method to be cancelled.
     *
     * @return {number|OK|ERR_NOT_FOUND}
     */
    cancelOrder: function(methodName) { },

    /**
     * Claims a neutral controller under your control.
     * Requires the CLAIM body part.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#claimController}
     *
     * @type {function}
     *
     * @param {StructureController} target The target controller object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_NO_BODYPART|ERR_GCL_NOT_ENOUGH}
     */
    claimController: function(target) { },

    /**
     * Dismantles any (even hostile) structure returning 50% of the energy spent on its repair.
     * Requires the WORK body part.
     * If the creep has an empty CARRY body part, the energy is put into it; otherwise it is dropped on the ground.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#dismantle}
     *
     * @type {function}
     *
     * @param {Spawn|Structure} target The target structure.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    dismantle: function(target) { },

    /**
     * Drop this resource on the ground.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#drop}
     *
     * @type {function}
     *
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES}
     */
    drop: function(resourceType, amount) { },

    /**
     * Get the quantity of live body parts of the given type.
     * Fully damaged parts do not count.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#getActiveBodyparts}
     *
     * @type {function}
     *
     * @param {string} type A body part type, one of the following body part constants: MOVE, WORK, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH
     *
     * @return {number} A number representing the quantity of body parts.
     */
    getActiveBodyparts: function(type) { },

    /**
     * Harvest energy from the source or minerals from the mineral deposit.
     * Requires the WORK body part.
     * If the creep has an empty CARRY body part, the harvested resource is put into it; otherwise it is dropped on the ground.
     * The target has to be at an adjacent square to the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#harvest}
     *
     * @type {function}
     *
     * @param {Source|Mineral} target The object to be harvested.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_FOUND|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    harvest: function(target) { },

    /**
     * Heal self or another creep.
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     * Requires the HEAL body part.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#heal}
     *
     * @type {function}
     *
     * @param {Creep} target The target creep object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    heal: function(target) { },

    /**
     * Move the creep one square in the specified direction.
     * Requires the MOVE body part.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#move}
     *
     * @type {function}
     *
     * @param {number} direction One of the following constants: TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_TIRED|ERR_NO_BODYPART}
     */
    move: function(direction) { },

    /**
     * Move the creep using the specified predefined path.
     * Requires the MOVE body part.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#moveByPath}
     *
     * @type {function}
     *
     * @param {Array|string} path A path value as returned from Room.findPath or RoomPosition.findPathTo methods. Both array form and serialized string form are accepted.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_FOUND|ERR_INVALID_ARGS|ERR_TIRED|ERR_NO_BODYPART}
     */
    moveByPath: function(path) { },

    /**
     * Find the optimal path to the target within the same room and move to it.
     * A shorthand to consequent calls of pos.findPathTo() and move() methods.
     * If the target is in another room, then the corresponding exit will be used as a target.
     * Requires the MOVE body part.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#moveTo}
     *
     * @type {function}
     *
     * @param {number} x X position of the target in the same room.
     * @param {number} [y] Y position of the target in the same room.
     * @param {object} [opts] An object containing additional options
     * @param {number} [opts.reusePath] This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly slower creep reaction behavior. The path is stored into the creep's memory to the _move property. The reusePath value defines the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease to make the movement more consistent. Set to 0 if you want to disable path reusing.
     * @param {boolean} [opts.serializeMemory] If reusePath is enabled and this option is set to true, the path will be stored in memory in the short serialized form using Room.serializePath. The default value is true.
     * @param {boolean} [opts.noPathFinding] If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse. This can significantly save CPU time in some cases. The default value is false.
     * @note opts also supports any method from the Room.findPath options.
     *
     * @alias moveTo(target, [opts])
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_TIRED|ERR_NO_BODYPART|ERR_INVALID_TARGET|ERR_NO_PATH}
     */
    moveTo: function(x, y, opts) { },

    /**
     * Toggle auto notification when the creep is under attack.
     * The notification will be sent to your account email.
     * Turned on by default.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#notifyWhenAttacked}
     *
     * @type {function}
     *
     * @param {boolean} enabled Whether to enable notification or disable.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function(enabled) { },

    /**
     * Pick up an item (a dropped piece of energy).
     * Requires the CARRY body part.
     * The target has to be at adjacent square to the creep or at the same square.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#pickup}
     *
     * @type {function}
     *
     * @param {Resource} target The target object to be picked up.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    pickup: function(target) { },

    /**
     * Help another creep to follow this creep.
     * The fatigue generated for the target's move will be added to the creep instead of the target. Requires the MOVE body part.
     * The target has to be at adjacent square to the creep. The creep must move elsewhere, and the target must move towards the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.pull}
     *
     * @type {function}
     *
     * @param {Creep} target The target creep.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_TIRED|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    pull: function(target) { },

    /**
     * A ranged attack against another creep or structure.
     * Requires the RANGED_ATTACK body part.
     * If the target is inside a rampart, the rampart is attacked instead.
     * The target has to be within 3 squares range of the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#rangedAttack}
     *
     * @type {function}
     *
     * @param {Creep|Spawn|Structure} target The target object to be attacked.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    rangedAttack: function(target) { },

    /**
     * Heal another creep at a distance.
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     * Requires the HEAL body part.
     * The target has to be within 3 squares range of the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#rangedHeal}
     *
     * @type {function}
     *
     * @param {Creep} target The target creep object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    rangedHeal: function(target) { },

    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range.
     * Requires the RANGED_ATTACK body part.
     * The attack power depends on the range to each target.
     * Friendly units are not affected.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#rangedMassAttack}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NO_BODYPART}
     */
    rangedMassAttack: function() { },

    /**
     * Repair a damaged structure using carried energy.
     * Requires the WORK and CARRY body parts.
     * The target has to be within 3 squares range of the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#repair}
     *
     * @type {function}
     *
     * @param {Spawn|Structure} target The target structure to be repaired.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    repair: function(target) { },

    /**
     * Temporarily block a neutral controller from claiming by other players.
     * Each tick, this command increases the counter of the period during which the controller is unavailable by 1 tick per each CLAIM body part.
     * The maximum reservation period to maintain is 5,000 ticks.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#reserveController}
     *
     * @type {function}
     *
     * @param {StructureController} target The target controller object to be reserved.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    reserveController: function(target) { },

    /**
     * Display a visual speech balloon above the creep with the specified message. The message will be
     * available for one tick. You can read the last message using the saying property.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#say}
     *
     * @type {function}
     *
     * @param {string} message The message to be displayed. Maximum length is 10 characters.
     * @param {boolean} [public] Set to true to allow other players to see this message. Default is false.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    say: function(message, public) { },
    
    /**
     * Sign a controller with an arbitrary text visible to all players. 
     * This text will appear in the room UI, in the world map, and can be accessed via the API. 
     * You can sign unowned and hostile controllers. The target has to be at adjacent square to the creep. 
     * Pass an empty string to remove the sign.
     *
     * @see {@link http://docs.screeps.com/api/#Creep.signController}
     *
     * @type {function}
     *
     * @param {StructureController} target The target controller object to be signed.
     * @param {string} text The sign text. The string is cut off after 100 characters..
     *
     * @return {number|OK|ERR_INVALID_TARGET|ERR_BUSY|ERR_NOT_IN_RANGE}
     */
    signController: function(target, text) { },

    /**
     * Kill the creep immediately.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#suicide}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    suicide: function() { },

    /**
     * Transfer resource from the creep to another object.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#transfer}
     *
     * @type {function}
     *
     * @param {Creep|Spawn|Structure} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { },

    /**
     * Upgrade your controller to the next level using carried energy.
     * Upgrading controllers raises your Global Control Level in parallel.
     * Requires WORK and CARRY body parts.
     * The target has to be within 3 squares range of the creep.
     * A fully upgraded level 8 controller can't be upgraded with the power over 15 energy units per tick regardless of creeps power.
     * The cumulative effect of all the creeps performing upgradeController in the current tick is taken into account.
     * The effect can be boosted by ghodium mineral compounds (including limit increase).
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#upgradeController}
     *
     * @type {function}
     *
     * @param {StructureController} target The target controller object to be upgraded.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    upgradeController: function(target) { },

    /**
     * Withdraw resources from a structure.
     * The target has to be at adjacent square to the creep.
     * Multiple creeps can withdraw from the same structure in the same tick.
     * Your creeps can withdraw resources from hostile structures as well, in case if there is no hostile rampart on top of it.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203013212-Creep#withdraw}
     *
     * @type {function}
     *
     * @param {Structure} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    withdraw: function(target, resourceType, amount) { }
};

/**
 * A site of a structure which is currently under construction.
 * A construction site can be created using the 'Construct' button at the left of the game field or the Room.createConstructionSite method.
 * To build a structure on the construction site, give a worker creep some amount of energy and perform Creep.build action.
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/203016342-ConstructionSite}
 */
ConstructionSite = function() { };

ConstructionSite.prototype =
{
    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016342-ConstructionSite#id}
     *
     * @type {string}
     */
    id: "",

    /**
     * Whether this is your own construction site.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016342-ConstructionSite#my}
     *
     * @type {boolean}
     */
    my: true,

    /**
     * An object with the structure’s owner info
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016342-ConstructionSite#owner}
     *
     * @type {{username: ""}}
     */
    owner:
    {
        username: ""
    },

    /**
     * The current construction progress.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016342-ConstructionSite#progress}
     *
     * @type {number}
     */
    progress: 0,

    /**
     * The total construction progress needed for the structure to be built.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016342-ConstructionSite#progressTotal}
     *
     * @type {number}
     */
    progressTotal: 0,

    /**
     * One of the STRUCTURE_* constants.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016342-ConstructionSite#structureType}
     *
     * @type {string}
     */
    structureType: "",

    /**
     * Remove the construction site.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016342-ConstructionSite#remove}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    remove: function() { }
};

/**
 * A flag.
 * Flags can be used to mark particular spots in a room.
 * Flags are visible to their owners only.
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/203079181-Flag}
 *
 * @class
 * @extends {RoomObject}
 */
Flag = function() { };

Flag.prototype =
{
    /**
     * Flag primary color. One of the COLOR_* constants.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079181-Flag#color}
     *
     * @type {number}
     */
    color: "",

    /**
     * A shorthand to Memory.flags[flag.name].
     * You can use it for quick access the flag's specific memory data object.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079181-Flag#memory}
     *
     * @type {*}
     */
    memory: {},

    /**
     * Flag’s name.
     * You can choose the name while creating a new flag, and it cannot be changed later.
     * This name is a hash key to access the spawn via the Game.flags object.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079181-Flag#name}
     *
     * @type {string}
     */
    name: "",

    /**
     * Flag secondary color. One of the COLOR_* constants.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079181-Flag#secondaryColor}
     *
     * @type {number}
     */
    secondaryColor: "",

    /**
     * Remove the flag.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079181-Flag#remove}
     *
     * @type {function}
     *
     * @return {number|OK}
     */
    remove: function() { },

    /**
     * Set new color of the flag.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079181-Flag#setColor}
     *
     * @type {function}
     *
     * @param {string} color Primary color of the flag. One of the COLOR_* constants.
     * @param {string|undefined|null} [secondaryColor] Secondary color of the flag. One of the COLOR_* constants.
     *
     * @return {number|OK|ERR_INVALID_ARGS}
     */
    setColor: function(color, secondaryColor) { },

    /**
     * Set new position of the flag.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079181-Flag#setPosition}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x The X position in the room.
     * @param {number} [y] The Y position in the room.
     *
     * @note Alternative function: setPosition(pos)
     * @param {object} pos Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number|OK|ERR_INVALID_TARGET}
     */
    setPosition: function(x, y) { }
};

/**
 * The main global game object containing all the gameplay information.
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game}
 *
 * @class
 */
Game = {
    /**
     * A hash containing all your construction sites with their id as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#constructionSites}
     * @type {Array<string, ConstructionSite>}
     */
    constructionSites: {},

    /**
     * An object containing information about your CPU usage
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#cpu}
     */
    cpu: {
        /**
         * Your CPU limit depending on your Global Control Level.
         *
         * @type {number}
         */
        limit: 0,

        /**
         * An amount of available CPU time at the current game tick.
         * It can be higher than Game.cpu.limit.
         *
         * @type {number}
         */
        tickLimit: 0,

        /**
         * An amount of unused CPU accumulated in your bucket.
         *
         * @type {number}
         */
        bucket: 0,

        /**
         * An object with limits for each shard with shard names as keys. You can use setShardLimits method to re-assign them.
         *
         * @type {object<string,number>}
         */
        shardLimits: {},

        /**
         * This method is only available when Virtual machine is set to Isolated in your account runtime settings.
         * Use this method to get heap statistics for your virtual machine. The return value is almost identical to the Node.js function v8.getHeapStatistics().
         * This function returns one additional property: externally_allocated_size which is the total amount of currently allocated memory which is not included in the v8 heap but counts against this isolate's memory limit.
         * ArrayBuffer instances over a certain size are externally allocated and will be counted here.
         *
         * @return {object} Returns an objects with heap statistics in the following format:
         * {
               "total_heap_size": 29085696,
               "total_heap_size_executable": 3670016,
               "total_physical_size": 26447928,
               "total_available_size": 319649520,
               "used_heap_size": 17493824,
               "heap_size_limit": 343932928,
               "malloced_memory": 8192,
               "peak_malloced_memory": 1060096,
               "does_zap_garbage": 0,
               "externally_allocated_size": 38430000
           }
         */
        getHeapStatistics: function() {},

        /**
         * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
         *
         * @return {number} Returns the currently used CPU time as a float number
         */
        getUsed: function () {},

        /**
         * This method is only available when Virtual machine is set to Isolated in your account runtime settings.
         * Reset your runtime environment and wipe all data in heap memory.
         */
        halt: function() {},

        /**
         * Allocate CPU limits to different shards. Total amount of CPU should remain equal to Game.cpu.shardLimits. This method can be used only once per 12 hours.
         * @param {object<string, number>} limits An object with CPU values for each shard in the same format as Game.cpu.shardLimits.
         *
         * @return {OK|ERR_BUSY|ERR_INVALID_ARGS}
         */
        setShardLimits: function(limits) {},
    },


    /**
     * A hash containing all your creeps with creep names as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#creeps}
     * @type {object<string, Creep>}
     * @example
     * for(var i in Game.creeps) {
     *     Game.creeps[i].moveTo(flag);
     * }
     */
    creeps: {},


    /**
     * A hash containing all your power creeps with their names as hash keys. Even power creeps not spawned in the world can be accessed here.
     *
     * @see {@link https://docs.screeps.com/api/#Game.powerCreeps}
     * @type {object<string, PowerCreep>}
     * @example
     * for(var i in Game.powerCreeps) {
     *     Game.powerCreeps[i].moveTo(flag);
     * }
     */
    powerCreeps: {},

    /**
     * A hash containing all your flags with flag names as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#flags}
     * @type {object<string, Flag>}
     * @example
     * creep.moveTo(Game.flags.Flag1);
     */
    flags: {},

    /**
     * Your Global Control Level
     *
     * @see {@link http://docs.screeps.com/control.html}
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#gcl}
     */
    gcl: {
        /**
         * The current level.
         *
         * @type {number}
         */
        level: 0,

        /**
         * The current progress to the next level.
         *
         * @type {number}
         */
        progress: 0,

        /**
         * The progress required to reach the next level.
         *
         * @type {number}
         */
        progressTotal: 0
    },

    /**
     * Your Global Power Level, an object with the following properties :
     *
     * @see {@link http://docs.screeps.com/power.html}
     * @see {@link https://docs.screeps.com/api/#Game.gpl}
     */
    gpl: {
        /**
         * The current level.
         *
         * @type {number}
         */
        level: 0,

        /**
         * The current progress to the next level.
         *
         * @type {number}
         */
        progress: 0,

        /**
         * The progress required to reach the next level.
         *
         * @type {number}
         */
        progressTotal: 0
    },

    /**
     * A global object representing world map.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map}
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#map}
     */
    map: {
        /**
         * List all exits available from the room with the given name.
         *
         * @param {string} roomName The room name.
         *
         * @return {null|object} The exits information in the following format, or null if the room not found.
           {
               "1": "W8N4",    // TOP
               "3": "W7N3",    // RIGHT
               "5": "W8N2",    // BOTTOM
               "7": "W9N3"     // LEFT
           }
         *
         * @type {function}
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#describeExits}
         * @example
         * var exits = Game.map.describeExits('W8N3');
         */
        describeExits: function (roomName) {},

        /**
         * Find the exit direction from the given room en route to another room.
         *
         * @param {string|Room} fromRoom Start room name or room object.
         * @param {string|Room} toRoom Finish room name or room object.
         * @param {object} [opts] An object with the pathfinding options. See findRoute.
         *
         * @return {number|FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|ERR_NO_PATH|ERR_INVALID_ARGS}
         * @type {function}
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#findExit}
         */
        findExit: function (fromRoom, toRoom, opts) {},

        /**
         * Find route from the given room to another room.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#findRoute}
         *
         * @type {function}
         *
         * @param {string|Room} fromRoom Start room name or room object.
         * @param {string|Room} toRoom Finish room name or room object.
         * @param {object} [opts] An object with the pathfinding options.
         * @param {function} [opts.routeCallback] This callback accepts two arguments: function(roomName, fromRoomName). It can be used to calculate the cost of entering that room. You can use this to do things like prioritize your own rooms, or avoid some rooms. You can return a floating point cost or Infinity to block the room.
         *
         * @return {Array|number|ERR_NO_PATH} The route array in the following format:
            [
                { exit: FIND_EXIT_RIGHT, room: 'arena21' },
                { exit: FIND_EXIT_BOTTOM, room: 'arena22' }
            ]
         */
        findRoute: function (fromRoom, toRoom, opts) {},

        /**
         * Get the linear distance (in rooms) between two rooms.
         * You can use this function to estimate the energy cost of sending resources through terminals, or using observers and nukes.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#getRoomLinearDistance}
         *
         * @type {function}
         *
         * @param {string} roomName1 The name of the first room.
         * @param {string} roomName2 The name of the second room.
         * @param {boolean} [continuous] Whether to treat the world map continuous on borders. Set to true if you want to calculate the trade or terminal send cost. Default is false.
         *
         * @return {number} A number of rooms between the given two rooms.
         */
        getRoomLinearDistance: function (roomName1, roomName2, continuous) {},

        /**
         * Get a Room.Terrain object which provides fast access to static terrain data. This method works for any room in the world even if you have no access to it.
         *
         * @see {@link https://docs.screeps.com/api/#Game.map.getRoomTerrain}
         *
         * @type {function}
         *
         * @param {string} roomName The room name.
         *
         * @return {Room.Terrain} Returns new Room.Terrain object.
         */
        getRoomTerrain: function(roomName) {},

        /**
         * Get terrain type at the specified room position.
         * This method works for any room in the world even if you have no access to it.
         *
         * @deprecated use Game.map.getRoomTerrain instead.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#getTerrainAt}
         *
         * @type {function}
         *
         * @param {number|RoomPosition} x X position in the room.
         * @param {number} [y] Y position in the room.
         * @param {string} [roomName] The room name.
         *
         * @note Alternative function: getTerrainAt(pos)
         * @param {RoomPosition} pos The position object.
         *
         * @return {"plain"|"swamp"|"wall"}
         */
        getTerrainAt: function (x, y, roomName) {},

        /**
         * Check if the room with the given name is available to move into
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#isRoomAvailable}
         *
         * @type {function}
         *
         * @param {string} roomName The room name.
         *
         * @return {boolean}
         */
        isRoomAvailable: function (roomName) {}
    },

    /**
     * A global object representing the in-game market.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#market}
     * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market}
     * @see {@link http://docs.screeps.com/market.html}
     */
    market: {
        /**
         * Your current credits balance.
         *
         * @type {number}
         */
        credits: 0,

        /**
         * An array of the last 100 incoming transactions to your terminals with the following format:
         [{
            transactionId : "56dec546a180ce641dd65960",
            time : 10390687,
            sender : {username: "Sender"},
            recipient : {username: "Me"},
            resourceType : "U",
            amount : 100,
            from : "W0N0",
            to : "W10N10",
            description : "trade contract #1",
            order: {        // optional
                id : "55c34a6b5be41a0a6e80c68b",
                type : "sell",
                price : 2.95
            }
        }]
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#incomingTransactions}
         *
         * @type {Array}
         */
        incomingTransactions: [],

        /**
         * An array of the last 100 outgoing transactions from your terminals with the following format:
         [{
            transactionId : "56dec546a180ce641dd65960",
            time : 10390687,
            sender : {username: "Me"},
            recipient : {username: "Recipient"},
            resourceType : "U",
            amount : 100,
            from : "W0N0",
            to : "W10N10",
            description : "trade contract #1",
            order: {        // optional
                id : "55c34a6b5be41a0a6e80c68b",
                type : "sell",
                price : 2.95
            }
         }]
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#outgoingTransactions}
         *
         * @type {Array}
         */
        outgoingTransactions: [],

        /**
         *An object with your active and inactive buy/sell orders on the market.
         * {
                "55c34a6b5be41a0a6e80c68b": {
                    id : "55c34a6b5be41a0a6e80c68b",
                    created : 13131117,
                    active: true,
                    type : "sell"
                    resourceType : "OH",
                    roomName : "W1N1",
                    amount : 15821,
                    remainingAmount : 30000,
                    totalAmount : 50000,
                    price : 2.95
                },
                "55c34a6b52411a0a6e80693a": {
                    id : "55c34a6b52411a0a6e80693a",
                    created : 13134122,
                    active: true,
                    type : "buy"
                    resourceType : "energy",
                    roomName : "W1N1",
                    amount : 94000,
                    remainingAmount : 94000,
                    totalAmount : 94000
                    price : 0.45
                },
                "55c34a6b5be41a0a6e80c123": {
                    id : "55c34a6b5be41a0a6e80c123",
                    created : 13105123,
                    active: false,
                    type : "sell"
                    resourceType : "token",
                    amount : 0,
                    remainingAmount : 10,
                    totalAmount : 10,
                    price : 50000
                }
            }
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#orders}
         *
         * @type {Array<string,Order>}
         */
        orders: [],

        /**
         * Estimate the energy transaction cost of StructureTerminal.send and Market.deal methods.
         * The formula: Math.ceil( amount * ( Math.log( 0.1 * linearDistanceBetweenRooms + 0.9) + 0.1) )
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#calcTransactionCost}
         *
         * @type {function}
         *
         * @param {number} amount Amount of resources to be sent.
         * @param {string} roomName1 The name of the first room.
         * @param {string} roomName2 The name of the second room.
         *
         * @return {number} The amount of energy required to perform the transaction.
         */
        calcTransactionCost: function (amount, roomName1, roomName2) {
        },

        /**
         * This method is still under development.
         * Cancel a previously created order.
         * If a buy order provided, then the reserved credits amount will be refunded in full.
         * The 5% fee is not returned.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#cancelOrder}
         *
         * @type {function}
         *
         * @param {string} orderId The order ID as provided in Game.market.myOrders.
         *
         * @return {number|OK|ERR_INVALID_ARGS}
         */
        cancelOrder: function (orderId) {
        },

        /**
         * Change the price of an existing order.
         * If newPrice is greater than old price, you will be charged (newPrice-oldPrice) * remainingAmount * 0.05 credits.
         *
         * @param {string} orderId The order ID as provided in Game.market.orders.
         * @param {number} newPrice The new order price.
         * @return {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
         */
        changeOrderPrice: function (orderId, newPrice) {
        },

        /**
         * Create a market order in your terminal.
         * You will be charged price * amount * 0.05 credits when the order is placed.
         * The maximum orders count is 50 per player.
         * You can create an order at any time with any amount, it will be automatically activated and deactivated depending on the resource/credits availability.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#createBuyOrder}
         *
         * @type {function}
         *
         * @param {string|ORDER_SELL|ORDER_BUY} type The order type, either ORDER_SELL or ORDER_BUY.
         * @param {string} resourceType Either one of the RESOURCE_* constants or SUBSCRIPTION_TOKEN.
         * @param {number} price The price for one resource unit in credits. Can be a decimal number.
         * @param {number} totalAmount The amount of resources to be traded in total.
         * @param {string} [roomName] The room where your order will be created. You must have your own Terminal structure in this room, otherwise the created order will be temporary inactive. This argument is not used when resourceType equals to GAMETIME_TOKEN.
         *
         * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_FULL|ERR_INVALID_ARGS}
         */
        createOrder: function (type, resourceType, price, totalAmount, roomName) {
        },

        /**
         * Execute a trade deal from your Terminal in yourRoomName to another player's Terminal using the specified buy/sell order.
         * Your Terminal will be charged energy units of transfer cost regardless of the order resource type.
         * You can use Game.market.calcTransactionCost method to estimate it.
         * When multiple players try to execute the same deal, the one with the shortest distance takes precedence.
         * You cannot execute more than 10 deals during one tick.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#deal}
         *
         * @type {function}
         *
         * @param {string} orderId The order ID as provided in Game.market.getAllOrders
         * @param {number} amount The amount of resources to transfer.
         * @param {string} [yourRoomName] The name of your room which has to contain an active Terminal with enough amount of energy. This argument is not used when the order resource type equals to SUBSCRIPTION_TOKEN.
         *
         * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_FULL|ERR_INVALID_ARGS}
         */
        deal: function (orderId, amount, yourRoomName) {
        },

        /**
         * This method is still under development.
         * Add more capacity to an existing order. It will affect remainingAmount and totalAmount properties. You will
         * be charged price*addAmount*0.05 credits.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#extendOrder}
         *
         * @type {function}
         *
         * @param {string} orderId The order ID as provided in Game.market.orders.
         * @param {number} addAmount How much capacity to add. Cannot be a negative value.
         *
         * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
         */
        extendOrder: function (orderId, addAmount) {
        },

        /**
         * This method is still under development.
         * Get other players' orders currently active on the market.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#getAllOrders}
         *
         * @type {function}
         *
         * @param {object|function} [filter] An object or function that will filter the resulting list using the lodash.filter method.
         *
         * @return {Array<Order>} An array of Orders
         */
        getAllOrders: function (filter) {
        },

        /**
         * This method is still under development.
         * Retrieve info for specific market order.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#getOrderById}
         *
         * @type {function}
         *
         * @param {string} id The order ID
         *
         * @return {Order} An order
         */
        getOrderById: function (id) {
        }
    },

    /**
     * An object with your global resources that are bound to the account, like subscription tokens.
     * Each object key is a resource constant, values are resources amounts.
     *
     * @type {Array<string>}
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#resources}
     */
    resources: {},

    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#rooms}
     *
     * @type {Array<string, Room>}
     */
    rooms: {},

    /**
     * An object describing the world shard where your script is currently being executed in.
     *
     * @return {object} name - The name of the shard; type - Currently always equals to normal; ptr - Wether this shard belongs to the PTR.
     */
    shard: {},

    /**
     * A hash containing all your spawns with spawn names as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#spawns}
     *
     * @type {Array<string, StructureSpawn>}
     */
    spawns: {},

    /**
     * A hash containing all your structures with structure id as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#structures}
     *
     * @type {Array<string, Structure>}
     */
    structures: {},

    /**
     * System game tick counter. It is automatically incremented on every tick.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#time}
     *
     * @type {number}
     */
    time: 0,

    /**
     * Get an object with the specified unique ID.
     * It may be a game object of any type.
     * Only objects from the rooms which are visible to you can be accessed.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#getObjectById}
     *
     * @type {function}
     *
     * @param {string} id The unique identificator.
     *
     * @return {object|null}
     */
    getObjectById: function (id) {
    },

    /**
     * Send a custom message at your profile email.
     * This way, you can set up notifications to yourself on any occasion within the game.
     * You can schedule up to 20 notifications during one game tick.
     * Not available in the Simulation Room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#notify}
     *
     * @param {string} message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param {number} [groupInterval] If set to 0 (default), the notification will be scheduled immediately. Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     *
     * @return {void}
     */
    notify: function (message, groupInterval) {
    }
};

/**
 * Memory - Used to store arbitrary memory entries in arbitrary keys.
 * @type {Object<string, any>}
 */
Memory = {};

/**
 * A mineral deposit.
 * Can be harvested by creeps with a WORK body part using the extractor structure.
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207218579-Mineral}
 */
Mineral = function() { };

Mineral.prototype =
{
    /**
     * The remaining amount of resources.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207218579-Mineral#mineralAmount}
     *
     * @type {number}
     */
    mineralAmount: 0,

    /**
     * The resource type, one of the RESOURCE_* constants.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207218579-Mineral#mineralType}
     *
     * @type {string}
     */
    mineralType: "",

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207218579-Mineral#id}
     *
     * @type {string}
     */
    id: "",

    /**
     * The remaining time after which the deposit will be refilled.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207218579-Mineral#ticksToRegeneration}
     *
     * @type {number}
     */
    ticksToRegeneration: 0
};

/**
 * A nuke landing position.
 * This object cannot be removed or modified.
 * You can find incoming nukes in the room using the FIND_NUKES constant.
 * @class
 * @extends {RoomObject}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208488525-Nuke}
 */
Nuke = function() { };

Nuke.prototype =
{
    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208488525-Nuke#id}
     *
     * @type {string}
     */
    id: "",

    /**
     * The name of the room where this nuke has been launched from.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208488525-Nuke#launchRoomName}
     *
     * @type {string}
     */
    launchRoomName: "",

    /**
     * The remaining landing time.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208488525-Nuke#timeToLand}
     *
     * @type {number}
     */
    timeToLand: 0
};

Order = {
    /**
     * The unique order ID.
     *
     * @type {string}
     */
    id: "",

    /**
     * The order creation time in game ticks.
     *
     * @type {number}
     */
    created: 0,

    /**
     * Whether this order is active and visible to other players. An order can become non-active when the terminal doesn't have enough resources to sell or you are out of credits to buy.Whether this order is active and visible to other players. An order can become non-active when the terminal doesn't have enough resources to sell or you are out of credits to buy.
     *
     * @type {boolean}
     */
    active: true,

    /**
     * Either ORDER_SELL or ORDER_BUY
     *
     * @type {ORDER_SELL|ORDER_BUY}
     */
    type: 'sell',

    /**
     * Either one of the RESOURCE_* constants or SUBSCRIPTION_TOKEN
     *
     * @type {string|SUBSCRIPTION_TOKEN}
     */
    resourceType: "",

    /**
     * The room where this order is placed.
     * @type {string}
     */
    roomName: "",

    /**
     * Currently available amount to trade.
     * @type {number}
     */
    amount: 0,

    /**
     * How many resources are left to trade via this order.
     * @type {number}
     */
    remainingAmount: 0,

    /**
     * Initial order amount.
     * @type {number}
     */
    totalAmount: 0,

    /**
     * Price
     * @type {number}
     */
    price: 0
};

/**
 * The base prototype for a structure that has an owner.
 * Such structures can be found using FIND_MY_STRUCTURES and FIND_HOSTILE_STRUCTURES constants.
 *
 * @class
 * @extends {Structure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207710979-OwnedStructure}
 */
OwnedStructure = function() { };

OwnedStructure.prototype =
{
    /**
     * Whether this is your own structure.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207710979-OwnedStructure#my}
     *
     * @type {boolean}
     */
    my: true,

    /**
     * An object with the structure’s owner info
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207710979-OwnedStructure#owner}
     *
     * @type {{username: string}}
     */
    owner:
    {
        username: ""
    }
};

/**
 *
 * @class
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207023879-PathFinder}
 */
PathFinder =
{
    /**
     * Find an optimal path between origin and goal.
     * @static
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207023879-PathFinder#search}
     *
     * @type {function}
     *
     * @param {RoomPosition} origin The start position.
     * @param {object} goal A goal or an array of goals. If more than one goal is supplied then the cheapest path found out of all the goals will be returned. A goal is either a RoomPosition or an object as defined below.
     Important: Please note that if your goal is not walkable (for instance, a source) then you should set range to at least 1 or else you will waste many CPU cycles searching for a target that you can't walk on.

     pos
     RoomPosition
     The target.
     range
     number
     Range to pos before goal is considered reached. The default is 0.
     * @param {object} [opts] An object containing additional pathfinding flags.
     * @param {function} [opts.roomCallback] Request from the pathfinder to generate a CostMatrix for a certain room. The callback accepts one argument, roomName. This callback will only be called once per room per search. If you are running multiple pathfinding operations in a single room and in a single tick you may consider caching your CostMatrix to speed up your code. Please read the CostMatrix documentation below for more information on CostMatrix. If you return false from the callback the requested room will not be searched, and it won't count against maxRooms
     * @param {number} [opts.plainCost] Cost for walking on plain positions. The default is 1.
     * @param {number} [opts.swampCost] Cost for walking on swamp positions. The default is 5.
     * @param {boolean} [opts.flee] Instead of searching for a path to the goals this will search for a path away from the goals. The cheapest path that is out of range of every goal will be returned. The default is false.
     * @param {number} [opts.maxOps] The maximum allowed pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     * @param {number} [opts.maxRooms] The maximum allowed rooms to search. The default is 16, maximum is 64.
     * @param {number} [opts.heuristicWeight] Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying A* algorithm mechanics! The default value is 1.2.
     *
     * @return {{path:Array<RoomPosition>,opts:number,cost:number,incomplete:boolean}} An object containing: path - An array of RoomPosition objects; ops - Total number of operations performed before this path was calculated; cost - The total cost of the path as derived from plainCost, swampCost and any given CostMatrix instances; incomplete - If the pathfinder fails to find a complete path, this will be true. Note that path will still be populated with a partial path which represents the closest path it could find given the search parameters.
     */
    search: function(origin, goal, opts) { },

    /**
     * Specify whether to use this new experimental pathfinder in game objects methods.
     * This method should be invoked every tick.
     * @static
     * @deprecated
     * @note It affects the following methods behavior: Room.findPath, RoomPosition.findPathTo, RoomPosition.findClosestByPath, Creep.moveTo.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207023879-PathFinder#use}
     *
     * @type {function}
     *
     * @param {boolean} isEnabled Whether to activate the new pathfinder or deactivate.
     */
    use: function(isEnabled) { }
};

/**
 * Creates a new CostMatrix containing 0's for all positions.
 *
 * @constructor
 * @class
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207023879-PathFinder#CostMatrix}
 */
PathFinder.CostMatrix = function() { };

/**
 * Static method which deserializes a new CostMatrix using the return value of serialize.
 * @static
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207023879-PathFinder#deserialize}
 *
 * @type {function}
 *
 * @param {object} val Whatever serialize returned
 *
 * @return {CostMatrix}
 */
PathFinder.CostMatrix.deserialize = function(val) { };


PathFinder.CostMatrix.prototype =
{
    /**
     * Set the cost of a position in this CostMatrix.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207023879-PathFinder#set}
     *
     * @type {function}
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     * @param {number} cost Cost of this position. Must be a whole number. A cost of 0 will use the terrain cost for that tile. A cost greater than or equal to 255 will be treated as unwalkable.
     */
    set: function(x, y, cost) { },

    /**
     * Get the cost of a position in this CostMatrix.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207023879-PathFinder#get}
     *
     * @type {function}
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     *
     * @return {number}
     */
    get: function(x, y) { },

    /**
     * Copy this CostMatrix into a new CostMatrix with the same data.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207023879-PathFinder#clone}
     *
     * @type {function}
     *
     * @return {CostMatrix}
     */
    clone: function() { },

    /**
     * Returns a compact representation of this CostMatrix which can be stored via JSON.stringify
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207023879-PathFinder#serialize}
     *
     * @type {function}
     *
     * @return {Array<number>} An array of numbers. There's not much you can do with the numbers besides store them for later.
     */
    serialize: function() { }
};

/**
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link https://docs.screeps.com/power.html#Power-Creeps}
 */
PowerCreep = function() { };

PowerCreep.prototype =
{


    /**
     * A static method to create new Power Creep instance in your account. 
     * It will be added in an unspawned state, use spawn method to spawn it in the world.
     * You need one free Power Level in your account to perform this action.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.PowerCreep-create}
     *
     * @type {function}
     *
     * @param {string} The name of the new power creep.
     *
     * @param {string} The class of the new power creep, one of the POWER_CLASS constants.
     *
     * @return {number|OK|ERR_NAME_EXISTS|ERR_NOT_ENOUGH_RESOURCES}
     */
    create: function(name, className) { },
    
    /**
     * An object with the PowerCreep's cargo contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(creep.carry) to get the total amount of contents.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.carry}
     *
     * @type {object<string, number>}
     */
    carry: {},

    /**
     * The total amount of resources the PowerCreep can carry.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.carryCapacity}
     *
     * @type {number}
     */
    carryCapacity: 0,

    /**
     * The power creep's class, one of the POWER_CLASS constants.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.className}
     *
     * @type {string}
     */
    className: "",


    /**
     * A timestamp when this creep is marked to be permanently deleted from the account, or undefined otherwise.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.deleteTime}
     *
     * @type {number}
     */
    deleteTime: 0,

    /**
     * The current amount of hit points of the PowerCreep.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.hits}
     *
     * @type {number}
     */
    hits: 0,

    /**
     * The maximum amount of hit points of the PowerCreep.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.hitsMax}
     *
     * @type {number}
     */
    hitsMax: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.id}
     *
     * @type {string}
     */
    id: "",

    /**
     * The PowerCreep's level.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.level}
     *
     * @type {number}
     */
    level: 0,

    /**
     * A shorthand to Memory.creeps[creep.name].
     * You can use it for quick access the creep’s specific memory data object.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.memory}
     *
     * @type {*}
     */
    memory: {},

    /**
     * Whether it is your creep or foe.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.my}
     *
     * @type {boolean}
     */
    my: true,

    /**
     * Creep’s name.
     * You can choose the name while creating a new creep, and it cannot be changed later.
     * This name is a hash key to access the creep via the Game.creeps object.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.name}
     *
     * @type {string}
     */
    name: "",

    /**
     * The text message that the creep was saying at the last tick.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.saying}
     *
     * @type {string}
     */
    saying: "",

    /**
     * An object with the creep’s owner info
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.owner}
     *
     * @type {{username:string}}
     */
    owner:
    {
        username: ""
    },

    /**
     * Available powers, an object with power ID as a key, and the following properties:
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.powers}
     *
     * @type {object}
     */
    powers:
    {
        level: "",
        cooldown: ""
    },

    /**
     * The name of the shard where the power creep is spawned, or undefined.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.shard}
     *
     * @type {string}
     */
    shard: "",

    /**
     * The timestamp when spawning or deleting this creep will become available. Undefined if the power creep is spawned in the world.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.spawnCooldownTime}
     *
     * @type {number}
     */
    spawnCooldownTime: 0,

    /**
     * TheThe remaining amount of game ticks after which the creep will die and become unspawned. Undefined if the creep is not spawned in the world.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.ticksToLive}
     *
     * @type {number}
     */
    ticksToLive: 0,

    /**
     * Cancel the order given during the current game tick.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.cancelOrder}
     *
     * @type {function}
     *
     * @param {string} methodName The name of a creep's method to be cancelled.
     *
     * @return {number|OK|ERR_NOT_FOUND}
     */
    cancelOrder: function(methodName) { },

    /**
     * Delete the power creep permanently from your account. It should NOT be spawned in the world. 
     * The creep is not deleted immediately, but a 24-hours delete timer is started instead (see deleteTime). 
     * You can cancel deletion by calling delete(true).
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.delete}
     *
     * @type {function}
     *
     * @param {boolean} Set this to true to cancel previously scheduled deletion.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    delete: function([cancel]) { },

    /**
     * Drop this resource on the ground.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.drop}
     *
     * @type {function}
     *
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES}
     */
    drop: function(resourceType, amount) { },

    /**
     * Enable powers usage in this room. The room controller should be at adjacent tile.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.enableRoom}
     *
     * @type {function}
     *
     * @param {StructureController} The room controller.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    enableRoom: function(controller) { },

    /**
     * Move the creep one square in the specified direction.
     * Requires the MOVE body part.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.move}
     *
     * @type {function}
     *
     * @param {number} direction One of the following constants: TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_TIRED|ERR_NO_BODYPART}
     */
    move: function(direction) { },

    /**
     * Move the creep using the specified predefined path.
     * Requires the MOVE body part.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.moveByPath}
     *
     * @type {function}
     *
     * @param {Array|string} path A path value as returned from Room.findPath or RoomPosition.findPathTo methods. Both array form and serialized string form are accepted.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_FOUND|ERR_INVALID_ARGS|ERR_TIRED|ERR_NO_BODYPART}
     */
    moveByPath: function(path) { },

    /**
     * Find the optimal path to the target within the same room and move to it.
     * A shorthand to consequent calls of pos.findPathTo() and move() methods.
     * If the target is in another room, then the corresponding exit will be used as a target.
     * Requires the MOVE body part.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.moveTo}
     *
     * @type {function}
     *
     * @param {number} x X position of the target in the same room.
     * @param {number} [y] Y position of the target in the same room.
     * @param {object} [opts] An object containing additional options
     * @param {number} [opts.reusePath] This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly slower creep reaction behavior. The path is stored into the creep's memory to the _move property. The reusePath value defines the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease to make the movement more consistent. Set to 0 if you want to disable path reusing.
     * @param {boolean} [opts.serializeMemory] If reusePath is enabled and this option is set to true, the path will be stored in memory in the short serialized form using Room.serializePath. The default value is true.
     * @param {boolean} [opts.noPathFinding] If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse. This can significantly save CPU time in some cases. The default value is false.
     * @note opts also supports any method from the Room.findPath options.
     *
     * @alias moveTo(target, [opts])
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_TIRED|ERR_NO_BODYPART|ERR_INVALID_TARGET|ERR_NO_PATH}
     */
    moveTo: function(x, y, opts) { },

    /**
     * Toggle auto notification when the creep is under attack.
     * The notification will be sent to your account email.
     * Turned on by default.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.notifyWhenAttacked}
     *
     * @type {function}
     *
     * @param {boolean} enabled Whether to enable notification or disable.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function(enabled) { },

    /**
     * Pick up an item (a dropped piece of energy).
     * Requires the CARRY body part.
     * The target has to be at adjacent square to the creep or at the same square.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.pickup}
     *
     * @type {function}
     *
     * @param {Resource} target The target object to be picked up.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    pickup: function(target) { },

    /**
     * Rename the power creep. It must not be spawned in the world.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.rename}
     *
     * @type {function}
     *
     * @param {string} The new name of the power creep.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY}
     */
    rename: function(name) { },

    /**
     * Instantly restore time to live to the maximum using a Power Spawn or a Power Bank nearby. It has to be at adjacent tile.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.renew}
     *
     * @type {function}
     *
     * @param {StructurePowerBank|StructurePowerSpawn} The target structure.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    renew: function(target) { },

    /**
     * Display a visual speech balloon above the creep with the specified message. The message will be
     * available for one tick. You can read the last message using the saying property.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.say}
     *
     * @type {function}
     *
     * @param {string} message The message to be displayed. Maximum length is 10 characters.
     * @param {boolean} [public] Set to true to allow other players to see this message. Default is false.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    say: function(message, public) { },
    
    /**
     * Sign a controller with an arbitrary text visible to all players. 
     * This text will appear in the room UI, in the world map, and can be accessed via the API. 
     * You can sign unowned and hostile controllers. The target has to be at adjacent square to the creep. 
     * Pass an empty string to remove the sign.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.spawn}
     *
     * @type {function}
     *
     * @param {StructurePowerSpawn} Your Power Spawn structure.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_TIRED|ERR_RCL_NOT_ENOUGH}
     */
    spawn: function(powerSpawn) { },

    /**
     * Kill the creep immediately.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.suicide}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    suicide: function() { },

    /**
     * Transfer resource from the creep to another object.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.transfer}
     *
     * @type {function}
     *
     * @param {Creep|Spawn|Structure} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { },

    /**
     * Upgrade the creep, adding a new power ability to it or increasing level of the existing power. 
     * You need one free Power Level in your account to perform this action.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.upgrade}
     *
     * @type {function}
     *
     * @param {number} The power ability to upgrade, one of the PWR_* constants.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_FULL|ERR_INVALID_ARGS}
     */
    upgrade: function(power) { },

    /**
     * Apply one the creep's powers on the specified target. 
     * You can only use powers in rooms either without a controller, or with a power-enabled controller. 
     * Only one power can be used during the same tick, each usePower call will override the previous one. 
     * If the target has the same effect of a lower or equal level, it is overridden. 
     * If the existing effect level is higher, an error is returned.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.usePower}
     *
     * @type {function}
     *
     * @param {number} The power ability to use, one of the PWR_* constants.
     * @param {RoomObject} A target object in the room.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED|ERR_NO_BODYPART}
     */
    usePower: function(power, [target]) { },

    /**
     * Withdraw resources from a structure.
     * The target has to be at adjacent square to the creep.
     * Multiple creeps can withdraw from the same structure in the same tick.
     * Your creeps can withdraw resources from hostile structures as well, in case if there is no hostile rampart on top of it.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.withdraw}
     *
     * @type {function}
     *
     * @param {Structure} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    withdraw: function(target, resourceType, amount) { }
};

/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 *
 * @class
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/205619121-RawMemory}
 */
RawMemory = {
    /**
     * An object with asynchronous memory segments available on this tick.
     * Each object key is the segment ID with data in string values.
     * Use setActiveSegments to fetch segments on the next tick.
     * Segments data is saved automatically in the end of the tick.
     * The maximum size per segment is 100 KB.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.segments}
     *
     * @type {object<string,string>}
     */
    segments: {},

    /**
     * An object with a memory segment of another player available on this tick.
     * Use setActiveForeignSegment to fetch segments on the next tick.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.foreignSegment}
     *
     * @type {object<string,object>}
     */
    foreignSegment: {},

    /**
     * A string with a shared memory segment available on every world shard. Maximum string length is 100 KB.
     *
     * Warning: this segment is not safe for concurrent usage!
     * All shards have shared access to the same instance of data.
     * When the segment contents is changed by two shards simultaneously,
     * you may lose some data, since the segment string value is written all at once atomically.
     * You must implement your own system to determine when each shard is allowed to rewrite the inter-shard memory, e.g. based on mutual exclusions.
     *
     * @deprecated use InterShardMemory instead.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.interShardSegment}
     *
     * @type {string}
     */
    interShardSegment: "",

    /**
     * Get a raw string representation of the Memory object.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205619121-RawMemory#get}
     *
     * @type {function}
     *
     * @return {string}
     */
    get: function() { },

    /**
     * Set new memory value.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205619121-RawMemory#set}
     *
     * @type {function}
     *
     * @param {string} value
     *
     * @return {void}
     */
    set: function(value) { },

    /**
     * Request memory segments using the list of their IDs.
     * Memory segments will become available on the next tick in segments object.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.setActiveSegments}
     *
     * @type {function}
     *
     * @param {array} ids An array of segment IDs.
     *                    Each ID should be a number from 0 to 99.
     *                    Maximum 10 segments can be active at the same time.
     *                    Subsequent calls of setActiveSegments override previous ones.
     *
     * @return {void}
     */
    setActiveSegments: function(ids) { },

    /**
     * Request a memory segment of another user.
     * The segment should be marked by its owner as public using setPublicSegments.
     * The segment data will become available on the next tick in foreignSegment object.
     * You can only have access to one foreign segment at the same time.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.setActiveForeignSegment}
     *
     * @type {function}
     *
     * @param {string|null} username The name of another user. Pass null to clear the foreign segment.
     * @param {number} [id] The ID of the requested segment from 0 to 99.
     *                      If undefined, the user's default public segment is requested as set by setDefaultPublicSegment.
     *
     * @return {void}
     */
    setActiveForeignSegment: function(username, id) { },

    /**
     * Set the specified segment as your default public segment.
     * It will be returned if no id parameter is passed to setActiveForeignSegment by another user.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.setDefaultPublicSegment}
     *
     * @type {function}
     *
     * @param {number|null} id The ID of the memory segment from 0 to 99. Pass null to remove your default public segment.
     *
     * @return {void}
     */
    setDefaultPublicSegment: function(id) { },

    /**
     * Set specified segments as public.
     * Other users will be able to request access to them using setActiveForeignSegment.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.setPublicSegments}
     *
     * @type {function}
     *
     * @param {array<number>} ids An array of segment IDs. Each ID should be a number from 0 to 99. Subsequent calls of setPublicSegments override previous ones.
     *
     * @return {void}
     */
    setPublicSegments: function(ids) { },
};

/**
 * A dropped piece of resource.
 * It will decay after a while if not picked up.
 * Dropped resource pile decays for ceil(amount/1000) units per tick.
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/203016362-Resource}
 */
Resource = function() { };

Resource.prototype =
{
    /**
     * The amount of resource units containing.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016362-Resource#amount}
     *
     * @type {number}
     */
    amount: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016362-Resource#id}
     *
     * @type {string}
     */
    id: "",

    /**
     * One of the RESOURCE_* constants.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016362-Resource#resourceType}
     *
     * @type {string}
     */
    resourceType: ""
};

/**
 * An object representing the room in which your units and structures are in.
 * It can be used to look around, find paths, etc.
 * Every object in the room contains its linked Room instance in the room property.
 *
 * @class
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room}
 */
Room = {
    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#serializePath}
     *
     * @type {function}
     *
     * @param {Array} path A path array retrieved from Room.findPath.
     *
     * @return {string} A serialized string form of the given path.
     */
    serializePath: function(path) { },

    /**
     * Deserialize a short string path representation into an array form.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#deserializePath}
     *
     * @type {function}
     *
     * @param {string} path A serialized path string.
     *
     * return {Array} A path array.
     */
    deserializePath: function(path) { },
};

Room.prototype =
{
    /**
     * The Controller structure of this room, if present, otherwise undefined.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#controller}
     *
     * @type {undefined|StructureController}
     */
    controller: null,

    /**
     * Total amount of energy available in all spawns and extensions in the room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#energyAvailable}
     *
     * @type {number}
     */
    energyAvailable: 0,

    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#energyCapacityAvailable}
     *
     * @type {number}
     */
    energyCapacityAvailable: 0,

    /**
     * A shorthand to Memory.rooms[room.name].
     * You can use it for quick access the room’s specific memory data object.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#memory}
     *
     * @type {*}
     */
    memory: {},

    /**
     * The mode of the room
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#mode}
     *
     * @type {string|MODE_SIMULATION|MODE_SURVIVAL|MODE_WORLD|MODE_ARENA}
     */
    mode: "",

    /**
     * The name of the room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#name}
     *
     * @type {string}
     */
    name: "",

    /**
     * The Storage structure of this room, if present, otherwise undefined.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#storage}
     *
     * @type {undefined|StructureStorage}
     */
    storage: null,

    /**
     * The Terminal structure of this room, if present, otherwise undefined.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#terminal}
     *
     * @type {undefined|StructureTerminal}
     */
    terminal: null,

    /**
     * A RoomVisual object for this room. You can use this object to draw simple shapes (lines, circles, text labels) in the room.
     * @see {@link http://docs.screeps.com/api/#Room.visual}
     *
     * @type {RoomVisual}
     */
    visual: null,

    /**
     * Create new ConstructionSite at the specified location.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#createConstructionSite}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x The X position.
     * @param {number|string} [y] The Y position.
     * @param {string} [structureType] One of the STRUCTURE_* constants.
     *
     * @note Alternative function: createConstructionSite(pos, structureType)
     * @param {object} pos Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number|OK|ERR_INVALID_TARGET|ERR_FULL|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createConstructionSite: function(x, y, structureType) { },

    /**
     * Create new Flag at the specified location.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#createFlag}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x The X position.
     * @param {number|string} y The Y position.
     * @param {string|string} [name] The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param {string} [color] The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param {string} [secondaryColor] The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     *
     * @note Alternative function: createConstructionSite(pos, name, color, secondaryColor)
     * @param {object} pos Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number|ERR_NAME_EXISTS|ERR_INVALID_ARGS}
     */
    createFlag: function(x, y, name, color, secondaryColor) { },

    /**
     * Find all objects of the specified type in the room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#find}
     *
     * @type {function}
     *
     * @param {number} type One of the FIND_* constants.
     * @param {object} [opts] An object with additional options
     * @param {object|function|string} [opts.filter] The result list will be filtered using the Lodash.filter method.
     *
     * @return {Array} An array with the objects found.
     */
    find: function(type, opts) { },

    /**
     * Find the exit direction en route to another room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#findExitTo}
     *
     * @type {function}
     *
     * @param {string|Room} room Another room name or room object.
     *
     * @return {FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|number|ERR_NO_PATH|ERR_INVALID_ARGS}
     */
    findExitTo: function(room) { },

    /**
     * Find an optimal path inside the room between fromPos and toPos using A* search algorithm.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#findPath}
     *
     * @type {function}
     *
     * @param {RoomPosition} fromPos The start position.
     * @param {RoomPosition} toPos The end position.
     * @param {object} [opts] An object containing additonal pathfinding flags
     * @param {boolean} [opts.ignoreCreeps] Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default value is false.
     * @param {boolean} [opts.ignoreDestructibleStructures] Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square, it automatically attacks the structure. The default value is false.
     * @param {boolean} [opts.ignoreRoads] Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the new PathFinder is enabled.
     * @param {function(string, CostMatrix)} [opts.costCallback] You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback, it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
     * @param {Array} [opts.ignore] An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {Array} [opts.avoid] An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {number} [opts.maxOps] The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     * @param {number} [opts.heuristicWeight] Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying A* algorithm mechanics! The default value is 1.2.
     * @param {boolean} [opts.serialize] If true, the result path will be serialized using Room.serializePath. The default is false.
     * @param {number} [opts.maxRooms] The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     *
     * @return {Array} An array with path steps in the following format:
                         [
                             { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
                             { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
                             { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT },
                             ...
                         ]

     */
    findPath: function(fromPos, toPos, opts) { },

    /**
     * Returns an array of events happened on the previous tick in this room.
     *
     * @see {@link https://docs.screeps.com/api/#Room.getEventLog}
     *
     * @type {function}
     *
     * @param {raw} [raw] If this parameter is false or undefined, the method returns an object parsed using JSON.parse which incurs some CPU cost on the first access (the return value is cached on subsequent calls). If raw is truthy, then raw JSON in string format is returned.
     *
     * @return An array of events. Each event represents some game action in the following format:
                        {
                            event: EVENT_ATTACK,
                            objectId: '54bff72ab32a10f73a57d017',
                            data: { ... }
                        }
     */
    getEventLog: function(raw) { },

    /**
     * Creates a RoomPosition object at the specified location.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#getPositionAt}
     *
     * @type {function}
     *
     * @param {number} x The X position.
     * @param {number} y The Y position.
     *
     * @return {null|RoomPosition}
     */
    getPositionAt: function(x, y) { },

    /**
     * Get a Room.Terrain object which provides fast access to static terrain data. This method works for any room in the world even if you have no access to it.
     *
     * @see {@link https://docs.screeps.com/api/#Room.getTerrain}
     *
     * @type {function}
     *
     * @return {Room.Terrain} Returns new Room.Terrain object.
     */
    getTerrain: function() {},

    /**
     * Get the list of objects at the specified room position.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#lookAt}
     *
     * @type {function}
     *
     * @param {number} x X position in the room.
     * @param {number|RoomPosition|RoomObject} [y] Y position in the room.
     *
     * @note Alternative function: lookAt(target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {Array} An array with objects at the specified position in the following format:
                         [
                             { type: 'creep', creep: {...} },
                             { type: 'structure', structure: {...} },
                             ...
                             { type: 'terrain', terrain: 'swamp' }
                         ]
     */
    lookAt: function(x, y) { },

    /**
     * Get the list of objects at the specified room area.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#lookAtArea}
     *
     * @type {function}
     *
     * @param {number} top The top Y boundary of the area.
     * @param {number} left The left X boundary of the area.
     * @param {number} bottom The bottom Y boundary of the area.
     * @param {number} right The right X boundary of the area.
     * @param {boolean} [asArray] Set to true if you want to get the result as a plain array.
     *
     * @return {object} An object with all the objects in the specified area in the following format:
                        // 10,5,11,7
                         {
                            10 :
                            {
                                5 :
                                [
                                    {
                                        type : 'creep',
                                        creep :
                                        {
                                            ...
                                        }
                                    },
                                    {
                                        type : 'terrain',
                                        terrain : 'swamp'
                                    }
                                ],
                                6 :
                                [
                                    {
                                        type : 'terrain',
                                        terrain : 'swamp'
                                    }
                                ],
                                7 :
                                [
                                    {
                                        type : 'terrain',
                                        terrain : 'swamp'
                                    }
                                ]
                            },
                            11 :
                            {
                                5 :
                                [
                                    {
                                        type : 'terrain',
                                        terrain : 'normal'
                                    }
                                ],
                                6 :
                                [
                                    {
                                        type : 'structure',
                                        structure :
                                        {
                                            ...
                                        }
                                    },
                                    {
                                        type : 'terrain',
                                        terrain : 'swamp'
                                    }
                                ],
                                7 :
                                [
                                    {
                                        type : 'terrain',
                                        terrain : 'wall'
                                    }
                                ]
                            }
                        }
     */
    lookAtArea: function(top, left, bottom, right, asArray) { },

    /**
     * Get an object with the given type at the specified room position.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#lookForAt}
     *
     * @type {function}
     *
     * @param {string} type One of the LOOK_* constants.
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     *
     * @note Alternative function: lookForAt(type, target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {Array} An array of objects of the given type at the specified position if found.
     */
    lookForAt: function(type, x, y) { },

    /**
     * Get the list of objects with the given type at the specified room area.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079011-Room#lookForAtArea}
     *
     * @type {function}
     *
     * @param {string} type One of the LOOK_* constants.
     * @param {number} top The top Y boundary of the area.
     * @param {number} left The left X boundary of the area.
     * @param {number} bottom The bottom Y boundary of the area.
     * @param {number} right The right X boundary of the area.
     * @param {boolean} [asArray] Set to true if you want to get the result as a plain array.
     *
     * @return {object} An object with all the objects of the given type in the specified area in the following format:
                        //10,5,11,7
                        {
                            10:
                            {
                                5: [{...}],
                                6: undefined,
                                7: undefined
                            },
                            11:
                            {
                                5: undefined,
                                6: [{...}, {...}],
                                7: undefined
                            }
                        }
     */
    lookForAtArea: function(type, top, left, bottom, right, asArray) { },
};

/**
 * An object which provides fast access to room terrain data. These objects can be constructed for any room in the world even if you have no access to it.
 *
 * Technically every Room.Terrain object is a very lightweight adapter to underlying static terrain buffers with corresponding minimal accessors.
 *
 * @param {string} roomName The room name.
 *
 * @class
 * @constructor
 *
 * @see {@link https://docs.screeps.com/api/#Room-Terrain}
 */
Room.Terrain = function(roomName) {},

Room.Terrain.prototype = {
    /**
     * Get terrain type at the specified room position by (x,y) coordinates. Unlike the Game.map.getTerrainAt(...) method, this one doesn't perform any string operations and returns integer terrain type values (see below).
     *
     * @see {@link https://docs.screeps.com/api/#Room.Terrain.get}
     *
     * @type {function}
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     *
     * @return {0|TERRAIN_MASK_WALL|TERRAIN_MASK_SWAMP} An integer value. 0 if Plain.
     */
    get: function(x, y) {},

    /**
     * Get copy of underlying static terrain buffer. Current underlying representation is Uint8Array.
     *
     * @note WARNING: this method relies on underlying representation of terrain data. This is the fastest way to obtain terrain data of the whole room (2500 tiles), but users should keep in mind that it can be marked as deprecated anytime in the future, or return value type can be changed due to underlying data representation changing.
     *
     * @see {@link https://docs.screeps.com/api/#Room.Terrain.getRawBuffer}
     *
     * @type {function}
     *
     * @param {Array} [destinationArray] A typed array view in which terrain will be copied to.
     *
     * @return {Array|ERR_INVALID_ARGS} Copy of underlying room terrain representations as a new Uint8Array typed array of size 2500.

                                  Each element is an integer number, terrain type can be obtained by applying bitwise AND (&) operator with appropriate TERRAIN_MASK_* constant. Room tiles are stored row by row.

                                  If destinationArray is specified, function returns reference to this filled destinationArray if coping succeeded, or error code otherwise:
     */
    getRawBuffer: function(destinationArray) {},
};

/**
 * Any object with a position in a room.
 * Almost all game objects prototypes are derived from RoomObject.
 * @class
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208435305-RoomObject}
 */
RoomObject = function() { };

RoomObject.prototype =
{
    /**
     * Applied effects, an array of objects with the following properties:
     *
     * @see {@link https://docs.screeps.com/api/#RoomObject.effects}
     *
     * @type {array}
     */
    effects: null,
    /**
     * An object representing the position of this object in the room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208435305-RoomObject#pos}
     *
     * @type {RoomPosition}
     */
    pos: null,

    /**
     * The link to the Room object.
     * May be undefined in case if an object is a flag and is placed in a room that is not visible to you.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208435305-RoomObject#room}
     *
     * @type {Room}
     */
    room: null
};

/**
 * An object representing the specified position in the room.
 * Every object in the room contains RoomPosition as the pos property.
 * The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 *
 * @param {number} x X position in the room.
 * @param {number} y Y position in the room.
 * @param {string} roomName The room name.
 *
 * @class
 * @constructor
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition}
 */
RoomPosition = function(x, y, roomName) { };

RoomPosition.prototype =
{
    /**
     * The name of the room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#roomName}
     *
     * @type {string}
     */
    roomName: "",

    /**
     * X position in the room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#x}
     *
     * @type {number}
     */
    x: 0,

    /**
     * Y position in the room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#y}
     *
     * @type {number}
     */
    y: 0,

    /**
     * Create new ConstructionSite at the specified location.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#createConstructionSite}
     *
     * @type {function}
     *
     * @param {string} structureType One of the STRUCTURE_* constants.
     *
     * @return {number|OK|ERR_INVALID_TARGET|ERR_FULL|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createConstructionSite: function(structureType) { },

    /**
     * Create new Flag at the specified location.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#createFlag}
     *
     * @type {function}
     *
     * @param {string} [name] The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param {string} [color] The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param {string} [secondaryColor] The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     *
     * @return {string|number|ERR_NAME_EXISTS|ERR_INVALID_ARGS}
     */
    createFlag: function(name, color, secondaryColor) { },

    /**
     * Find an object with the shortest path from the given position.
     * Uses A* search algorithm and Dijkstra's algorithm.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#findClosestByPath}
     *
     * @type {function}
     *
     * @param {number|Array<RoomPosition>|Array<RoomObject>} type See Room.find.
     * @param {object} [opts] An object containing pathfinding options (see Room.findPath)
     * @param {object|function|string} [opts.filter] Only the objects which pass the filter using the Lodash.filter method will be used.
     * @param {string} [opts.algorithm] One of the following constants:
                                        astar is faster when there are relatively few possible targets;
                                        dijkstra is faster when there are a lot of possible targets or when the closest target is nearby.
                                        The default value is determined automatically using heuristics.

     * @note Alternative function: findClosestByPath: function(objects, opts)
     * @param {array} objects An array of room's objects or RoomPosition objects that the search should be executed against.

     * @return {object|null} The closest object if found, null otherwise.
     */
    findClosestByPath: function(type, opts) { },

    /**
     * Find an object with the shortest linear distance from the given position.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#findClosestByRange}
     *
     * @type {function}
     *
     * @param {number|Array<RoomPosition>|Array<RoomObject>} type See Room.find.
     * @param {object} [opts]
     * @param {object|function|string} [opts.filter] Only the objects which pass the filter using the Lodash.filter method will be used.
     *
     * @note Alterative function: findClosestByRange: function(objects, opts)
     * @param {array} objects An array of room's objects or RoomPosition objects that the search should be executed against.
     *
     * @return {object|null} The closest object if found, null otherwise.
     */
    findClosestByRange: function(type, opts) { },

    /**
     * Find all objects in the specified linear range.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#findInRange}
     *
     * @type {function}
     *
     * @param {number|Array<RoomPosition>|Array<RoomObject>} type See Room.find.
     * @param {number} range The range distance.
     * @param {object} [opts] See Room.find.
     *
     * @note Alternative function: findInRange(objects, range, opts)
     * @param {array} objects An array of room's objects or RoomPosition objects that the search should be executed against.
     *
     * @return {array} An array with the objects found.
     */
    findInRange: function(type, range, opts) { },

    /**
     * Find an optimal path to the specified position using A* search algorithm.
     * This method is a shorthand for Room.findPath.
     * If the target is in another room, then the corresponding exit will be used as a target.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#findPathTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     * @param {object} [opts] An object containing pathfinding options flags (see Room.findPath for more details).
     *
     * @note Alternative function: findPathTo(target, opts)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {array} An array with path steps in the following format:
                         [
                            { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
                            { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
                            { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT },
                             ...
                         ]
     */
    findPathTo: function(x, y, opts) { },

    /**
     * Get linear direction to the specified position.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#getDirectionTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     *
     * @note Alternative function: getDirectionTo(target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number|TOP|TOP_RIGHT|RIGHT|BOTTOM_RIGHT|BOTTOM|BOTTOM_LEFT|LEFT|TOP_LEFT} A number representing one of the direction constants.
     */
    getDirectionTo: function(x, y) { },

    /**
     * Get linear range to the specified position.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#getRangeTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     *
     * @note Alternative function: getRangeTo(target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number} A number of squares to the given position.
     */
    getRangeTo: function(x, y) { },

    /**
     * Check whether this position is in the given range of another position.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#inRangeTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     * @param {number} range The range distance.
     *
     *
     * @note Alternative function: inRangeTo(target, range)
     * @param {RoomPosition} target The target position.
     *
     * @return {boolean}
     */
    inRangeTo: function(x, y, range) { },

    /**
     * Check whether this position is the same as the specified position.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#isEqualTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     *
     * @note Alternative function: isEqualTo(target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {boolean}
     */
    isEqualTo: function(x, y) { },

    /**
     * Check whether this position is on the adjacent square to the specified position.
     * The same as inRangeTo(target, 1)
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#isNearTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     *
     * @note Alternative function: isNearTo(target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {boolean}
     */
    isNearTo: function(x, y) { },

    /**
     * Get the list of objects at the specified room position.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#look}
     *
     * @type {function}
     *
     * @return {array} An array with objects at the specified position in the following format:
                         [
                            { type: 'creep', creep: {...} },
                            { type: 'structure', structure: {...} },
                            ...
                            { type: 'terrain', terrain: 'swamp' }
                         ]
     */
    look: function() { },

    /**
     * Get an object with the given type at the specified room position.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079201-RoomPosition#lookFor}
     *
     * @type {function}
     *
     * @param {string} type One of the LOOK_* constants.
     *
     * @return {array} An array of objects of the given type at the specified position if found.
     */
    lookFor: function(type) { }
};

/**
 * Room visuals provide a way to show various visual debug info in game rooms.
 * You can use the RoomVisual object to draw simple shapes that are visible only to you.
 * Every existing Room object already contains the visual property, but you also can create new RoomVisual objects for any room (even without visibility) using the constructor.
 *
 * Room visuals are not stored in the database, their only purpose is to display something in your browser.
 * All drawings will persist for one tick and will disappear if not updated.
 * All RoomVisual API calls have no added CPU cost (their cost is natural and mostly related to simple JSON.serialize calls).
 * However, there is a usage limit: you cannot post more than 500 KB of serialized data per one room (see getSize method).
 *
 * All draw coordinates are measured in game coordinates and centered to tile centers, i.e. (10,10) will point to the center of the creep at x:10; y:10 position.
 * Fractional coordinates are allowed.
 *
 * @param {string} roomName
 *
 * @class
 * @constructor
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208488525-Nuke}
 */
RoomVisual = function(roomName) { };

RoomVisual.prototype =
    {
        /**
         * The name of the room.
         *
         * @see {@link http://docs.screeps.com/api/#RoomVisual.roomName}
         *
         * @type {string}
         */
        roomName: "",

        /**
         * Draw a line.
         *
         * @see {@link http://docs.screeps.com/api/#RoomVisual.line}
         *
         * @type {function}
         *
         * @param {number} x1 The start X coordinate.
         * @param {number} y1 The start Y coordinate.
         * @param {number} x2 The finish X coordinate.
         * @param {number} y2 The finish Y coordinate.
         * @param {Object} [style] Style object
         *
         * @return {RoomVisual}
         */
        line: function(x1, y1, x2, y2, style) { },

        /**
          * Draw a circle.
          *
          * @see {@link https://docs.screeps.com/api/#RoomVisual.circle}
          *
          * @type {function}
          *
          * @param {number} x The X coordinate of the center.
          * @param {number} [y] The Y coordinate of the center.
          * @param {Object} [style] Style object
          *
          * @alias circle(pos, [style])
          *
          * @return {RoomVisual}
          */
        circle: function(x, y, style) { },

        /**
         * Draw a rectangle.
         *
         * @see {@link https://docs.screeps.com/api/#RoomVisual.rect}
         *
         * @type {function}
         *
         * @param {number} x The X coordinate of the top-left corner.
         * @param {number} y The Y coordinate of the top-left corner.
         * @param {number} width The width of the rectangle.
         * @param {number} height The height of the rectangle.
         * @param {object} style Style object
         *
         * @alias rect(topLeftPos, width, height, [style])
         *
         * @return {RoomVisual}
         */
        rect(x, y, width, height, style) { },

        /**
         * Draw a line.
         *
         * @see {@link http://docs.screeps.com/api/#RoomVisual.poly}
         *
         * @type {function}
         *
         * @param {Array<Array<number>>|Array<RoomPosition>} points An array of points. Every item should be either an array with 2 numbers (i.e. [10,15]), or a RoomPosition object.
         * @param {Object} [style] Style object
         *
         * @return {RoomVisual}
         */
        poly: function(points, style) { },

        /**
         * Draw a text label. You can use any valid Unicode characters, including emoji.
         *
         * @see {@link https://docs.screeps.com/api/#RoomVisual.text}
         *
         * @type {function}
         *
         * @param {string} text The text message.
         * @param {number} x The X coordinate of the label baseline point.
         * @param {number} y The Y coordinate of the label baseline point.
         * @param {object} [style] Style object
         *
         * @alias text(text, pos, [style])
         *
         * @return {RoomVisual}
         */
         text: function(text, x, y, style) { },

        /**
         * Remove all visuals from the room.
         *
         * @see {@link https://docs.screeps.com/api/#RoomVisual.clear}
         *
         * @type {function}
         *
         * @return {RoomVisual}
         */
         clear: function() { },

        /**
         * Get the stored size of all visuals added in the room in the current tick. It must not exceed 512,000 (500 KB).
         *
         * @see {@link https://docs.screeps.com/api/#RoomVisual.getSize}
         *
         * @return {number} The size of the visuals in bytes.
         */
         getSize: function() { },
    };

    /**
 * An energy source object.
 * Can be harvested by creeps with a WORK body part.
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/203079211-Source}
 */
Source = function() { };

Source.prototype =
{
    /**
     * The remaining amount of energy.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079211-Source#energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy in the source.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079211-Source#energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079211-Source#id}
     *
     * @type {string}
     */
    id: "",

    /**
     * The remaining time after which the source will be refilled.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079211-Source#ticksToRegeneration}
     *
     * @type {number}
     */
    ticksToRegeneration: 0
};


/**
 * The base prototype object of all structures.
 * @class
 * @extends {RoomObject}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/203079221-Structure}
 */
Structure = function() { };

Structure.prototype =
{
    /**
     * The current amount of hit points of the structure.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079221-Structure#hits}
     *
     * @type {number}
     */
    hits: 0,

    /**
     * The total amount of hit points of the structure.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079221-Structure#hitsMax}
     *
     * @type {number}
     */
    hitsMax: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079221-Structure#id}
     *
     * @type {string}
     */
    id: "",

    /**
     * One of the STRUCTURE_* constants.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079221-Structure#structureType}
     *
     * @type {string}
     */
    structureType: "",

    /**
     * Destroy this structure immediately.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079221-Structure#destroy}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    destroy: function() { },

    /**
     * Check whether this structure can be used.
     * If the room controller level is not enough,
     * then this method will return false, and the structure will be highlighted with red in the game.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079221-Structure#isActive}
     *
     * @type {function}
     *
     * @return {boolean}
     */
    isActive: function() { },

    /**
     * Toggle auto notification when the structure is under attack.
     * The notification will be sent to your account email.
     * Turned on by default.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079221-Structure#notifyWhenAttacked}
     *
     * @type {function}
     *
     * @param {boolean} enabled Whether to enable notification or disable.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function(enabled) { }
};

/**
 * A remnant of dead creeps. This is a walkable object.
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link https://docs.screeps.com/api/#Tombstone}
 */
Tombstone = function() { };

Tombstone.prototype =
{
    /**
     * An object containing the deceased creep.
     *
     * @see {@link https://docs.screeps.com/api/#Tombstone.creep}
     *
     * @type {Creep}
     */
    creep: { },

    /**
     * Time of death.
     *
     * @see {@link https://docs.screeps.com/api/#Tombstone.deathTime}
     *
     * @type {number}
     */
    deathTime: 0,

    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link https://docs.screeps.com/api/#Tombstone.id}
     *
     * @type {string}
     */
    id: "",

    /**
     * An object with the tombstone contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. RESOURCE_ENERGY is always defined and equals to 0 when empty, other resources are undefined when empty. You can use lodash.sum to get the total amount of contents.
     *
     * @see {@link https://docs.screeps.com/api/#Tombstone.store}
     *
     * @type {object}
     */
    store: { },

    /**
     * The amount of game ticks before this tombstone decays.
     *
     * @see {@link https://docs.screeps.com/api/#Tombstone.ticksToDecay}
     *
     * @type {number}
     */
    ticksToDecay: 0,
};

/**
 * A small container that can be used to store resources.
 * This is a walkable structure.
 * All dropped resources automatically goes to the container at the same tile.
 *
 * @class
 * @extends {Structure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208435885-StructureContainer}
 */
StructureContainer = function() { };

StructureContainer.prototype =
{


    /**
     * An object with the structure contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(structure.store) to get the total amount of contents.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208435885-StructureContainer#store}
     *
     * @type {Array<string, number>}
     */
    store: {},

    /**
     * The total amount of resources the structure can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208435885-StructureContainer#storeCapacity}
     *
     * @type {number}
     */
    storeCapacity: 0,

    /**
     * @deprecated Since version 2016-07-11, replaced by `Creep.withdraw()`.
     *
     * Transfer resource from this structure to a creep.
     * The target has to be at adjacent square.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208435885-StructureContainer#transfer}
     *
     * @type {function}
     *
     * @param {Creep} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { }
};

/**
 * Claim this structure to take control over the room.
 * The controller structure cannot be damaged or destroyed.
 * It can be addressed by Room.controller property.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController}
 */
StructureController = function() { };

StructureController.prototype =
{

    /**
     * Ticks left before another safeMode can be used
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController#safeModeCooldown}
     *
     * @type {number}
     */
    safeModeCooldown: 0,
    
    /**
     * The number of available safeMode activations
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController#safeModeAvailable}
     *
     * @type {number}
     */
    safeModeAvailable: 0,

    /**
     * Returns if safeMode is active. If not this will return undefined, not false.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController#safeMode}
     *
     * @type {Boolean|undefined}
     */
    safeMode: undefined,

    /**
     * Triggers the activation of a saveMode if possible and available
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController#activateSafeMode}
     *
     * @type {function}
     *
     * @return {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_TIRED}
     */
    activateSafeMode: function() {},
    
    /**
     * Whether using power is enabled in this room. Use PowerCreep.enableRoom to turn powers on.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.isPowerEnabled}
     *
     * @type {boolean}
     */
    isPowerEnabled: false,
    
    /**
     * Current controller level, from 0 to 8.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController#level}
     *
     * @type {number}
     */
    level: 0,

    /**
     * The current progress of upgrading the controller to the next level.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController#progress}
     *
     * @type {number}
     */
    progress: 0,

    /**
     * The progress needed to reach the next level.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController#progressTotal}
     *
     * @type {number}
     */
    progressTotal: 0,

    /**
     * An object with the controller reservation info if present
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController#reservation}
     *
     * @type {null|{username: string, ticksToEnd: number}}
     */
    reservation: {},

    /**
     * The amount of game ticks when this controller will lose one level.
     * This timer can be reset by using Creep.upgradeController.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController#ticksToDowngrade}
     *
     * @type {number}
     */
    ticksToDowngrade: 0,

    /**
     * The amount of game ticks while this controller cannot be upgraded due to attack.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController#upgradeBlocked}
     *
     * @type {number}
     */
    upgradeBlocked: 0,

    /**
     * Make your claimed controller neutral again.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711889-StructureController#unclaim}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    unclaim: function() { }
};

/**
 * Contains energy which can be spent on spawning bigger creeps.
 * Extensions can be placed anywhere in the room, any spawns will be able to use them regardless of distance.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207711949-StructureExtension}
 */
StructureExtension = function() { };

StructureExtension.prototype =
{
    /**
     * The amount of energy containing in the extension.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711949-StructureExtension#energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy the extension can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711949-StructureExtension#energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * @deprecated Since version 2016-07-11, replaced by `Creep.withdraw()`.
     *
     * Transfer the energy from the extension to a creep.
     * You can transfer resources to your creeps from hostile structures as well.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711949-StructureExtension#transferEnergy}
     *
     * @type {function}
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {number|undefined|null} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { }
};

/**
 * Allows to harvest a mineral deposit.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207715739-StructureExtractor}
 */
StructureExtractor = function() { };

StructureExtractor.prototype =
{

};

/**
 * Non-player structure.
 * Spawns NPC Source Keepers that guards energy sources and minerals in some rooms.
 * This structure cannot be destroyed.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207712119-StructureKeeperLair}
 */
StructureKeeperLair = function() { };

StructureKeeperLair.prototype =
{
    /**
     * Time to spawning of the next Source Keeper.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207712119-StructureKeeperLair#ticksToSpawn}
     *
     * @type {number}
     */
    ticksToSpawn: 0
};

/**
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208436195-StructureLab}
 */
StructureLab = function() { };

StructureLab.prototype =
{
    /**
     * The amount of game ticks the lab has to wait until the next reaction is possible.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436195-StructureLab#cooldown}
     *
     * @type {number}
     */
    cooldown: 0,

    /**
     * The amount of energy containing in the lab. Energy is used for boosting creeps.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436195-StructureLab#energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy the lab can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436195-StructureLab#energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * The amount of mineral resources containing in the lab.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436195-StructureLab#mineralAmount}
     *
     * @type {number}
     */
    mineralAmount: 0,

    /**
     * The type of minerals containing in the lab.
     * Labs can contain only one mineral type at the same time.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436195-StructureLab#mineralType}
     *
     * @type {string}
     */
    mineralType: "",

    /**
     * The total amount of minerals the lab can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436195-StructureLab#mineralCapacity}
     *
     * @type {number}
     */
    mineralCapacity: 0,

    /**
     * Boosts creep body part using the containing mineral compound.
     * The creep has to be at adjacent square to the lab.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436195-StructureLab#boostCreep}
     *
     * @type {function}
     *
     * @param {Creep} creep The target creep.
     * @param {number|undefined|null} [bodyPartsCount] The number of body parts of the corresponding type to be boosted. Body parts are always counted left-to-right for TOUGH, and right-to-left for other types. If undefined, all the eligible body parts are boosted.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_FOUND|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    boostCreep: function(creep, bodyPartsCount) { },

    /**
     * Immediately remove boosts from the creep and drop 50% of the mineral compounds used to boost it onto the ground regardless of the creep's remaining time to live.
     * The creep has to be at adjacent square to the lab. Unboosting requires cooldown time equal to the total sum of the reactions needed to produce all the compounds applied to the creep.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.unboostCreep}
     *
     * @type {function}
     *
     * @param {Creep} creep The target creep.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_FOUND|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_TIRED}
     */
    unboostCreep: function(creep) { },


    /**
     * Produce mineral compounds using reagents from two another labs.
     * The same input labs can be used by many output labs.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436195-StructureLab#runReaction}
     *
     * @type {function}
     *
     * @param {StructureLab} lab1 The first source lab.
     * @param {StructureLab} lab2 The second source lab.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED}
     */
    runReaction: function(lab1, lab2) { },

    /**
     * @deprecated Since version 2016-07-11, replaced by `Creep.withdraw()`.
     *
     * Transfer resource from this structure to a creep.
     * The target has to be at adjacent square.
     * You can transfer resources to your creeps from hostile structures as well.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436195-StructureLab#transfer}
     *
     * @type {function}
     *
     * @param {Creep} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { }
};

/**
 * Remotely transfers energy to another Link in the same room.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208436275-StructureLink}
 */
StructureLink = function() { };

StructureLink.prototype =
{
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436275-StructureLink#cooldown}
     *
     * @type {number}
     */
    cooldown: 0,

    /**
     * The amount of energy containing in the link.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436275-StructureLink#energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy the link can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436275-StructureLink#energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * Transfer energy from the link to another link or a creep.
     * If the target is a creep, it has to be at adjacent square to the link.
     * If the target is a link, it can be at any location in the same room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436275-StructureLink#transferEnergy}
     *
     * @type {function}
     *
     * @param {Creep|StructureLink} target The target object.
     * @param {number|undefined|null} [amount] The amount of energy to be transferred. If omitted, all the available energy is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED|ERR_RCL_NOT_ENOUGH}
     */
    transferEnergy: function(target, amount) { }
};

/**
 * Launches a nuke to another room dealing huge damage to the landing area.
 * Each launch has a cooldown and requires energy and ghodium resources.
 * Launching creates a Nuke object at the target room position which is visible to any player until it is landed.
 * Incoming nuke cannot be moved or cancelled. Nukes cannot be launched from or to novice rooms.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208488255-StructureNuker}
 */
StructureNuker = function() { };

StructureNuker.prototype =
{
    /**
     * The amount of energy containing in this structure.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208488255-StructureNuker#energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy this structure can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208488255-StructureNuker#energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * The amount of ghodium containing in this structure.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208488255-StructureNuker#ghodium}
     *
     * @type {number}
     */
    ghodium: 0,

    /**
     * The total amount of ghodium this structure can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208488255-StructureNuker#ghodiumCapacity}
     *
     * @type {number}
     */
    ghodiumCapacity: 0,

    /**
     * The amount of game ticks until the next launch is possible.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208488255-StructureNuker#cooldown}
     *
     * @type {number}
     */
    cooldown: 0,

    /**
     * Launch a nuke to the specified position.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208488255-StructureNuker#launchNuke}
     *
     * @type {function}
     *
     * @param {RoomPosition} pos The target room position.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_TIRED|ERR_RCL_NOT_ENOUGH}
     */
    launchNuke: function(pos) { }
};

/**
 * Provides visibility into a distant room from your script.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208436365-StructureObserver}
 */
StructureObserver = function() { };

StructureObserver.prototype =
{
    /**
     * Provide visibility into a distant room from your script.
     * The target room object will be available on the next tick.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436365-StructureObserver#observeRoom}
     *
     * @type {function}
     *
     * @param {string} roomName The name of the target room.
     *
     * @return {number|OK|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    observeRoom: function(roomName) { }
};

/**
 * A non-player structure.
 * Instantly teleports your creeps to a distant room acting as a room exit tile.
 * Portals appear randomly in the central room of each sector.
 *
 * @class
 * @extends {Structure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208647345-StructurePortal}
 */
StructurePortal = function() { };

StructurePortal.prototype =
{
    /**
     * The position object in the destination room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208647345-StructurePortal#destination}
     *
     * @type {RoomPosition}
     */
    destination: null,

    /**
     * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208647345-StructurePortal#ticksToDecay}
     *
     * @type {undefined|number}
     */
    ticksToDecay: 0
};

/**
 * Non-player structure.
 * Contains power resource which can be obtained by destroying the structure.
 * Hits the attacker creep back on each attack.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207712729-StructurePowerBank}
 */
StructurePowerBank = function() { };

StructurePowerBank.prototype =
{
    /**
     * The amount of power containing.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207712729-StructurePowerBank#power}
     *
     * @type {number}
     */
    power: 0,

    /**
     * The amount of game ticks when this structure will disappear.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207712729-StructurePowerBank#ticksToDecay}
     *
     * @type {number}
     */
    ticksToDecay: 0
};

/**
 * Processes power into your account, and spawns power creeps with special unique powers (in development).
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208436585-StructurePowerSpawn}
 */
StructurePowerSpawn = function() { };

StructurePowerSpawn.prototype =
{
    /**
     * The amount of energy containing in this structure.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436585-StructurePowerSpawn#energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy this structure can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436585-StructurePowerSpawn#energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * The amount of power containing in this structure.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436585-StructurePowerSpawn#power}
     *
     * @type {number}
     */
    power: 0,

    /**
     * The total amount of power this structure can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436585-StructurePowerSpawn#powerCapacity}
     *
     * @type {number}
     */
    powerCapacity: 0,

    /**
     * Create a power creep.
     * @note This method is under development.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436585-StructurePowerSpawn#createPowerCreep}
     *
     * @type {function}
     *
     * @param {string} roomName The name of the power creep.
     *
     * @return {void}
     */
    createPowerCreep: function(roomName) { },

    /**
     * Register power resource units into your account.
     * Registered power allows to develop power creeps skills.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436585-StructurePowerSpawn#processPower}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_RCL_NOT_ENOUGH}
     */
    processPower: function() { },

    /**
     * @deprecated Since version 2016-07-11, replaced by `Creep.withdraw()`.
     *
     * Transfer the energy from this structure to a creep.
     * You can transfer resources to your creeps from hostile structures as well.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436585-StructurePowerSpawn#transferEnergy}
     *
     * @type {function}
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {number|undefined|null} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { }
};

/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on the same tile.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207712959-StructureRampart}
 */
StructureRampart = function() { };

StructureRampart.prototype =
{
    /**
     * The amount of game ticks when this rampart will lose some hit points.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207712959-StructureRampart#ticksToDecay}
     *
     * @type {number}
     */
    ticksToDecay: 0
};

/**
 * Decreases movement cost to 1.
 * Using roads allows creating creeps with less MOVE body parts.
 *
 * @class
 * @extends {Structure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207713089-StructureRoad}
 */
StructureRoad = function() { };

StructureRoad.prototype =
{
    /**
     * The amount of game ticks when this road will lose some hit points.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207713089-StructureRoad#ticksToDecay}
     *
     * @type {number}
     */
    ticksToDecay: 0
};

/**
 * Spawn is your colony center.
 * This structure can create, renew, and recycle creeps.
 * All your spawns are accessible through Game.spawns hash list.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn}
 */
StructureSpawn = function() { };

/**
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn}
 */
Spawn = StructureSpawn;
Spawn.prototype = StructureSpawn.prototype;

StructureSpawn.prototype =
{
    /**
     * The amount of energy containing in the spawn.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy the spawn can contain
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * A shorthand to Memory.spawns[spawn.name].
     * You can use it for quick access the spawn’s specific memory data object.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#memory}
     *
     * @type {*}
     */
    memory: {},

    /**
     * Spawn’s name.
     * You choose the name upon creating a new spawn, and it cannot be changed later.
     * This name is a hash key to access the spawn via the Game.spawns object.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#name}
     *
     * @type {string}
     */
    name: "",

    /**
     * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#spawning}
     *
     * @type {object|null}
     */
    spawning: null,

    /**
     * Check if a creep can be created.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#canCreateCreep}
     *
     * @type {function}
     *
     * @param {Array<string>} body An array describing the new creep’s body. Should contain 1 to 50 elements.
     * @param {string|undefined|null} [name] The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     *
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    canCreateCreep: function(body, name) { },

    /**
     * Start the creep spawning process.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#createCreep}
     *
     * @type {function}
     *
     * @param {Array<string>} body An array describing the new creep’s body. Should contain 1 to 50 elements.
     * @param {string|undefined|null} [name] The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     * @param {*} [memory] The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     *
     * @return {string|number|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createCreep: function(body, name, memory) { },
    
    /**
     * Start the creep spawning process. The required energy amount can be withdrawn from all spawns and extensions in the room.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.spawnCreep}
     *
     * @type {function}
     *
     * @param {Array<string>} body An array describing the new creep’s body. Should contain 1 to 50 elements.
     * @param {string} name The name of a new creep. It must be a unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     * @param {Object} [opts] An object with additional options for the spawning process.
     * @param {*} [opts.memory] Memory of the new creep. If provided, it will be immediately stored into Memory.creeps[name].
     * @param {Array<StructureSpawn|StructureExtension>} [opts.energyStructures] Array of spawns/extensions from which to draw energy for the spawning process. Structures will be used according to the array order.
     * @param {boolean} [opts.dryRun] If dryRun is true, the operation will only check if it is possible to create a creep.
     * @param {Array<number>} [opts.directions] Set desired directions where the creep should move when spawned. 
     *
     * @return {OK|number|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    spawnCreep: function(body, name, memory) { },
    
    /**
     * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time.
     * The target should be at adjacent square.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#recycleCreep}
     *
     * @type {function}
     *
     * @param {Creep} target The target creep object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    recycleCreep: function(target) { },

    /**
     * Increase the remaining time to live of the target creep.
     * The target should be at adjacent square.
     * The spawn should not be busy with the spawning process.
     * Each execution increases the creep's timer by amount of ticks according to this formula: floor(500/body_size).
     * Energy required for each execution is determined using this formula: ceil(creep_cost/3/body_size).
     * Renewing a creep removes all of its boosts.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#renewCreep}
     *
     * @type {function}
     *
     * @param {Creep} target The target creep object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    renewCreep: function(target) { },

    /**
     * @deprecated Since version 2016-07-11, replaced by `Creep.withdraw()`.
     *
     * Transfer the energy from the spawn to a creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#transferEnergy}
     *
     * @type {function}
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {number|undefined|null} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { }
};

/**
 * Details of the creep being spawned currently that can be addressed by the StructureSpawn.spawning property.
 *
 * @class
 *
 * @see {@link http://docs.screeps.com/api/#StructureSpawn-Spawning}
 */
StructureSpawn.Spawning = function () { };

StructureSpawn.Spawning.prototype = {

    /**
     * An array with the spawn directions
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.directions}
     *
     * @type {Array}
     */
    directions: [],

    /**
     * The name of a new creep.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.name}
     *
     * @type {string}
     */
    name: "",

    /**
     * Time in ticks needed in total to complete the spawning.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.needTime}
     *
     * @type {number}
     */
    needTime: 0,

    /**
     * Remaining time to go.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.remainingTime}
     *
     * @type {number}
     */
    remainingTime: 0,

    /**
     * A link to the spawn.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.spawn}
     *
     * @type {StructureSpawn}
     */
    spawn: {},

    /**
     * Cancel spawning immediately. Energy spent on spawning is not returned.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.cancel}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    cancel: function() { },

    /**
     * Set desired directions where the creep should move when spawned.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.setDirections}
     *
     * @type {function}
     *
     * @param {Array<number>} {directions} An array with the direction constants: TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    setDirections: function(directions) { }
};

/**
 * A structure that can store huge amount of resource units.
 * Only one structure per room is allowed that can be addressed by Room.storage property.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208436805-StructureStorage}
 */
StructureStorage = function() { };

StructureStorage.prototype =
{
    /**
     * An object with the storage contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(structure.store) to get the total amount of contents.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436805-StructureStorage#store}
     *
     * @type {Array<string, number>}
     */
    store: {},

    /**
     * The total amount of resources the storage can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436805-StructureStorage#storeCapacity}
     *
     * @type {number}
     */
    storeCapacity: 0,

    /**
     * @deprecated Since version 2016-07-11, replaced by `Creep.withdraw()`.
     *
     * Transfer resource from this storage to a creep.
     * The target has to be at adjacent square.
     * You can transfer resources to your creeps from hostile structures as well.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436805-StructureStorage#transfer}
     *
     * @type {function}
     *
     * @param {Creep} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { }
};

/**
 * Sends any resources to a Terminal in another room.
 * The destination Terminal can belong to any player.
 * If its storage is full, the resources are dropped on the ground.
 * Each transaction requires additional energy (regardless of the transfer resource type) that can be calculated using Game.market.calcTransactionCost method.
 * For example, sending 1000 mineral units from W0N0 to W10N5 will consume 742 energy units.
 * You can track your incoming and outgoing transactions and estimate range cost between rooms using the Game.market object.
 * Only one Terminal per room is allowed that can be addressed by Room.terminal property.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207713399-StructureTerminal}
 */
StructureTerminal = function() { };

StructureTerminal.prototype =
{
    /**
     * An object with the storage contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(structure.store) to get the total amount of contents.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207713399-StructureTerminal#store}
     *
     * @type {Array<string, number>}
     */
    store: {},

    /**
     * The total amount of resources the storage can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207713399-StructureTerminal#storeCapacity}
     *
     * @type {number}
     */
    storeCapacity: 0,
    
    /**
    * The remaining amount of ticks while this terminal cannot be used to make StructureTerminal.send or Game.market.deal calls.
    *
    * @see {@link http://docs.screeps.com/api/#StructureTerminal.store}
    *
    * @type {number}
    */
    cooldown: 0,

    /**
     * Sends resource to a Terminal in another room with the specified name.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207713399-StructureTerminal#send}
     *
     * @type {function}
     *
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} amount The amount of resources to be sent. The minimum amount is 100.
     * @param {string|undefined|null} [destination] The name of the target room. You don't have to gain visibility in this room.
     * @param {string|undefined|null} [description] The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
     */
    send: function(resourceType, amount, destination, description) { },

    /**
     * @deprecated Since version 2016-07-11, replaced by `Creep.withdraw()`.
     *
     * Transfer resource from this terminal to a creep.
     * The target has to be at adjacent square.
     * You can transfer resources to your creeps from hostile structures as well.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207713399-StructureTerminal#transfer}
     *
     * @type {function}
     *
     * @param {Creep} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { }
};

/**
 * Remotely attacks or heals creeps, or repairs structures.
 * Can be targeted to any object in the room.
 * However, its effectiveness highly depends on the distance.
 * Each action consumes energy.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208437105-StructureTower}
 */
StructureTower = function() { };

StructureTower.prototype =
{
    /**
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208437105-StructureTower#energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * @see {@link http://support.screeps.com/hc/en-us/articles/208437105-StructureTower#energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * Remotely attack any creep in the room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208437105-StructureTower#attack}
     *
     * @type {function}
     *
     * @param {Creep} target The target creep.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    attack: function(target) { },


    /**
     * Remotely heal any creep in the room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208437105-StructureTower#heal}
     *
     * @type {function}
     *
     * @param {Creep} target The target creep.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    heal: function(target) { },


    /**
     * Remotely repair any structure in the room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208437105-StructureTower#repair}
     *
     * @type {function}
     *
     * @param {Spawn|Structure} target The target structure.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    repair: function(target) { },


    /**
     * @deprecated Since version 2016-07-11, replaced by `Creep.withdraw()`.
     *
     * Transfer energy from the structure to a creep.
     * You can transfer resources to your creeps from hostile structures as well.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208437105-StructureTower#transferEnergy}
     *
     * @type {function}
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {number|undefined|null} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { }
};

/**
 * Blocks movement of all creeps.
 *
 * @class
 * @extends {Structure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208437125-StructureWall}
 */
StructureWall = function() { };

StructureWall.prototype =
{
    /**
     * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208437125-StructureWall#ticksToLive}
     *
     * @type {number}
     */
    ticksToLive: 0
};

