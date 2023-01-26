const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var player1, player1X, player1Y, player2X = 100, player2Y = 150, playerSpeed = 5
var ground, ground2, ground3, ground4, ground5, button1, button2, button3, wall1, wall2
var face, bg, ist1, ist2, ist3, ist4, music, music2, music3, music4, music5, zap, win, ist
var lazers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var laser1IsTrue = true, laser2IsTrue = true, wallIsTrue = true, wall2IsTrue = true, laser1Active = true, laser2Active = true, laser3Active = true, laser4Active = true
var level = 0, timer = 60, timertimer = 0, gameState = "menu"
var but1 = true, but2 = true, but3 = true, but4 = true, but5 = true
var timer1 = 0, timer2 = 0, timer3 = 0, timer4 = 0
var musicSlider = 2, musicVolume, sfxSlider, sfxVolume, timerImp, setTimer = 60


function preload()
{
	face = loadImage("smile.png")
  bg = loadImage("bg.jpg")
  ist1 = loadImage("p1c.png")
  ist2 = loadImage("p2c.png")
  ist3 = loadImage("Arrow1.png")
  ist4 = loadImage("instruction1.png")
  music = loadSound("Eric Skiff - A Night Of Dizzy Spells ♫ NO COPYRIGHT 8-bit Music + Background.wav")
  music2  = loadSound("Joshua McLean - Mountain Trials ♫ NO COPYRIGHT 8-bit Music.wav")//there was a diferent song here but the file was too large to upload.
  music3 = loadSound("Joshua McLean - Mountain Trials ♫ NO COPYRIGHT 8-bit Music.wav")
  music4 = loadSound("AdhesiveWombat - Night Shade ♫ NO COPYRIGHT 8-bit Music.wav")
  music5 = loadSound("music2 Can't Stop Won't Stop.mp3")
  zap = loadSound("zap.wav")
  win = loadImage("win.gif")
  ist = loadImage("instructions.png")

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  opts = 
  {
    restitution: 1,
    frictionAir: 0.1
  }

  flor = 
  {
    isStatic: true
  }

  //create bodys
  wall1 = Bodies.rectangle(-5, 300, 5, 999, flor)
  World.add(world, wall1)
  wall2 = Bodies.rectangle(805, 300, 5, 999, flor)
  World.add(world, wall2)
  player1 = Bodies.rectangle(500, 300, 40, 40, opts)
  World.add(world, player1)
  ground = Bodies.rectangle(400, 690, 800, 20, flor)
  World.add(world, ground)
  ground2 = Bodies.rectangle(600, 400, 800, 20, flor)
  World.add(world, ground2)
  ground3 = Bodies.rectangle(200, 350, 30, 100, flor)
  World.add(world, ground3)
  ground4 = Bodies.rectangle(400, 550, 30, 300, flor)
  World.add(world, ground4)
  button1 = Bodies.rectangle(300, 390, 50, 10, flor)
  World.add(world, button1)
  button2 = Bodies.rectangle(60, 680, 50, 10, flor)
  World.add(world, button2)
  lazers[1] = new createObject(false, true, 500, 200, 1000, 10, false, true, false, undefined, 0, 0, true);
  lazers[2] = new createObject(false, true, 200, 350, 10, 1000, false, true, false, undefined, 0, 0, true);


	Engine.run(engine);

  sfxSlider = createSlider(0, 10, 2);
  sfxSlider.position(70, 217);
  volumeSlider = createSlider(0, 10, 2);
  volumeSlider.position(70, 237);

  timerImp = createInput("60")
  timerImp.position(75, 260);
  timerImp.size(50);

  musicVolume = 0.2
  music.play()
}


