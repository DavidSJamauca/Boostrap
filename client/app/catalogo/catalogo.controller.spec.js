'use strict';

describe('Component: CatalogoComponent', function () {

  // load the controller's module
  beforeEach(module('practicaApp'));

  var CatalogoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CatalogoComponent = $componentController('catalogo', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
