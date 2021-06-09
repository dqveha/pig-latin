// UTILITY LOGIC
let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

// BEEZNESS LOGIC


function pigLatin(text) {
  // e.g. ze --> ['z','e']
  let start = text.split("");
  let pigArray = [];
  // loops through each element within the array
  for (let i = 0; i < text.length; i++) {
    if (start[i] === 'a') {
      pigArray.push(start[i] + 'way');
      return pigArray;
    } else if (start[i] !== 'a') {
      const placeHolder = start.slice(1, text.length);
      pigArray.push(placeHolder.join('') + start[i] + 'ay');
      return pigArray;
    }
  }
  console.log(pigArray);
}




// function pigLatin(text) {
//   let pigArray = text.split("");
//   // pigArray = [];
//   // for (let i = 0; i < text.length; i++) {
//   if (text[0] === vowel) {
//     pigArray.push(text[0] + 'way');
//   } else if (text[0] !== 'a' && text[1] === 'a') {
//       pigArray.push(text[0] + 'ay' + text[1]);
//   } else if (text[0] !== 'a' && text[1] !== 'a') {
//       pigArray.push(text[0] + text[1] + 'ay');
//   }
//   console.log(pigArray);
//   }


  //code = odecay  -- 
// if vowel
// else if first cons && second cons
// else the first cons

// for (let index = startingValue; index <= endingValue; index += increment ) {
  // Code that should run each time through the loop!


// UI LOGIC

$(document).ready(function() {
  
});
