export default class Bullet {
    //   colors = [
    //     "red",
    //     "blue",
    //     "red",
    //     "green",
    //     "yellow",
    //     "orange",
    //     "purple",
    //     "pink",
    //     "brown",
    //     "grey",
    //   ];
    constructor(x, y, speed, damage,name) {
      this.x = x;
      this.y = y;
      this.bulletShot = this.y;
      this.speed = speed;
      this.damage = damage;
      this.bulletWidth=67;
      this.bulletHeight=167;
      this.name = name;
  
      this.width = 5;
      this.height = 15;
      // this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }
    draw(ctx) {
      const bullet1 = new Image();
      const bullet2 = new Image();
      bullet1.src = "Projectiles/Variation D/Projectile_2_D.png";
      bullet2.src = "Projectiles/Variation A/Projectile_7_A.png";    
      ctx.fillStyle = this.color;
        this.y -= this.speed;
        ctx.drawImage(bullet1,this.x-13, this.y, this.bulletWidth/ 2.5, this.bulletHeight/2); 
        
      // ctx.fillRect(this.x, this.y, this.width, this.height);
       
    }
    collideWith(sprite) {
      if (
        this.x < sprite.x + sprite.width &&
        this.x + this.width > sprite.x &&
        this.y < sprite.y + sprite.height &&
        this.y + this.height > sprite.y
      ) {
        sprite.takeDamage(this.damage);
        return true;
      }
      return false;
    }
  }