'use strict';

describe('Weather', function() {

  let weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it('returns true when weather is stormy', function() {
    spyOn(Math, 'random').and.returnValue(true);
    expect(weather.isStormy()).toBe(true);
  });

  it('returns false when weather is not stormy', function() {
    spyOn(Math, 'random').and.returnValue(false);
    expect(weather.isStormy()).toBe(false);
  });
});
