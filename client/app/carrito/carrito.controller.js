'use strict';

(function(){

class CarritoComponent {
  constructor() {;
  }
}

angular.module('practicaApp')
  .component('carrito', {
    templateUrl: 'app/carrito/carrito.html',
    controller: CarritoComponent,
    controllerAs: 'vm'
  });

})();
