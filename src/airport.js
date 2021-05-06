class Airport {
  
  constructor(capacity = 20) {
    this.hanger = []
    this.capacity = capacity
  };
    
 land(plane) {
    this.hanger.push(plane)
    return this.hanger
  };

  takeOff(plane) {
    this.hanger = this.hanger.filter(function(value) {
      return value != plane
    });
  };
  

};

