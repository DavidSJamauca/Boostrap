'use strict';

angular.module('practicaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('carrito', {
        url: '/carrito',
        template: '<carrito></carrito>'
      });
  });
