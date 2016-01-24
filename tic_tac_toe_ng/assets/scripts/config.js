TicTacToeNg.config(
    function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        // For preventing conflict with django template rendering
    }
);
