BlackJackNg.service("cardService", function () {
    function Card(i){
        var index = i;
        var faceDown = true;
        var isFaceCard = function(value){
            return (value===10 || value===11 || value===12)
        };
        this.getValue = function(){
            var value = index % 13;
            return isFaceCard(value) ? 10 : (value+1);
        };
        this.getNumber = function(){
            return (index % 13)+1;
        };
        this.getSuit = function(){
            return Math.floor(index/13);
        };
    }
    return {
        Card: Card
    };
});
