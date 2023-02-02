export default class EnemyPlayer {
    constructor(x, y, bulletController,path,width,height,health,type,gamespeed) {
      this.x = x;
      this.y = y;
      this.bulletController = bulletController;
      this.width = 65;
      this.height = 65;
      this.speed = 4;
      this.shipwidth =1507;
      this.shipheight =1507;
      this.boostwidth =1507;
      this.boostheight =1507;
      this.path = path;
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.health = health;
      this.type = type;
      this.gamespeed=gamespeed;

    //   document.addEventListener("keydown", this.keydown);
    //   document.addEventListener("keyup", this.keyup);
    }
  
    draw(ctx) {
        const bida = new Image();
        const enemy2 = new Image();
        const enemy3 = new Image();
        const enemy4 = new Image();
        const enemy5 = new Image();
        const enemy6 = new Image();
        const enemy7 = new Image();
        const enemy8 = new Image();
        const boost = new Image();
        const boost2 = new Image(); 
        const boost3 = new Image();   
        bida.src =  "Ships & Missiles/Variation_D/2x/Ship_5_D_Large.png";
        enemy2.src =  "Ships & Missiles/Variation_D/2x/Ship_1_D_Large.png";
        enemy3.src =  "Ships & Missiles/Variation_D/2x/Ship_2_D_Large.png";
        enemy4.src =  "Ships & Missiles/Variation_D/2x/Ship_3_D_Large.png";
        enemy5.src =  "Ships & Missiles/Variation_D/2x/Ship_4_D_Large.png";
        enemy6.src =  "Ships & Missiles/Variation_D/2x/Ship_6_D_Large.png";
        enemy7.src =  "Ships & Missiles/Variation_D/2x/Ship_9_D_Large.png";
        enemy8.src =  "Ships & Missiles/Variation_D/2x/Ship_9_D_Large.png";
        boost.src = "Projectiles/Variation D/Projectile_5_D.png";
        boost2.src =  "Projectiles/Variation D/Projectile_2_D.png";
        boost3.src =  "Projectiles/Variation A/Projectile_7_A.png";

      this.move();
    //   ctx.strokeStyle = "yellow";
    //   ctx.strokeRect(this.x, this.y, this.width, this.height);
    //   ctx.fillStyle = "black";
    //   ctx.fillRect(this.x, this.y, this.width, this.height);
    if(this.type === 0){
        ctx.drawImage(boost3,this.x+9, this.y-30, this.boostwidth/30, this.shipheight/25);
        ctx.drawImage(enemy8,this.x-12, this.y-10, this.shipwidth/16, this.shipheight/16);
    }
    if(this.type === 1){
        ctx.drawImage(boost3,this.x+9, this.y-30, this.boostwidth/30, this.shipheight/25);
        ctx.drawImage(bida,this.x-12, this.y-10, this.shipwidth/16, this.shipheight/16);
    }
    if(this.type === 2){
        ctx.drawImage(boost3,this.x+9, this.y-30, this.boostwidth/30, this.shipheight/25);
        ctx.drawImage(enemy2,this.x-12, this.y-10, this.shipwidth/16, this.shipheight/16);
    }
    if(this.type === 3){
        ctx.drawImage(boost3,this.x+9, this.y-30, this.boostwidth/30, this.shipheight/25);
        ctx.drawImage(enemy3,this.x-12, this.y-10, this.shipwidth/16, this.shipheight/16);
    }
    if(this.type === 4){
        ctx.drawImage(boost3,this.x+9, this.y-30, this.boostwidth/30, this.shipheight/25);
        ctx.drawImage(enemy4,this.x-12, this.y-10, this.shipwidth/16, this.shipheight/16);
    }
    if(this.type === 5){
        ctx.drawImage(boost3,this.x+9, this.y-30, this.boostwidth/30, this.shipheight/25);
        ctx.drawImage(enemy5,this.x-12, this.y-10, this.shipwidth/16, this.shipheight/16);
    }
    if(this.type === 6){
        ctx.drawImage(boost3,this.x+9, this.y-30, this.boostwidth/30, this.shipheight/25);
        ctx.drawImage(enemy6,this.x-12, this.y-10, this.shipwidth/16, this.shipheight/16);
    }
    if(this.type === 7){
        ctx.drawImage(boost3,this.x+9, this.y-30, this.boostwidth/30, this.shipheight/25);
        ctx.drawImage(enemy7,this.x-12, this.y-10, this.shipwidth/16, this.shipheight/16);
    }
    if(this.type === 8){
        ctx.drawImage(boost3,this.x+90, this.y-30, this.boostwidth/16, this.shipheight/12);
        ctx.drawImage(enemy8,this.x-12, this.y-10, this.shipwidth/5, this.shipheight/5);
        this.width = this.shipwidth/5;
        this.height = this.shipheight/5;
    }
      this.shoot();
    }
    takeDamage(damage) {
        this.health -= damage; 
    }
    shoot() {
        const speed = 5;
        let delay = 75;
        const damage = 1;
        const bulletX = this.x + this.width / 2;
        const bulletY = this.y;
        const name = "enemy";
        if(this.gamespeed % 1000 === 0){
            delay -= 5;
        }
        this.bulletController.shoot(bulletX, bulletY, speed, damage, delay,name);
    }
    move() { 
      if(this.path === 0){
        this.x +=this.speed;
        this.y +=0.2;
       
        if(this.x + this.width >= this.canvasWidth-20 ||
           this.x <=10){
           this.speed = -this.speed;
            }
           }
    if(this.path === 1){
     this.x +=this.speed;
     this.y +=0.1;
    
     if(this.x + this.width >= this.canvasWidth-20 ||
        this.x <=10){
        this.speed = -this.speed;
     }
    }
    if(this.path === 2){
        this.x +=this.speed;
        this.y +=0.17;
        if(this.x + this.width >= this.canvasWidth-20 ||
           this.x <=100){
           this.speed = -this.speed;
        }
       }
}
}
  