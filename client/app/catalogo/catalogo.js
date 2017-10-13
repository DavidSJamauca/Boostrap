'use strict';

angular.module('practicaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('catalogo', {
        url: '/catalogo',
        template: '<catalogo></catalogo>'
      });
  });
