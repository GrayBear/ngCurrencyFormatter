ngCurrencyFormatter.directive('ngCurrencyInputFormatter', ['$filter', '$compile', function ($filter, $compile) {

    return {
        restrict: 'E',
        scope: {
            currency: "=",
            ngModel: "=",
            decimals: '=',
            currencyright: '=',
            perday: '=',
            permonth: '=',
            peryear: '=',
            frequency: '='
        },
        replace: true,
        template: '<div class="input-group"><div class="input-group-addon"><select ng-options="frequency.name for frequency in frequencies" ng-change="updateValue()" ng-model="frequency"><option value="">Select</option></select><span ng-bind="currency"></span></div><input ng-currency-input-formatter decimals="decimals" ng-blur="updateValue()" ng-model="ngModel" type="tel" class="form-control"><span ng-show="!decimals||currencyright" class="input-group-addon"><span ng-show="!decimals">.00</span><span ng-show="currencyright" ng-bind="currency"></span></span></div>',
        link: function (scope, element, attrs) {

            var frequencies = [];
            frequencies.push({
                name: 'daily',
                days: 1
            });
            frequencies.push({
                name: 'weekly',
                days: 7.01
            });
            frequencies.push({
                name: 'monthly',
                days: 30.41
            });
            frequencies.push({
                name: 'annually',
                days: 365
            });

            scope.frequencies = frequencies;


            for (var i = 0; i < length; i++) {

            }

            scope.updateValue = function () {


                if (scope.frequency) {

                    var perDay = scope.ngModel / scope.frequency.days;


                    if (scope.perday >= 0) {
                        scope.perday = perDay;
                    }
                    if (scope.permonth >= 0) {
                        scope.permonth = perDay * 30.41;
                    }
                    if (scope.peryear >= 0) {
                        scope.peryear = perDay * 365;
                    }
                }

                console.log('pd', scope.perday);
                console.log('pm', scope.permonth);
                console.log('py', scope.peryear);



            };

        }
    }
}]);