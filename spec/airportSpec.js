describe('Airport', function() {
  let airport
  
  let plane

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane')
  }); 
  
  describe('land', function() {
    it('lands the plane', function() {
      expect(airport.land(plane)).toEqual([plane]) 
    })
    it('raises an error when airport is full', function(){
       for (i=0; i < airport.capacity; i++) {
        airport.land(plane)
      }
      expect(function(){airport.land(plane)}).toThrowError(Error, 'Airport is full')
    });
  });

  describe('take off', function() {
    it('removes the plane from the hanger', function() {
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.hanger).toEqual([])
    });
  });

  describe('constructor', function() {
    it('has a default capacity', function() {
       expect(airport.capacity).toEqual(20)
    }); 
  });


});