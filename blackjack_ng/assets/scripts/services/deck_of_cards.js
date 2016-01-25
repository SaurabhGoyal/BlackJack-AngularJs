BlackJackNg.service("deckOfCards", ['shufflerService', 'cardService', function (shufflerService, cardService) {
    function Deck(numberOfDecks){
        this.numberOfDecks = numberOfDecks;
        if(this.numberOfDecks == null)
            this.numberOfDecks = 1;

        this.cards = [];
        for(i=0; i<numberOfDecks; i++){
            for(j=0; j<52; j++){
                this.cards.push(new cardService.Card(j));
            }
        }
        this.shuffle = function() {
            shufflerService.shuffleArray(this.cards);
        }
    }
    return {
        Deck: Deck
    };
}]);
