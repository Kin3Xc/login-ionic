// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('entrar',{ //Nombre del estado
    url: '/entrar', //URL para navegar al estado
    templateUrl: 'templates/login.html', //vista HTML
    controller: 'loginController' //Controllador
  })

  .state('principal', {
    url: '/principal',
    templateUrl: 'templates/principal.html',
    controller: 'PrincipalCtrl'
  })

  .state('mispedidos',{
    url: '/mispedidos',
    templateUrl: 'templates/mispedidos.html'
  });

  // Mostrar la vista de login por default
  $urlRouterProvider.otherwise('/entrar');
});