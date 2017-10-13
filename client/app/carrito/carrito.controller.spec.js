'use strict';

describe('Component: CarritoComponent', function () {

  // load the controller's module
  beforeEach(module('practicaApp'));

  var CarritoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CarritoComponent = $componentController('carrito', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
