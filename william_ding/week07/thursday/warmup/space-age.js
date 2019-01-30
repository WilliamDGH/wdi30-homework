const spaceAge = {
  ageChart : {
    'Earth' : 365.25,
    'Mercury' : 365.25 * 0.2408467,
    'Venus' : 365.25 * 0.61519726,
    'Mars' : 365.25 * 1.8808158,
    'Jupiter' : 365.25 * 11.862615,
    'Saturn' : 365.25 * 29.447498,
    'Uranus' : 365.25 * 84.016846,
    'Neptune' : 365.25 * 164.79132
  },

  calcAge : function (sec, planet = false) {
    Object.keys(this.ageChart).forEach(function(key){
      const age = sec / 86400 / spaceAge.ageChart[key];
      if(planet && key === planet || !planet) {
        console.log(`You are ${age} ${key}-years old`);
      } 
    });
  },
}
