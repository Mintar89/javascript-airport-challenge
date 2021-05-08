'use strict';

describe('Airport', function() {
  let airport;
  let plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  }); 
  
  describe('land', function() {
    it('lands the plane', function() {
      expect(airport.land(plane)).toEqual([plane]);
    })
    it('raises an error when airport is full', function(){
      for (let i=0; i < airport.capacity; i++) {
      airport.land(plane);
    }
    expect(function(){airport.land(plane)}).toThrowError(Error, 'Airport is full');
    });
  });
  
  describe('take off', function() {
    it('removes the plane from the hangar', function() {
      spyOn(Math,'random').and.returnValue(false);
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.hangar).toEqual([]);
    });
  });

  describe('under stormy conditions', function() {
    it('does not allow plane to take off due to stormy weather', function() {
      spyOn(Math,'random').and.returnValue(true);
      airport.land(plane);
      expect(function(){airport.takeOff(plane)}).toThrowError(Error, 'Not allowed to take off due to stormy weather')
    });
  });
  
  describe('constructor', function() {
    it('has a default capacity', function() {
       expect(airport.capacity).toEqual(20);
    }); 
  });
});
