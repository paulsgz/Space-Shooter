export default class Enemy {
    constructor(x, y, health) {
      this.x = x;
      this.y = y;
      this.move = Math.floor(Math.random() *100);
      this.health = health;
      this.width = 50;     
      this.height = 50;
      this.enemywidth = 110;
      this.enemyheight = 110;
      this.bulletWidth=67;
      this.bulletHeight=167;
      this.speed = 4;
      this.gamespeed = 1;
      this.bulletX = this.x + this.width / 2;
      this.bulletY = this.y;
      this.delay = 250;
      this.spriteWidth = 690;
      this.spriteHeight= 584;
      this.frameX = 0;

    }
    draw(ctx) {
     const enemy1 = new Image();
     const enemy2 = new Image();
     enemy1.src = "Ships & Missiles/Variation_D/2x/Ship_5_D_Large.png";
      // ctx.fillStyle = this.color;
      // if (this.health > 1) {
      //   ctx.strokeStyle = "white";
      // } else {
      //   ctx.strokeStyle = this.color;
      // }
      const boom = new Image();
      boom.src = "boom.png";
      if(this.health < 1){
        ctx.drawImage(boom,this.x-15, this.y-20, this.spriteWidth/5, this.spriteHeight)
      } else
      ctx.drawImage(enemy1,this.x-15, this.y-20, this.enemywidth, this.enemyheight);
      // this.y += Math.floor(Math.random() * 4);
      // this.x += Math.floor(Math.random() * 4);
      // this.y -= Math.floor(Math.random() * 4);
      // this.x -= Math.floor(Math.random() * 4);

    }
    takeDamage(damage) {
      this.health -= damage;
    }
  }


