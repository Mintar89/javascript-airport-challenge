class Airport {
  
  constructor(capacity = 20) {
    this.hanger = []
    this.capacity = capacity
  };
    
 land(plane) {
    if(this.hanger.length >= this.capacity) {
      throw new Error('Airport is full')
    };
    this.hanger.push(plane)
    return this.hanger
  };

  takeOff(plane) {
    this.hanger = this.hanger.filter(function(value) {
      return value != plane
    });
  };
  

};