function draw() {
  border()
  rectMode(CENTER);
  imageMode(CENTER)
  background("gray");
  textAlign(CENTER)

  image(bg, 800/2, 700/2, 800, 700)

  push()
  fill("lime")
  rect(750, 580, 100, 200)
  pop()

  textSize(32)
  fill("white")
  text(timer, 50, 50);

  textSize(32)
  fill("white")
  text("level: " + level, 700, 50);
  if(level == 0)
  {
    sfxVolume = sfxSlider.value()
    musicVolume = volumeSlider.value()
    setTimer = timerImp.value()

    push()
    fill("gray")
    rect(0, 0, 9999, 9999)
    textSize(50)
    fill("blue")
    text("Blue Boy", 200, 100);
    fill("white")
    text("and", 400, 100);
    fill("red")
    text("Red Guy", 600, 100);
    pop()

    push()
    fill("blue")
    rect(50, 70, 60, 60, 100)
    image(face, 50+15, 70-4, 50*2, 50*2)
    pop()

    push()
    rotate(0.2)
    fill("red")
    rect(740, -70, 60, 60)
    image(face, 740+10, -70-5, 50*2, 50*2)
    pop();

    push()
    fill("yellow")
    rect(600, 350, 270, 100, 15)
    pop()

    push()
    fill("yellow")
    rect(600, 500, 270, 100, 15)
    pop()

    push()
    fill("yellow")
    rect(600, 200, 270, 100, 15)
    pop()

    push()
    fill("black")
    text("Play level 2", 600, 350);
    pop()

    push()
    fill("black")
    text("Play level 1", 600, 200);
    pop()

    push()
    fill("black")
    text("Play level 3", 600, 500);
    pop()

    if(mouseIsPressed)
    {
    if(mouseX >= 600-(270/2)
    && mouseX <= 600+(270/2)
    && mouseY >= 350-(100/2)
    && mouseY <= 350+(100/2))
    {
      gameState = "play"
      setuplevel2()
      level = 2
      music.stop()
      music3.play()
      sfxSlider.remove()
      volumeSlider.remove()
      timerImp.remove()

    }
    }

    if(mouseIsPressed)
    {
    if(mouseX >= 600-(270/2)
    && mouseX <= 600+(270/2)
    && mouseY >= 200-(100/2)
    && mouseY <= 200+(100/2))
    {
      gameState = "play"
      level = 1
      music.stop()
      music2.play()
      timer = setTimer
      sfxSlider.remove()
      volumeSlider.remove()
      timerImp.remove()
    }
    }

    if(mouseIsPressed)
    {
    if(mouseX >= 600-(270/2)
    && mouseX <= 600+(270/2)
    && mouseY >= 500-(100/2)
    && mouseY <= 500+(100/2))
    {
      gameState = "play"
      setuplevel2()
      setuplevel3_2()
      level = 3
      music.stop()
      music4.play()
      sfxSlider.remove()
      volumeSlider.remove()
      timerImp.remove()
    }
    }

    push()
    textSize(32)
    fill("white")
    text("Settings", 100, 200);
    textSize(16)
    text("sfx", 50, 230);
    text("music", 50, 250);
    text("timer", 50, 280);
    pop()

    //istructions
    push()
    fill("white")
    rect(200, 500, 270, 100, 15)
    pop()

    push()
    fill("black")
    text("Instructions", 200, 500);
    pop()

    if(mouseIsPressed)
    {
    if(mouseX >= 200-(270/2)
    && mouseX <= 200+(270/2)
    && mouseY >= 500-(100/2)
    && mouseY <= 500+(100/2))
    {
      gameState = "Instructons"
      sfxSlider.remove()
      volumeSlider.remove()
      timerImp.remove()
    }
    }
  }
  if(gameState == "Instructons")
  {
    push()
    fill("gray")
    rect(0, 0, 9999, 9999)
    pop()

    image(ist, 400, 350, 450, 550)

    push()
    fill("white")
    rect(100, 600, 270/2, 100/2, 15)
    pop()

    push()
    fill("black")
    text("back", 100, 610);
    pop()
    if(mouseIsPressed)
    {
    if(mouseX >= 100-(270/4)
    && mouseX <= 100+(270/4)
    && mouseY >= 620-(100/4)
    && mouseY <= 620+(100/4))
    {
      gameState = "menu"
      sfxSlider = createSlider(0, 10, 2);
      sfxSlider.position(70, 217);
      volumeSlider = createSlider(0, 10, 2);
      volumeSlider.position(70, 237);
    
      timerImp = createInput("60")
      timerImp.position(75, 260);
      timerImp.size(50);
    }
    }
  }

  music.setVolume(musicVolume/10)
  music2.setVolume(musicVolume/10)
  music3.setVolume(musicVolume/10)
  music4.setVolume(musicVolume/10)
  music5.setVolume(musicVolume/10)

  if(level == 1)
  {

    if(player1X > 650
    && player1Y > 480
    && player2X > 650
    && player2Y > 480)
   {
    console.log("test")
    setuplevel2()
    level = 2
    music2.stop()
    music3.play()
   }
  //tetoral
  image(ist1, 500, 300, 100, 100)
  image(ist2, 100, 100, 100, 100)
  image(ist3, 300, 350, 150, 150)
  image(ist4, 350, 130, 100, 100)
  image(ist3, 250, 170, 150, 150)
  if(laser1IsTrue === false)
  {
    image(ist3, 600, 50, 150, 150)
  }
  
  //buton
  //rect(300, 360, 100, 30)
  if(player1.position.x < 400
  && player1.position.x > 200)
  {
    laser1IsTrue = false
    console.log("test")
  }
  //button2
  push()
  if(wallIsTrue == true)
  {fill("yellow")}
  else
  {fill("brown")}
  rect(600, 100, 70, 70)
  pop()
  if(player2X < 670
  && player2X > 530 //wallIsTrue = false
  && player2Y < 170
  && player2Y > 30)
    {
      //laser2IsTrue = false
      push()
      Matter.World.remove(world, ground3);
      delete ground3;
      console.log("test")
      wallIsTrue = false
      pop()
    }

      //button2
  push()
  fill("yellow")
  pop()
  if(player1X > 20
  && player1X < 150
  && player1Y > 300)
    {
      laser2IsTrue = false

      //laser2IsTrue = false
      // push()
      // Matter.World.remove(world, ground4);
      // delete ground4;
      // console.log("test")
      // wall2IsTrue = false
      // pop()
    }

    push()
    if(wall2IsTrue == true)
    {fill("yellow")}
    else
    {fill("brown")}
    rect(600, 500, 70, 70)
    pop()
    if(player2X < 670
      && player2X > 530
      && player2Y < 570
      && player2Y > 430)
        {
          //laser2IsTrue = false
          push()
          Matter.World.remove(world, ground4);
          delete ground4;
          console.log("test")
          wall2IsTrue = false
          pop()
        }

  //obsticals
  push()
  fill("red")
  if(laser2IsTrue === true)
  {
  lazers[1].update()
  }
  if(laser1IsTrue === true)
  {
  lazers[2].update()
  }
  pop()


  //grownd
  rect(ground2.position.x, ground2.position.y, 800, 20)
  if(wallIsTrue === true)
  {
  rect(ground3.position.x, ground3.position.y, 20, 200)
  }
  if(wall2IsTrue === true)
  {
  rect(ground4.position.x, ground4.position.y, 20, 300)
  }
  push()
  if(laser1IsTrue == true)
  {fill("yellow")}
  else
  {fill("brown")}
  rect(button1.position.x, button1.position.y, 50, 10)
  if(laser2IsTrue == true)
  {fill("yellow")}
  else
  {fill("brown")}
  rect(button2.position.x, button2.position.y, 50, 10)
  pop()
  }
  else if(level == 2)
  {
    if(laser4Active == true)
    {
    push()
    fill("red")
    lazers[5].update()
    pop()
    }
  
    push()
    fill("yellow")
    rect(button1.position.x, button1.position.y, 50, 10)
    rect(button2.position.x, button2.position.y, 50, 10)
    rect(button3.position.x, button3.position.y, 50, 10)
    pop()
 
    if(laser1Active == true)
    {
    push()
    fill("red")
    lazers[4].update()
    pop()
    }

    if(laser2Active == true)
    {
    push()
    fill("red")
    lazers[3].update()
    pop()
    }

    if(laser3Active == true)
    {
    push()
    fill("red")
    lazers[6].update()
    pop()
    }

    if(player1X > 20
    && player1X < 150)
      {
        laser1Active = false
      }
      else
      {
        laser1Active = true
      }

    if(player1X > 220
    && player1X < 400)
      {
        laser2Active = false
      }
      else
      {
        laser2Active = true
      }

    if(player1X > 520
    && player1X < 600)
      {
        laser3Active = false
      }
      else
      {
        laser3Active = true
      }

      push()
      if(but1 == false)
      {
        fill("brown")
      }
      else
      {
        fill("yellow")
      }
      rect(600, 100, 70, 70)
      pop()
      if(player2X > 530
      && player2X < 670
      && player2Y > 30
      && player2Y < 170)
      {
        but1 = false
      }

      push()
      if(but5 == false)
      {
        fill("brown")
      }
      else
      {
        fill("yellow")
      }
      rect(400, 100, 70, 70)
      pop()
      if(player2X > 330
      && player2X < 470
      && player2Y > 30
      && player2Y < 170)
      {
        but5 = false
      }

      push()
      if(but2 == false)
      {
        fill("brown")
      }
      else
      {
        fill("yellow")
      }
      rect(100, 300, 70, 70)
      pop()
      if(player2X > 30
      && player2X < 170
      && player2Y > 230
      && player2Y < 370)
      {
        but2 = false
      }

      push()
      if(but3 == false)
      {
        fill("brown")
      }
      else
      {
        fill("yellow")
      }
      rect(400, 300, 70, 70)
      pop()
      if(player2X > 330
      && player2X < 470
      && player2Y > 230
      && player2Y < 370)
      {
        but3 = false
      }

      push()
      if(but4 == false)
      {
        fill("brown")
      }
      else
      {
        fill("yellow")
      }
      rect(600, 300, 70, 70)
      pop()
      if(player2X > 530
      && player2X < 670
      && player2Y > 230
      && player2Y < 370)
      {
        but4 = false
      }

      if(but1 == false
      && but2 == false
      && but3 == false
      && but4 == false
      && but5 == false
      && but5 == false)
      {
        laser4Active = false
      }

      if(player1X > 650
        && player1Y > 480
        && player2X > 650
        && player2Y > 480)
       {
        console.log("test")
        level = 3
        player2X = 100
        player2Y = 100
        timertimer = 0
        timer = setTimer
        setuplevel3()
        music3.stop()
        music4.play()
       }

  }
  else if(level == 3)
  {
    let fps = int(getFrameRate())

    push()
    fill("red")
    if(laser1Active) 
    {
    lazers[7].update()
    }
    if(laser2Active) 
    {
    lazers[8].update()
    }
    if(but1 == false
    && but2 == false
    && but3 == false
    && but4 == false)
    {
      console.log("test")
      level = 4
      timertimer = 0
      timer = setTimer
      music4.stop()
      music5.play()
    }
    lazers[9].update()
    pop()

    push()
    fill("yellow")
    rect(button2.position.x, button2.position.y, 50, 10)
    rect(button3.position.x, button3.position.y, 50, 10)
    pop()

    push()
    fill("yellow")
    push()
    if(but1 == false){fill("brown")}
    rect(200, 100, 70, 70)
    pop()
    push()
    if(but2 == false){fill("brown")}
    rect(500, 100, 70, 70)
    pop()
    push()
    if(but3 == false){fill("brown")}
    rect(200, 300, 70, 70)
    pop()
    push()
    if(but4 == false){fill("brown")}
    rect(500, 300, 70, 70)
    pop()
    pop()

    if(player1X > 20
      && player1X < 150)
      {
        laser1Active = false
      }
      else
      {
        laser1Active = true
      }
  
      if(player1X > 520
      && player1X < 700)
      {
        laser2Active = false
      }
      else
      {
        laser2Active = true
      }

      if(player2X > 130
      && player2X < 370
      && player2Y > 30
      && player2Y < 170)
      {
        but1 = false
        timer1 = 0
      }
      if(but1 == false)
      {
        timer1 += 1
        if(timer1 >= fps * 10)
        {
          timer1 = 0
          but1 = true
        }
      }

      if(player2X > 430
      && player2X < 670
      && player2Y > 30
      && player2Y < 170)
      {
        but2 = false
        timer2 = 0
      }
      if(but2 == false)
      {
        timer2 += 1
        if(timer1 >= fps * 10)
        {
          timer2 = 0
          but2 = true
        }
      }

      if(player2X > 130
      && player2X < 370
      && player2Y > 230
      && player2Y < 470)
      {
        but3 = false
        timer3 = 0
      }
      if(but3 == false)
      {
        timer3 += 1
        if(timer3 >= fps * 10)
        {
          timer3 = 0
          but3 = true
        }
      }

      if(player2X > 430
      && player2X < 670
      && player2Y > 230
      && player2Y < 470)
      {
        but4 = false
        timer4 = 0
      }
      if(but4 == false)
      {
        timer4 += 1
        if(timer4 >= fps * 10)
        {
          timer4 = 0
          but4 = true
        }
      }
  }

  rect(ground.position.x, ground.position.y, 800, 20)
  rect(wall1.position.x, wall1.position.y, 10, 999)
  rect(wall2.position.x, wall2.position.y, 10, 999)

  player1X = player1.position.x
  player1Y = player1.position.y

  if(gameState == "play")
  {
    playerControler1()
    playerControler2()
    
    let fps = int(getFrameRate())
    timertimer += 1
    if(timertimer >= fps)
    {
      timertimer = 0
      timer -= 1
    }
    if(timer == 0)
    {
      reset()
    }

    //players
    push()
    fill("blue")
    rect(player2X, player2Y, 30, 30, 100)
    image(face, player2X+8, player2Y-2, 50, 50)
    pop()

    push()
    fill("red")
    rect(player1.position.x, player1.position.y, 40, 40)
    image(face, player1.position.x+10, player1.position.y-5, 70, 70)
    pop();
  }
  else if(gameState == "menu" || gameState == "Instructons")
  {

  }
  else
  {
    textSize(32)
    fill("white")
    text("you died, click to restart", 400, 350);
    if (mouseIsPressed === true) 
    {
      window.location.reload()
    }
  }
  if(level == 4)
  {
    fill("gray")
    rect(400, 400, 999, 999)
    textSize(32)
    fill("black")
    //image(win, 400, 350, 20)
    gameState = "win"
    image(win, 400, 350, 800, 700)
    text("you win!, click to go to menu", 400, 100);
    text("note: wait for the music", 400, 640);
  }

  Engine.update(engine)
}

