const isUniqueFuncs = {

  //Straightforward solution in O(N^2) time.
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
  // Bit Char Code Solution O(N) time
  isUnique_02 (str, index = 'a'.charCodeAt() ) {
    let count = 0; 
    for(let k of [...str].map(c => c.charCodeAt() - index)) {
      // console.log("count: ", count);
      // console.log("count bit: ", (count >>> 0).toString(2));
      // console.log("k: ", k);
      // console.log("k bit: ", (k%32 >>> 0).toString(2));
      // console.log("c.charCodeAt(): ", [...str].map(c => c.charCodeAt() - index)); 
      const shift = 1 << k;
      // console.log("1 << k: ", (1 << k).toString(2))
      // console.log("shift: ", shift); 
      // console.log("shift bit: ", (shift >>> 0).toString(2)); 
      // Bitwise And returns a 1 if both are in common  
      // console.log("count & shift: ", count & shift)
      if(count & shift) {
        return false;
      }
      count |= shift; // count = count | shift
      // console.log("-----------"); 
    }
    return true;
  }, 
  // Utilizes a mirror object to place 1's at the indices of the characters
  // Similar to above solution withut bitwise operators 
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
