BlackJackNg.service("handService", function () {

    function Hand(){

        // Cards in hand.
        var cards = [];
        var bestScore = -1;

        // Returns the better score of the two given scores.
        var getBetterScore = function(score1, score2, winningScore){

            // Under winningScore, higher score is better.
            if(score1 <= winningScore && score2 <= winningScore)
                return Math.max(score1, score2);

            // Above winningScore, lower score is better.
            if(score1 > winningScore && score2 > winningScore)
                return Math.min(score1, score2);

            // At either side of winningScore, score at lower side is better.
            return score1 <= winningScore ? score1 : score2;
        };

        // Recursively calculates score for all possible sequences and sets the bestScore accordingly.
        var getBestScore = function(cards, index, currentScore){

            var card_value = cards[index].getValue();
            var score = currentScore + card_value;
            if(index == cards.length-1){

                // If last card is an ACE and taking it as 11 instead of 1 gives a better score, add 10 to score.
                if(card_value == 1 && score <= this.WINNING_SCORE-10)
                    score += 10;

                // Get better of the score of current sequence and best score till now.
                bestScore = getBetterScore(bestScore, score, this.WINNING_SCORE);

            }
            else{
                getBestScore(cards, index+1, score);

                // If card is ACE, also try sequence considering its value as 11.
                if(card_value == 1){
                    getBestScore(cards, index+1, score+10);
                }
            }
        };

        this.getCards = function () {
            return cards.slice();
        };

        this.addCards = function (newCards) {
            cards = cards.concat(newCards);
        };

        // Returns current score (best possible) for hand.
        this.getScore = function () {

            getBestScore(cards, 0, 0, '');
            return bestScore;
        };
    }

    // Standard winning score for a BlackJack hand.
    Hand.prototype.WINNING_SCORE = 21;

    return {
        Hand: Hand
    };
});
