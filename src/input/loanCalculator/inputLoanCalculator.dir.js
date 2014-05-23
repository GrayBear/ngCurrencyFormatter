ngCurrencyFormatter.directive('ngLoanCalculator', ['$filter', function ($filter) {
    
    return {
        restrict: 'E',
        scope: {
            currency: "=",
            decimals: '=',
            currencyright: '=',
            loanAmount: '=',
            loanTerm: '=',
            interestRate: '=',
            PaymentPerMonth: '=',
        },
        templateUrl: "../src/input/loanCalculator/inputLoanCalculator.tpl.html",
        replace: true,
        link: function (scope, element, attrs) {


            calculateRepayments();


            scope.calculateRepayments = function () {

                calculateRepayments();
                console.log('calulationPayments');

            };

            function calculateRepayments() {

                var decimalPlaces = 0;
                if (scope.decimals == true) {
                
                    decimalPlaces = 2;

                }

                scope.periodicRate = (scope.interestRate / 100) / 12;
                scope.monthlyPayment = (scope.loanAmount * (scope.periodicRate / (1 - Math.pow(((1 + scope.periodicRate)), (-scope.loanTerm))))).toFixed(decimalPlaces);

                scope.totalLoan = (scope.monthlyPayment * scope.loanTerm).toFixed(decimalPlaces);
     

            }

        }

    }
}]);