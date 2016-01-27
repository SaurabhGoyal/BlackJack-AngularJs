BlackJackNg.controller(
    "GamePageCtrl", ['blackjackService', function(blackjackService){

        this.game = null;
        this.numberOfDecks = 1;
        this.dealerName = 'Dealer';
        this.dealer = null;
        this.players = [];

        // Start the game.
        this.startGame = function () {

            // Initialize the game.
            this.game = new blackjackService.Game(this.numberOfDecks);
            this.game.shuffleDeck();

            // Initialize the dealer of the game.
            this.game.initDealer(this.dealerName);
            this.dealer = this.game.getDealer();

            // Deal a face down card to dealer.
            this.game.deal(this.dealer, true);

            // Deal each player a face up card.
            for(var index in this.players){
                this.game.deal(this.players[index], false);
            }

            // Deal a face up card to dealer.
            this.game.deal(this.dealer, false);

            // Deal each player a face up card.
            for(var index in this.players){
                this.game.deal(this.players[index], false);
            }

        };

    }]
);
