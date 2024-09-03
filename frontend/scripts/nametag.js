import * as THREE from 'three';

export default class Nametag {
  constructor(player, scene) {
    this.player = player;
    this.scene = scene;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = 'Bold 20px Arial';
    context.fillStyle = 'black';
    const text = this.player.name;
    const textWidth = context.measureText(text).width;
    const x = (canvas.width - textWidth) / 2;
    const y = canvas.height / 1.2;
    context.fillText(text, x, y);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture });
    this.sprite = new THREE.Sprite(material);

    this.sprite.scale.set(5, 2.5, 1);
    this.scene.add(this.sprite);
  }

  update() {
    const playerPos = this.player.getPlayerPosition();
    this.sprite.position.set(
      playerPos.x,
      playerPos.y + 2,
      playerPos.z
    );
  }

  remove() {
    this.scene.remove(this.sprite);
  }
}