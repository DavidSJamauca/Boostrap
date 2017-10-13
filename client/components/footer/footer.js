'use strict';

angular.module('practicaApp')
    .config(function($stateProvider) {
        $stateProvider.state('footer', {
            url: '/footer',
            template: '<footer-app></footer-app>'
        });
    });