export default class Player {
    constructor(x, y, bulletController,health) {
      this.x = x;
      this.y = y;
      this.bulletController = bulletController;
      this.width = 50;
      this.height = 50;
      this.speed = 4;
      this.shipwidth =1507;
      this.shipheight =1507;
      this.boostwidth =1507;
      this.boostheight =1507;
      this.health = health;
  

      document.addEventListener("keydown", this.keydown);
      document.addEventListener("keyup", this.keyup);
    }
  
    draw(ctx) {
        const bida = new Image();
        const boost = new Image();
        const boost2 = new Image();  
        bida.src = "Ships & Missiles/Variation_C/2x/Ship_7_C_Large.png";
        boost.src = "Projectiles/Variation D/Projectile_5_D.png";
        boost2.src =  "Projectiles/Variation D/Projectile_2_D.png";
      this.move();
    //   ctx.strokeStyle = "yellow";
    //   ctx.strokeRect(this.x, this.y, this.width, this.height);
    //   ctx.fillStyle = "black";
    //   ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(boost2,this.x+1, this.y+37, this.boostwidth/30, this.shipheight/25);
      ctx.drawImage(bida,this.x-12, this.y-10, this.shipwidth/20, this.shipheight/20);
        if(this.upPressed){
            ctx.drawImage(boost,this.x-12, this.y+37, this.boostwidth/20, this.shipheight/17);
            ctx.drawImage(bida,this.x-12, this.y-10, this.shipwidth/20, this.shipheight/20);
        }
      this.shoot();
    }
    takeDamage(damage) {
      this.health -= damage;
    }
    shoot() {
      if (this.shootPressed) {
        const speed = 5;
        const delay = 20; 
        const damage = 1;
        const bulletX = this.x + this.width / 2;
        const bulletY = this.y;
        const name = "player";
        this.bulletController.shoot(bulletX, bulletY, speed, damage, delay,name);
      }
    }
  
    move() {
      if (this.downPressed && this.y <810) {
        this.y += this.speed;
      }
      if (this.upPressed && this.y > 350) {
        this.y -= this.speed;
      }
      if (this.leftPressed && this.x > 10) {
        this.x -= this.speed;
      }
  
      if (this.rightPressed && this.x < 682) {
        this.x += this.speed;
      }
    }
  
    keydown = (e) => {
      if (e.code === "ArrowUp") {
        this.upPressed = true;
      }
      if (e.code === "ArrowDown") {
        this.downPressed = true;
      }
      if (e.code === "ArrowLeft") {
        this.leftPressed = true;
      }
      if (e.code === "ArrowRight") {
        this.rightPressed = true;
      }
      if (e.code === "Space") {
        this.shootPressed = true;
      }
    };
  
    keyup = (e) => {
       
      if (e.code === "ArrowUp") {
        this.upPressed = false;
      }
      if (e.code === "ArrowDown") {
        this.downPressed = false;
      }
      if (e.code === "ArrowLeft") {
        this.leftPressed = false;
      }
      if (e.code === "ArrowRight") {
        this.rightPressed = false;
      }
      if (e.code === "Space") {
        this.shootPressed = false;
      }
    };
  }