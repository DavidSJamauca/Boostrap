'use strict';

angular.module('practicaApp')
    .directive('footerApp', () => ({
        templateUrl: 'components/footer/footer.html',
        restrict: 'E',
        controller: 'FooterController',
        controllerAs: 'vm'
    }));