BlackJackNg.service("dealerService", ['handService', function (handService) {

    function Dealer(name){

        var name = name;
        var hand = new handService.Hand();

        this.getName = function(){
            return name;
        };

        this.setName = function(new_name){
            name = new_name;
        };

        this.getHand = function(){
            return hand;
        };

        this.addCards = function (cards) {
            hand.addCards(cards);
        }
    }

    return {
        Dealer: Dealer
    };
}]);
