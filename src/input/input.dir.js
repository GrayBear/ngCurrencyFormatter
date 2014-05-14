ngCurrencyFormatter.directive('ngCurrencyInput', ['$filter', '$compile', function ($filter, $compile) {

    return {

        restrict: 'E',
        scope: {
            currency: "=",
            amount: "=",
            decimals: '=',
            currencyright: '='
        },
        replace: true,
        template: '<div class="input-group"><span class="input-group-addon" ng-show="currency&&!currencyright" ng-bind="currency"></span><input class="form-control"  ng-currency-input-formatter decimals="decimals"  ng-model="amount" type="tel"><span ng-show="!decimals||currencyright" class="input-group-addon"><span ng-show="!decimals">.00</span> <span ng-show="currencyright"  ng-bind="currency"></span></span></div>  ',
        link: function (scope, element, attrs) {

            $scope.$watch('amount', function (newValue) {

                console.log("amount changed", newValue);

            });


        }

    }
}]);