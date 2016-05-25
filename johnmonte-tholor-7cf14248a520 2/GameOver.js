boil.GameOver = function(){};
boil.GameOver.prototype = {
    preload: function(){
       game.load.image('home', 'Assets/Backgrounds/home.png');



    },
    create: function(){
        console.log('You are in the GameOver state');
        game.stage.backgroundColor = '#0000FF';
        scoreText=game.add.text(20,20, 'GameOver');
        scoreText.text = 'Score : ' + score;
        game.add.button(120, 250, 'play', startGame);
        game.add.button(0, 400, 'home', startMenu)
        
        itemHS.push(score);
        itemHS.sort(function(a, b) {
            return b - a;
        });
        itemHS = itemHS.slice(0, 10);

        console.log(itemHS);
//        game.time.events.add(5000, function() {
            ref.set({hs: itemHS});
//        }); 
        
        function startGame(){
            game.state.start('Play')
        }

        function startMenu(){
            game.state.start('Menu')
        }
    }
};