import Player from "./Player.js";
import EnemyPlayer from "./EnemyPlayer.js";
import Enemy from "./Enemy.js";
import BulletController from "./BulletController.js";
import EnemyBulletController from "./EnemyBulletController.js";
import explosion from "./explosion.js";

alert("Space Shooter Game\nInstructions: Use arrow keys to move and space bar to shoot, enjoy!!!")
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 750;
canvas.height = 900;

let path = Math.floor(Math.random() * 3);
let type = Math.floor(Math.random() * 7);
const bulletController = new BulletController(canvas);
const enemybulletController = new EnemyBulletController(canvas);
const explosions = [];
// const player = new Player(
//   canvas.width / 2.2,
//   canvas.height / 1.3,
//   bulletController,
//   1
// );
const MainChar = [
  new Player(
    canvas.width / 2.2,
    canvas.height / 1.3,
    bulletController,
    3
  )
];
// const enemyplayer = new EnemyPlayer(
//   canvas.width / 2.2,
//   25,
//   enemybulletController,path,
//   canvas.width,
//   canvas.height,
//   5
// );
let gamespeed = 2;
const enemies = [
  new EnemyPlayer(
    canvas.width / 2.2,
    25,
    enemybulletController,path,
    canvas.width,
    canvas.height,
    2,
    type,
    gamespeed
  )
];
const background1 = new Image();
const background2 = new Image();
const background3 = new Image();
background1.src = "Dynamic Space Background/Nebula Red.png";
background2.src = "Dynamic Space Background/Stars Small_1.png";
background3.src = "Dynamic Space Background/Stars-Big_1_1_PC.png";

  const BG = {
    y1: 0,
    y2: canvas.height,
    y3: 0,
    y4: canvas.height,
    y5: 0,
    y6: canvas.height,
    y:0,
    width: canvas.width,
    height: canvas.height
}
function holdBackground() {
  if(BG.y1 < -BG.height) BG.y1 = BG.height;
    else {BG.y1 -= 0.7;}
  if(BG.y2 < -BG.height) BG.y2 = BG.height;
    else {BG.y2 -= 0.7;}  
    if(BG.y3 < -BG.height) BG.y3 = BG.height;
    else {BG.y3 -= 0.9;}
  if(BG.y4 < -BG.height) BG.y4 = BG.height;
    else {BG.y4 -= 0.9;}  
    if(BG.y5 < -BG.height) BG.y5 = BG.height;
    else {BG.y5 -= 2.0;}
  if(BG.y6< -BG.height) BG.y6 = BG.height;
    else {BG.y6 -= 2.0;} 
    ctx.drawImage(background1,0, BG.y1, BG.width, BG.height);
    ctx.drawImage(background1,0, BG.y2, BG.width, BG.height);
    ctx.drawImage(background2,0, BG.y3, BG.width, BG.height);
    ctx.drawImage(background2,0, BG.y4, BG.width, BG.height);
    ctx.drawImage(background3,0, BG.y5, BG.width, BG.height);
    ctx.drawImage(background3,0, BG.y6, BG.width, BG.height);    
  }
function animate(){
  for(let i=0;i<explosions.length;i++){
    explosions[i].update();
    explosions[i].draw(ctx);
    if(explosions[i].frameX > 5){
      explosions.splice(i,1);
      i--;
    }
  }
  requestAnimationFrame(animate);
};
let gameover = false;
let score = 0;
let lives = 3;
function gameLoop() {
  if(!gameover){
  holdBackground();
  gamespeed++;
  // ctx.fillStyle = "black";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  bulletController.draw(ctx);
  enemybulletController.draw(ctx);
  enemies.forEach((enemy) => {
    if (bulletController.collideWith(enemy)) {
      if (enemy.health <= 0) {
        const index = enemies.indexOf(enemy);
        enemies.splice(index, 1);
        explosions.push(new explosion(enemy.x , enemy.y));
        animate();
        delete enemies[index];
        score++;
      }
    } else {  
      if(enemy.y < canvas.height){
        enemy.draw(ctx); 
      }
    }
  });
  MainChar.forEach((player) => {
    if (enemybulletController.collideWith(player)) {
      lives--;
      if (player.health <= 0) {
        const index = MainChar.indexOf(player);
        MainChar.splice(index, 1);
        explosions.push(new explosion(player.x,player.y));
        animate();
        gameover = true;
      }
    } else {
      player.draw(ctx);
    }
  });
  
  if(gamespeed % 200 === 0 & enemies.length < 10){
    enemies.push(new EnemyPlayer(
      Math.floor(Math.random() * 550 + 50),
      -50,
      enemybulletController,
      Math.floor(Math.random() * 3),
      canvas.width,
      canvas.height,
      5,
      Math.floor(Math.random() * 7),
      gamespeed
    ));
  }
  if(gamespeed % 1500 === 0 & enemies.length < 7){
    enemies.push(new EnemyPlayer(
      Math.floor(Math.random() * 550 + 100),
      -50,
      enemybulletController,
      Math.floor(Math.random() * 3),
      canvas.width,
      canvas.height,
      5,
      Math.floor(Math.random() * 7),
      gamespeed
    ));
    enemies.push(new EnemyPlayer(
      Math.floor(Math.random() * 550 + 50),
      -50,
      enemybulletController,
      Math.floor(Math.random() * 3),
      canvas.width,
      canvas.height,
      5,
      Math.floor(Math.random() * 7),
      gamespeed
    ));
  }
  ctx.fillStyle = 'white';
  ctx.font = "bold 32px serif";
  ctx.fillText('Score: ' + score ,canvas.width/24,canvas.height/20);
  ctx.fillText('Health: ' + lives ,canvas.width/4.4,canvas.height/20);
  requestAnimationFrame(gameLoop);
}  else{
  ctx.fillStyle = 'white';
  ctx.font = "bold 48px serif";
  ctx.fillText('GAME OVER',canvas.width/3.2,canvas.height/2.2);
  // ctx.fillText('Score:' + score ,canvas.width/2.5,canvas.height/2);
}
}
gameLoop();
animate();

  // setInterval(gameLoop, 1000);



