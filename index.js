var a="abcadeecfb"
    let b = new Set(a)
    b= [...b] 
    let c=b.join('')
    console.log(c)
    //1
    function countAlphabets(str) {
        let countMap = new Map();
        for (let i = 0; i < str.length; i++) {
          let char = str[i];
          if (countMap.has(char)) {
            countMap.set(char, countMap.get(char) + 1);
          } else {
            countMap.set(char, 1);
          }
        }
      
        for (let [char, count] of countMap) {
          console.log(`${char}=${count}`);
        }
      }
      
      // Test the function
      let inputString = 'abcadeecfb';
      countAlphabets(inputString);