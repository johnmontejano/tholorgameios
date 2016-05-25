var gameStarted, jumpSpeed = 400, grav = 500, slow = 300, numJump, checkcolission, colorChange, nextColorIndex, currentIndex;
var fire, char, cloud, randomColor, speed = 8, firstJump;
var thunderRow1Left, thunderRow1Right,thunderRow1Middle,
    thunderRow2Left, thunderRow2Right,thunderRow2Middle, collisionCount;
var colors = ['66ff66','00ccff','ff6666'];
var score, scoreText;

boil.Play = function(){};

boil.Play.prototype = {
    preload: function(){
          game.load.spritesheet('fire', 'Assets/Backgrounds/fire.png', 290, 120);
          game.load.image('char', 'Assets/Backgrounds/tholorm.png');
          game.load.spritesheet('thunder', 'Assets/Backgrounds/thunder.png');
          game.load.image('char','Assets/Backgrounds/tholorm.png');
          game.load.image('galaxy', 'Assets/Backgrounds/galaxy.png');
          game.load.image('cloud', 'Assets/Backgrounds/cloud.png');
         
    },
    create: function() {
//        menu = new boil.Menu()
//        menu.create();
        collisionCount =0;
        firstJump = true;
        nextColorIndex = undefined;
        currentIndex = 1;
        colorChange = false;
        gameStarted = false;
        numJump = 0;
        galaxy=game.add.sprite(2,2,'galaxy');
        galaxy.scale.setTo(2.5,4);
        score = 0;
        scoreText=game.add.text(0,0, "score");
        game.physics.startSystem(Phaser.Physics.ARCADE);
        console.log('You are in the Play state');

        fire = game.add.sprite(0, 746, 'fire');
        fire.scale.setTo(1.5, 1);
        fire.anchor.y = 1;
        fire.animations.add('fire', [0, 1, 2, 3, 2, 1]);
        fire.animations.play('fire', 12, true);``
        game.input.onDown.add(this.jump);
        //cloud begins here 
        cloud = game.add.sprite(210,470,'cloud');
        cloud.scale.setTo(0.7,1);
        cloud.anchor.setTo(0.5);
        game.add.tween(cloud).to( { y: '+25' }, 500, 'Linear', true, 0, 0,true).loop(true);
        
            
        thunderRow1Right = game.add.sprite(320, -370, 'thunder');
        thunderRow1Right.anchor.setTo(0.5);
        thunderRow1Right.scale.setTo(0.5,1,3);
        thunderRow1Middle = game.add.sprite(200, -370, 'thunder');
        thunderRow1Middle.anchor.setTo(0.5);
        thunderRow1Middle.scale.setTo(0.5,1,3);
        thunderRow1Left = game.add.sprite(80, -370, 'thunder');
        thunderRow1Left.anchor.setTo(0.5);
        thunderRow1Left.scale.setTo(0.5,1,3);

        thunderRow2Right = game.add.sprite(320, 0, 'thunder');
        thunderRow2Right.anchor.setTo(0.5);
        thunderRow2Right.scale.setTo(0.5,1,3);
        thunderRow2Middle = game.add.sprite(200, 0, 'thunder');
        thunderRow2Middle.anchor.setTo(0.5);
        thunderRow2Middle.scale.setTo(0.5,1,3);
        thunderRow2Left = game.add.sprite(80, 0, 'thunder');
        thunderRow2Left.anchor.setTo(0.5);
        thunderRow2Left.scale.setTo(0.5,1,3);

        randomColor = this.randomColor;
        randomColor(thunderRow1Left, thunderRow1Right,thunderRow1Middle, thunderRow2Left, thunderRow2Right, thunderRow2Middle);

        char =game.add.sprite(210,390,'char');
        char.scale.setTo(2.5);
        char.anchor.setTo(0.5);
        
        game.physics.enable([char, thunderRow1Left, thunderRow1Right,thunderRow1Middle, thunderRow2Left, thunderRow2Right,thunderRow2Middle,fire], Phaser.Physics.ARCADE);
//        thunderRow1Left.body.moves = false;
//        thunderRow1Right.body.moves = false;
//        thunderRow1Middle.body.moves = false;
//        thunderRow2Left.body.moves = false;
//        thunderRow2Right.body.moves = false;
//        thunderRow2Middle.body.moves = false; 
        
        thunderRow1Left.body.checkCollision.down = false;
        thunderRow1Right.body.checkCollision.down = false;
        thunderRow1Middle.body.checkCollision.down = false;
        thunderRow2Left.body.checkCollision.down = false;
        thunderRow2Right.body.checkCollision.down = false;
        thunderRow2Middle.body.checkCollision.down = false; 
        
        thunderRow1Left.body.checkCollision.left = false;
        thunderRow1Right.body.checkCollision.left = false;
        thunderRow1Middle.body.checkCollision.left = false;
        thunderRow2Left.body.checkCollision.left = false;
        thunderRow2Right.body.checkCollision.left = false;
        thunderRow2Middle.body.checkCollision.left = false; 
        
        thunderRow1Left.body.checkCollision.right = false;
        thunderRow1Right.body.checkCollision.right = false;
        thunderRow1Middle.body.checkCollision.right = false;
        thunderRow2Left.body.checkCollision.right = false;
        thunderRow2Right.body.checkCollision.right = false;
        thunderRow2Middle.body.checkCollision.right = false;     
    },
    update: function() {
  
        
        if (thunderRow1Left.y > 780) {
            thunderRow1Left.y = -50;
            thunderRow1Middle.y = -50;
            thunderRow1Right.y = -50;
        }
        if (thunderRow2Left.y > 780) {
            thunderRow2Left.y = -50;
            thunderRow2Middle.y = -50;
            thunderRow2Right.y = -50;           
        }
        
        game.physics.arcade.collide(char, fire, this.collisionFireHandler);
        game.physics.arcade.collide(char, [thunderRow1Left, thunderRow1Right,thunderRow1Middle, thunderRow2Left, thunderRow2Right, thunderRow2Middle], this.collisionHandler);
        
   
    },
    jump: function() {
        colorChange = false;
        if (numJump >= 2 ){
            console.log("you can't jump anymore")
            return false 
            
        }
            
        if (!gameStarted) {
            gameStarted = true;
            char.body.gravity.y = grav;
            game.add.tween(cloud).to({ x: 800}, 200, 'Linear', true);
            
        }
        else if (game.input.x < 140) {
            game.add.tween(char).to( { x: 80}, 200, 'Linear', true);
           currentIndex = 0;
        }
        else if (game.input.x > 140 && game.input.x < 240 ){
            game.add.tween(char).to( { x: 210}, 200, 'Linear', true);
           currentIndex =1;
        }
        else if (game.input.x >240){
            game.add.tween(char).to( { x: 330}, 200, 'Linear', true);
            currentIndex = 2;
        }
        
        
    
        if (thunderRow1Right > char.y){
            console.log('row 2 is above char');
        }
        else if (thunderRow2Middle >char.y){
            console.log('row 3 is above char');
        }
        thunderRow1Left.body.velocity.y = grav - slow;
        thunderRow1Middle.body.velocity.y = grav - slow; 
        thunderRow1Right.body.velocity.y = grav - slow;
        thunderRow2Left.body.velocity.y = grav - slow;
        thunderRow2Middle.body.velocity.y = grav - slow; 
        thunderRow2Right.body.velocity.y = grav - slow;
        numJump =  numJump+ 1
        char.body.velocity.y= -jumpSpeed;
         score += 10;
        scoreText.text = 'Score : ' + score;
    },
    collisionHandler: function(char,fire) {
        if (score > 20 && collisionCount > 0 && nextColorIndex != currentIndex) {
            console.log('u dead');
            game.state.start('GameOver');
        }
        collisionCount++;
        if(!colorChange) {
            numJump = 0 
            console.log ('hit');
            
            nextColorIndex = Math.round(Math.random() * (colors.length - 1));
            char.tint = '0x'+ colors[nextColorIndex];
                
            randomColor(thunderRow1Left, thunderRow1Right,thunderRow1Middle, thunderRow2Left, thunderRow2Right, thunderRow2Middle);  
            
            if (nextColorIndex == 0) {
                thunderRow1Left.tint = '0x'+ colors[nextColorIndex];
                thunderRow2Left.tint = '0x'+ colors[nextColorIndex];
            } 
            else if (nextColorIndex == 1) {
                thunderRow1Middle.tint = '0x'+ colors[nextColorIndex];
                thunderRow2Middle.tint = '0x'+ colors[nextColorIndex];
            }
            else if (nextColorIndex == 2) {
                thunderRow1Right.tint = '0x'+ colors[nextColorIndex];
                thunderRow2Right.tint = '0x'+ colors[nextColorIndex];
            }
            
            firstJump = false;
        }
        collisionCount = 0;
        colorChange = true;
    },
    randomColor: function(){
        for (var i = 0; i < 6; i++) {
            arguments[i].tint = '0x' + colors[Math.round(Math.random() * (colors.length - 1))];
        } 
    },
    collisionFireHandler: function(char,fire) {
        console.log("i'm hitting fire");
        changeState('GameOver');
        
    
    
    }
};
