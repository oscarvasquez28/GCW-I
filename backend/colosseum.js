import Level from "./level.js";

export default class Colosseum extends Level {
    constructor() {
        super(null, 3);
        this.init();
    }

    init() {
        this.getWorld();
    }

}