import Player from './player.js';
import Input from './input.js';
import Connection from '../../connection.js';

export default class ClientPlayer {

    constructor(player) {
        this.player = player;
        this.playerInput = new Input(this.player, Connection.getConnection());
        this.playerInput.initInputSystem();
        this.alive = true;
        this.oribtCameraAlive = false; //TODO Make player camera orbit around player while alive
    }

    getPlayerPosition() {
        return this.player.getPlayerPosition();
    }

    getPlayerLookAt() {
        return this.player.lookAt;
    }

    getPlayerNormalizedLookAt() {
        return this.player.lookAtNormilized;
    }

    update() {
    }

    getPlayer() {
        return this.player;
    }

    collided() {
        this.playerInput.collided();
    }

}

