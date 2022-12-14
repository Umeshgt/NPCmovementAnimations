/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000
const numberOFEnemies = 10
const enemiesArray = []

let gameFrame = 0

class Enemy {
    constructor() {
        this.image = new Image()
        this.image.src = "enemy1.png"
        //this.speed = Math.random() * 4 - 2
        this.spriteWidth = 293
        this.spriteHeight = 155
        this.width = this.spriteWidth / 2.5  //  Math.random() * 3 + 1.5
        this.height = this.spriteHeight /  2.5 
        this.x = Math.random() * (canvas.width - this.width)  // fixes its position within the canvas
        this.y = Math.random() * (canvas.height - this.height)
        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 2 + 1)
    }
    update(){
        this.y += Math.random() * 7 - 3.5
        this.x += Math.random() * 7 - 3.5   // letting it move around randomlly
        // animate sprites
        if (gameFrame % this.flapSpeed === 0){      // manipulates flapping wings  
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
    }
    draw(){
       ctx.drawImage(this.image, this.frame*this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height) 
    }
}

for (let i = 0; i< numberOFEnemies; i++){
    enemiesArray.push(new Enemy())
}

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    enemiesArray.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })
    gameFrame++

    requestAnimationFrame(animate)
}

animate()