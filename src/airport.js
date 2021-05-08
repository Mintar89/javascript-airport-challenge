'use strict';

class Airport {
  
  constructor(capacity = 20, plane = new Plane, weather = new Weather ) {
    this.hangar = [];
    this.capacity = capacity;
    this.plane = plane;
    this.weather = weather;
  };
  
 land(plane) {
    if(this.hangar.length >= this.capacity) {
      throw new Error('Airport is full');
    };
    this.hangar.push(plane);
    return this.hangar;
  };

  takeOff(plane) {
    if (this.weather.isStormy()) {
      throw new Error ('Not allowed to take off due to stormy weather');
    } else {
      this.hangar.pop(plane);
    };
  };
};