function playerControler1()
{
  //arrow keys
  //if(keyIsDown(LEFT_ARROW)) {playerX -= playerSpeed};
  //if(keyIsDown(RIGHT_ARROW)) {playerX += playerSpeed};
  //if(keyIsDown(UP_ARROW)) {playerY -= playerSpeed};
  //if(keyIsDown(DOWN_ARROW)) {playerY += playerSpeed};

  // A S W D
  if(keyIsDown(87)) {player2Y -= playerSpeed};
  if(keyIsDown(83)) {player2Y += playerSpeed};
  if(keyIsDown(65)) {player2X -= playerSpeed};
  if(keyIsDown(68)) {player2X += playerSpeed};
}


function playerControler2()
{
  //arrow keys
  //if(keyIsDown(LEFT_ARROW)) {playerX -= playerSpeed};
  //if(keyIsDown(RIGHT_ARROW)) {playerX += playerSpeed};
  //if(keyIsDown(UP_ARROW)) {playerY -= playerSpeed};
  //if(keyIsDown(DOWN_ARROW)) {playerY += playerSpeed};

  // A S W D
  if(keyIsDown(74)) {Matter.Body.applyForce(player1, {x:0, y:0}, {x:-0.001, y:0})};
  if(keyIsDown(76)) {Matter.Body.applyForce(player1, {x:0, y:0}, {x:0.001, y:0})};
  //if(keyIsDown(73)) {Matter.Body.applyForce(player1, {x:0, y:0}, {x:0, y:0.01})};//????????
}

