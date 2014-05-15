ngCurrencyFormatter.directive('ngCurrencyInputFormatter', ['$filter', '$compile', function ($filter, $compile) {

    return {

        //https://github.com/angular-ui/ui-utils/blob/master/modules/mask/mask.js look at this to fix binding

        

        restrict: 'A',
        scope: {
            decimals: '='
        },
        link: function (scope, element, attrs) {

            element.on('blur', function () {

                attrs.type = "text";

                var decimalPoints = 0;
                if (scope.decimals) decimalPoints = 2;

                var currencyFilter = $filter('ngCurrencyFormatterComma');
                var result = currencyFilter(element.val(), decimalPoints);

                element.val(result);
            });

            element.on('focus', function () {


                var currencyFilter = $filter('ngCurrencyFormatterUnComma');
                var result = currencyFilter(element.val());
                element.val(result);

 
            });


            element.on('keypress', function (evt) {

                var key = evt.which;


                //ToDo: decimals but only one

                //numbers
                if (key <= 48 || key >= 58) {

                    evt.preventDefault();

                }

 


            });

        }

    }

}]);