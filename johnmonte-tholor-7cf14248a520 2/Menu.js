var play, leaderboard, ref, itemHS;
boil.Menu = function(){};

ref = new Firebase('https://tholor.firebaseio.com/');
ref.on('value', function(item) {
    itemHS = item.val().hs;
});


boil.Menu.prototype = {
    preload: function(){
        game.load.image('leaderboard', 'Assets/Backgrounds/leaderboard.png');
        game.load.image('play', 'Assets/Backgrounds/playbutton.png');
        game.load.image('galaxy', 'Assets/Backgrounds/galaxy.png');

       
    },
    create: function(){
        console.log('You are in the Menu state');
        galaxy=game.add.sprite(2,2,'galaxy');
         var style = { font: "100px Cursive", fill: "#660000", align: "center" };

    var text = game.add.text(150, 150, "Tholor", style);

        
        galaxy.scale.setTo(1,2);
        game.add.button(130, 480, 'leaderboard', this.startHighScore);
        game.add.button(120, 250, 'play', startGame);
       
    },
    update: function() {
     
    },
   
    startHighScore: function(){
        game.state.start('hs')
    }
}


function startGame(){
    game.state.start('Play')
}

