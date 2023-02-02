export default class explosion{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.frameX = 0;
        this.timer = 0;
        this.spriteWidth = 690;
        this.spriteHeight= 584;
        this.width = this.spriteWidth * 0.7;
        this.height = this.spriteHeight * 0.7;
    }
    update(){
        this.timer++;
        if(this.timer % 10 === 0){
            this.frameX++;
        }
    }
    draw(ctx){
        const boom = new Image();
        boom.src ="boom.png";
        ctx.drawImage(boom,this.spriteWidth *this.frameX,
            0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width/4,this.height/4);
    }
}