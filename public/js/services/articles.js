//Articles service used for articles REST endpoint
angular.module('sharebox.articles').factory("Articles", ['$resource', function($resource) {
    return $resource('articles/:articleId', {
        articleId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);