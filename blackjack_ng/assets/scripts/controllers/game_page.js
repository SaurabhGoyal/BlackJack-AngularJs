BlackJackNg.controller(
    "GamePageCtrl", ['shufflerService', function(shufflerService){
        var array = ['11', '7', '3'];
        this.title = shufflerService.shuffleArray(array).join();
    }]
);