function border()
{
  if(player2X < 5)
  {
    player2X += 5
  }
  else if(player2X > 795)
  {
    player2X -= 5
  }
  else if(player2Y < 5)
  {
    player2Y += 5
  }
  else if(player2Y > 695)
  {
    player2Y -= 5
  }
}


function reset()
{
  gameState = "lose"
}

function setuplevel2()
{
  Matter.World.remove(world, ground4);
  delete ground4;
  Matter.World.remove(world, ground3);
  delete ground3;
  Matter.World.remove(world, ground2);
  delete ground2;
  Matter.World.remove(world, button1);
  delete button1;
  Matter.World.remove(world, button2);
  delete button2;
  lazers[3] = new createObject(false, true, 500, 200, 1000, 10, false, true, false, undefined, 0, 0, true);
  lazers[4] = new createObject(false, true, 200, 0, 10, 800, false, true, false, undefined, 0, 0, true);
  lazers[6] = new createObject(false, true, 500, 0, 10, 800, false, true, false, undefined, 0, 0, true);
  lazers[5] = new createObject(false, true, 500, 400, 1000, 10, false, true, false, undefined, 0, 0, true);
  button1 = Bodies.rectangle(600, 680, 50, 10, flor)
  World.add(world, button1)
  button2 = Bodies.rectangle(60, 680, 50, 10, flor)
  World.add(world, button2)
  button3 = Bodies.rectangle(330, 680, 50, 10, flor)
  World.add(world, button3)
  player2X = 100
  player2Y = 100
  timertimer = 0
  timer = setTimer


}

