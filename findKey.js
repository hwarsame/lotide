const findKey = function(object, callback) {
  for (let i in object) {
    if (callback(object[i])) {
      return i;
    }
  }
};


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 1));