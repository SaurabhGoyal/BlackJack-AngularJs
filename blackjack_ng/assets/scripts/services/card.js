BlackJackNg.service("cardService", function () {
    function Card(index){

        var index = index;  // index of the card in the sorted deck (0 based).
        var faceUp = false;  // represents if the card's face is up.

        // Returns a boolean representing if the card is a face card.
        this.isFaceCard = function(value){
            if(faceUp)
                return (value===10 || value===11 || value===12);
            return null;
        };

        // Toggles the cards face.
        this.toggleFace = function(){
            faceUp = !faceUp;
        };

        // Returns current value of faceUp.
        this.hasFaceUp = function(){
            return faceUp;
        };

        // If card's face is up, returns score-value of the card.
        this.getValue = function(){
            if(faceUp){
                var value = index % 13;
                return this.isFaceCard(value) ? 10 : (value+1);
            }
            return 0;
        };

        // If card's face is up, returns number on the card.
        this.getNumber = function(){
            if(faceUp)
                return (index % 13)+1;
            return null;
        };

        // If card's face is up, returns suit of the card.
        this.getSuit = function(){
            if(faceUp)
                return Math.floor(index/13);
            return null;
        };

        // If card's face is up, returns number on the card in pretty format.
        this.getNumberPretty = function(){
            if(faceUp) {
                var number = this.getNumber();
                return this.numberRepresentation[number] || number;
            }
            return null;
        };

        // If card's face is up, returns suit of the card in pretty format.
        this.getSuitPretty = function(){
            if(faceUp)
                return this.suitRepresentation[this.getSuit()];
            return null;
        };

        // If card's face is up, returns card identification in pretty format.
        this.prettyPrint = function(){
            if(faceUp)
                return this.getNumberPretty() + ' of ' + this.getSuitPretty();
            return 'Face down';
        }
    }

    Card.prototype.numberRepresentation = {
        1: 'Ace',
        11: 'Jack',
        12: 'Queen',
        13: 'King'
    };

    Card.prototype.suitRepresentation = {
        0: 'Hearts',
        1: 'Spades',
        2: 'Diamonds',
        3: 'Clubs'
    };

    return {
        Card: Card
    };
});
