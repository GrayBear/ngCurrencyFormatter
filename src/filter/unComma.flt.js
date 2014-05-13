ngCurrencyFormatter.filter('ngCurrencyFormatterUnComma', function () {

    return function (text) {

        return text.replace(/,/g,'');

    };

});