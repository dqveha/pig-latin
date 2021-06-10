// UTILITY LOGIC


// BEEZNESS LOGIC

function pigLatin(text) {

  let start = text.split("");
  let pigArray = [];
    if (start[0] === 'a') {
      pigArray.push(start.slice(1, start.length).join('') + start[0] + 'way');
      return pigArray;
    }
      for (let i = 0; i < text.length; i++) {
      if (start[i] !== 'a') {
      const placeHolder = start.slice(1, text.length);
      pigArray.push(placeHolder.join('') + start[i] + 'ay');
      return pigArray;
    }
  } 
  console.log(pigArray);
}











// function pigLatin(text) {

//   let start = text.split("");
//   let pigArray = [];

//   for (let i = 0; i < text.length; i++) {
//     if (start[i] === 'a') {
//       pigArray.push(start[i] + 'way');
//       return pigArray;
//     } else if (start[i] !== 'a') {
//       const placeHolder = start.slice(1, text.length);
//       pigArray.push(placeHolder.join('') + start[i] + 'ay');
//       return pigArray;
//     }
//   }
//   console.log(pigArray);
// }

  //code = odecay  -- 
// if vowel
// else if first cons && second cons
// else the first cons

// for (let index = startingValue; index <= endingValue; index += increment ) {
  // Code that should run each time through the loop!


// UI LOGIC

$(document).ready(function() {
  
});
