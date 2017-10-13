'use strict';

(function(){

class CatalogoComponent {
  constructor() {}
    $onInit(){
    $('#modalOferta').modal();
  }
}

angular.module('practicaApp')
  .component('catalogo', {
    templateUrl: 'app/catalogo/catalogo.html',
    controller: CatalogoComponent,
    controllerAs: 'vm'
  });

})();
