var game = new Phaser.Game(420, 746, Phaser.AUTO);
game.state.add('Load', boil.Load);
game.state.add('Menu', boil.Menu);
game.state.add('Play', boil.Play);
game.state.add('GameOver', boil.GameOver);
game.state.add('hs', boil.hs);
game.state.start('Load'); 
