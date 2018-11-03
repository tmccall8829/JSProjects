function whaleTalkMe(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];
  for (let inputIndex = 0; inputIndex < s.length; inputIndex++) {
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
      if (s[inputIndex] == vowels[vowelsIndex]) {
        resultArray.push(vowels[vowelsIndex]);
        if (vowels[vowelsIndex] == 'e') {
          resultArray.push('e');
        }
        if (vowels[vowelsIndex] == 'u') {
          resultArray.push('u');
        }
      }
    }
  }
  console.log(`Original string: ${s}`)
  console.log(`Whale talk: ${resultArray.join('').toUpperCase()}`);
}

whaleTalkMe('this is a whale string');
