"use strict";

angular.module('myApp.routes', ['ngRoute'])

   // configure views; the authRequired parameter is used for specifying pages
   // which should only be available while logged in
   .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
         templateUrl: 'partials/home.html',
         controller: 'HomeCtrl'
      });

      $routeProvider.when('/contact', {
    	 authRequired: true, // must authenticate before viewing this page
         templateUrl: 'partials/contact.html',
         controller: 'ContactCtrl'
      });

      $routeProvider.when('/projects', {
          authRequired: true, // must authenticate before viewing this page
          templateUrl: 'partials/projects.html',
          controller: 'ProjectsCtrl'
       });
      
      $routeProvider.when('/account', {
         authRequired: true, // must authenticate before viewing this page
         templateUrl: 'partials/account.html',
         controller: 'AccountCtrl'
      });

      $routeProvider.when('/login', {
         templateUrl: 'partials/login.html',
         controller: 'LoginCtrl'
      });

      $routeProvider.otherwise({redirectTo: '/home'});
   }]);