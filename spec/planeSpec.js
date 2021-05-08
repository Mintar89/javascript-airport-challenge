'use strict';

describe('Plane', () => {
  let plane;
  
  it("is an instance of Plane", function () {
    plane = new Plane;
    expect(plane).toBeInstanceOf(Plane);
  });
}); 
