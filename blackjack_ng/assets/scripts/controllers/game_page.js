BlackJackNg.controller(
    "GamePageCtrl", ['blackjackService', function(blackjackService){
        this.numberOfDecks = 1;
        this.numberOfPlayers = 1;
        this.playerName = 'player';
        this.playerBet = 25;
        this.startGame = function () {
            this.game = new blackjackService.game(this.numberOfDecks, this.numberOfPlayers);
            this.game.addPlayer(this.playerName, this.playerBet);
        };
    }]
);
