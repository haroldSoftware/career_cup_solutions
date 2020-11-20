const isUniqueFuncs = {

  //Straightforward solution in O(N) time.
  isUnique_01(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
          if (str[i] === str[j]) {
            return false; 
          }
        }
    }
    return true; 
  },
  // Bit Char Code Solution
  isUnique_02 (str, index = 'a'.charCodeAt() ) {
    console.log("'a'.charCodeAt(): ", 'a'.charCodeAt()); 
    let count = Number();
    console.log("count: ", count);
    for(let k of [...str].map(c => c.charCodeAt() - index)) {
      console.log("c.charCodeAt(): ", [...str].map(c => c.charCodeAt() - index)); 
      const shift = 1 << k;
      console.log("shift: ", shift); 
      if(count & shift)
          return false;
      count |= shift;
    }
    return true;
  }, 
  // Utilizes a mirror object to place 1's at the indices of the characters
  isUnique_03(str) {
    let mirror = {};
    for (let i = 0; i < str.length; i++) {
      if (mirror[str[i]] && mirror[str[i]] >= 1) {
        return false;
      } else {
        mirror[str[i]] = 1;
      }
    }
    return true;
  }
}

export default isUniqueFuncs
