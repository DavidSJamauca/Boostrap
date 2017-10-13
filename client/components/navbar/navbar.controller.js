'use strict';

class NavbarController {
 ocultarCollapse(){
   $('.navbar-collapse').collapse('hide');
 }
}

angular.module('practicaApp')
  .controller('NavbarController', NavbarController);
