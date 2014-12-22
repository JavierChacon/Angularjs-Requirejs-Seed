define(['./app'], function (app) {
   'use strict';
   return app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/view1', {
         templateUrl: 'views/view1/view1.html',
         controller: 'MyCtrl1'
      });

      $routeProvider.when('/view2', {
         templateUrl: 'views/view2/view2.html',
         controller: 'MyCtrl2'
      });

      $routeProvider.otherwise({
         redirectTo: '/view1'
      });
   }]);
});
