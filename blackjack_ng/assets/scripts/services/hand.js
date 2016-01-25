BlackJackNg.service("handService", function () {

    // Standard winning score for a BlackJack hand.
    var WINNING_SCORE = 21;

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

    function Hand(){

        // Cards in hand.
        var cards = [];

        this.getCards = function () {
            return cards.slice();
        };

        this.addCards = function (newCards) {
            cards = cards.concat(newCards);
        };

        // Returns current score(best possible) for hand.
        this.getScore = function () {
            var bestScore = -1;

            // Recursively calculates score for all possible sequences and sets the bestScore accordingly.
            var getBestScore = function(cards, index, currentScore){
                if(index >= cards.length)
                    return;
                var card_value = cards[index].getValue();
                var score = currentScore + card_value;
                if(index == cards.length-1){

                    // If last card is an ACE and taking it as 11 instead of 1 gives a better score, add 10 to score.
                    if(card_value == 1 && score <= WINNING_SCORE-10)
                        score += 10;

                    // Get better of the score of current sequence and best score till now.
                    bestScore = getBetterScore(bestScore, score, WINNING_SCORE);
                }
                getBestScore(cards, index+1, score);

                // If card is ACE, also try sequence considering its value as 11.
                if(card_value == 1){
                    getBestScore(cards, index+1, score+10);
                }
            };
            getBestScore(cards, 0, 0);
            return bestScore;
        };
    }

    return {
        hand: Hand
    };
});
