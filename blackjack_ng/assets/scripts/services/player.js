BlackJackNg.service("playerService", ['handService', function (handService) {

    function Player(name, bet){

        var name = name;
        var bet = bet;
        var hand = new handService.hand();

        this.getName = function(){
            return name;
        };

        this.setName = function(new_name){
            name = new_name;
        };

        this.getBet = function(){
            return bet;
        };

        this.increaseBet = function(amount){
            bet += amount;
        };

        this.getHand = function(){
            return hand;
        };

        this.addCards = function (cards) {
            hand.addCards(cards);
        }
    }

    return {
        player: Player
    };
}]);
