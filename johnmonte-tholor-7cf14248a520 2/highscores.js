var highscores = [0,0,0,0,0,0,0,0,0,0], one, two, three, four, five, six, seven, eight, nine, ten;
var textArray = [];
var goBack;

boil.hs = function(){};
boil.hs.prototype = {
    preload: function(){
       game.load.image('back', 'Assets/Backgrounds/back.png');
       game.load.image('crown', 'Assets/Backgrounds/crown.png');
    },
    create: function(){
        console.log ('your in the high score state')
        game.stage.backgroundColor = '#3396FB';
        back=game.add.button(300, 600, 'back', goBack);
        back.scale.setTo(0.5);
        game.add.sprite(210, 50, 'crown');
        
        text = game.add.text(120, 33, 'King of Kings', {color: '#000'})
        
        for (var  i = 1; i <11; i++){
            if (i != 10) {
                game.add.text(100,60 *i ,i +'.', {color: '#000'})
            } else {
                game.add.text(100,60 *i ,i +'.', {color: '#000'})
            }
        }
        
        for (var i= 0; i < 10; i++){
            textArray[i] = game.add.text(160, 60 * i + 60, highscores[i], {color: '#000'})
        }
        
        ref.on('value', function(item) {
            console.log('item', item.val().hs);
            highscores = item.val().hs;
            
            updateText(highscores);
        });
        
    }
}
    

function updateText(hs) {
    for (var i= 0; i < 10; i++){
        textArray[i].text = hs[i];
    }
//    textArray[1].text = hs[1];
//    textArray[2].text = hs[2];
//    textArray[3].text = hs[3];
//    textArray[4].text = hs[4];
//    textArray[5].text = hs[5];
//    textArray[6].text = hs[6];
//    textArray[7].text = hs[7];
//    textArray[8].text = hs[8];
//    textArray[9].text = hs[9];
//    textArray[0].text = hs[0];
}
 function goBack() {
     game.state.start('Menu')
 }