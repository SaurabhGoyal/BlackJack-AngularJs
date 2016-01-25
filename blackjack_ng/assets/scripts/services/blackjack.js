BlackJackNg.service("blackjackService", ['deckOfCards', 'playerService', function (deckOfCards, playerService) {
    function Game(numberOfDecks, numberOfPlayers){
        this.deck = new deckOfCards.Deck(numberOfDecks);
        this.deck.shuffle();
        this.players = [];
        this.addPlayer = function (name, bet) {
            var newPlayer = new playerService.player(name, bet);
            this.players.push(newPlayer);
            var hand = newPlayer.getHand();
            this.deal(newPlayer);
            this.deal(newPlayer);
        };
        this.deal = function(player){
            var dealt_card = this.deck.cards.pop();
            dealt_card.faceDown = false;
            player.addCards([dealt_card]);
            return dealt_card;
        }
    }
    return {
        game: Game
    };
}]);
