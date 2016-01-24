TicTacToeNg.controller(
    "GamePageCtrl", ['shufflerService', function(shufflerService){
        var array = ['Tic', 'Tac', 'Toe'];
        this.title = '';
        var shuffeledArray = shufflerService.shuffleArray(array);
        for(index in shuffeledArray)
            this.title += shuffeledArray[index];
    }]
);
