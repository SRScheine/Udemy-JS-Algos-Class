class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    const item = [key, value];
    // Get index based on hashing function
    const index = this._hash(key);
    // Using separate chaining for collisions...
    // If there's nothing at keymap index, create an empty array
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // Push the new item to the hash array
    this.keyMap[index].push(item);
  }
  get(key) {
    // Hash the key to find the index
    const index = this._hash(key);
    // If there is a key-value pair in the hash table...
    if (this.keyMap[index]) {
      // Loop over array within that index, and if we find our key (which by design is at position 0 of each item), return that item.
      for (let i = 0; i < this.keyMap[index].length; i++) {
        let currItem = this.keyMap[index][i];
        if (currItem[0] === key) {
          return currItem[1];
        }
      }
    }
    // If we don't find our key, return undefined
    return undefined;
  }
  // Create an array of all of the UNIQUE keys
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  // Create an array of all of the UNIQUE values
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('purple', '#DDA0DD');
ht.set('violet', '#DDA0DD');
console.log(ht.keyMap);
console.log(ht.get('olive'));
console.log(ht.get('maroon'));
console.log(ht.get('scott'));
console.log(ht.keys());
ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});