function setuplevel3()
{
  lazers[7] = new createObject(false, true, 400, 200, 1000, 10, false, true, false, undefined, 0, 0, true);
  lazers[8] = new createObject(false, true, 400, 200, 10, 400, false, true, false, undefined, 0, 0, true);
  lazers[9] = new createObject(false, true, 400, 400, 1000, 10, false, true, false, undefined, 0, 0, true);
  Matter.World.remove(world, button2);
  delete button2;
  Matter.World.remove(world, button3);
  delete button3;
  button2 = Bodies.rectangle(60, 680, 50, 10, flor)
  World.add(world, button2)
  button3 = Bodies.rectangle(600, 680, 50, 10, flor)
  World.add(world, button3)
  but1 = true
  but2 = true
  but3 = true
  but4 = true

}

function setuplevel3_2()
{ 
  lazers[7] = new createObject(false, true, 400, 200, 1000, 10, false, true, false, undefined, 0, 0, true);
  lazers[8] = new createObject(false, true, 400, 200, 10, 400, false, true, false, undefined, 0, 0, true);
  lazers[9] = new createObject(false, true, 400, 400, 1000, 10, false, true, false, undefined, 0, 0, true);
  button2 = Bodies.rectangle(60, 680, 50, 10, flor)
  World.add(world, button2)
  button3 = Bodies.rectangle(600, 680, 50, 10, flor)
  World.add(world, button3)
  but1 = true
  but2 = true
  but3 = true
  but4 = true
}
