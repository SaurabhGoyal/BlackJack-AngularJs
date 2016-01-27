BlackJackNg.service("deckService", ['shufflerService', 'cardService', function (shufflerService, cardService) {
    function Deck(numberOfDecks){

        var numberOfDecks = numberOfDecks;  // number of decks to use to create the final deck.
        var cards = [];

        if(numberOfDecks == null)
            numberOfDecks = 1;

        // initialize cards array to have cards equal to cards in given number of decks.
        for(var i=0; i<numberOfDecks; i++){
            for(var j=0; j<52; j++){
                cards.push(new cardService.Card(j));
            }
        }

        // Shuffles the deck.
        this.shuffle = function() {
            shufflerService.shuffleArray(cards);
        };

        // Returns the top-most card in the deck.
        this.getTopMostCard = function(){
            return cards.pop()
        }
    }
    return {
        Deck: Deck
    };
}]);
