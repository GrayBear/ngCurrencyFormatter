angular.module('myDemoApp', ['ngCurrencyFormatter'])
    .controller('ctrlDemo', ['$scope', function ($scope) {
        $scope.price = 0;


        $scope.frequency = {
            perDay: 0,
            perMonth: 0,
            perYear: 0,
            frequency: ''
        };

        $scope.loanCalculator = {

            term: 300, // months
            amount: 15000,
            interestRate: 5.53,

        };
         

    }]);