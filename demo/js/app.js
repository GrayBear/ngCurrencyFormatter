angular.module('myDemoApp', ['ngCurrencyFormatter'])
    .controller('ctrlDemo', ['$scope', function ($scope) {
        $scope.price = 0;
        $scope.ngCurrencyFormatter = {};
        $scope.ngCurrencyFormatter.pounds = '£';
        $scope.ngCurrencyFormatter.dollars = '$';
        $scope.ngCurrencyFormatter.euro = '€';
        $scope.ngCurrencyFormatter.noDecimals = false;
        $scope.ngCurrencyFormatter.withDecimals = true;
        $scope.ngCurrencyFormatter.currencyRight = true;

    }]);