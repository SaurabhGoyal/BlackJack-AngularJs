BlackJackNg.service("blackjackService", ['deckService', 'dealerService', 'playerService',
    function (deckService, dealerService, playerService) {

        function Game(numberOfDecks){

            var deck = new deckService.Deck(numberOfDecks);
            var dealer = new dealerService.Dealer('dealer');
            var players = [];

            this.shuffleDeck = function () {
                deck.shuffle();
            };

            this.initDealer = function (name) {
                dealer = new dealerService.Dealer(name);
            };

            this.getDealer = function () {
                var dealer_ref = dealer;
                return dealer_ref;
            };

            this.addPlayer = function (name, bet) {
                var newPlayer = new playerService.Player(name, bet);
                players.push(newPlayer);
                this.deal(newPlayer, true);
                this.deal(newPlayer, true);
            };

            // Deals the given participant the top-most card in the given position.
            this.deal = function(participant, faceUp){
                var dealt_card = deck.getTopMostCard();
                if(faceUp)
                    dealt_card.toggleFace();
                participant.addCards([dealt_card]);
                return dealt_card;
            }
        }

        return {
            Game: Game
        };
    }
]);
