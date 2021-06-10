// // UTILITY LOGIC
// function checkVowel(splitArray) {
//   let counter = 0;
//   for (let i = 0; i < splitArray.length; i++) {
//   if (splitArray[i] !== 'A' && splitArray[i] !== 'a' && splitArray[i] !== 'E' && splitArray[i] !== 'e' && splitArray[i] !== 'I' && splitArray[i] !== 'i' && splitArray[i] !== 'O' && splitArray[i] !== 'o' && splitArray[i] !== 'U' && splitArray[i] !== 'u') {
//       counter++;
//     } else {
//       false
//     }
//   }
// }


// // BEEZNESS LOGIC

// function pigLatin(text) {
//   let splitArray = text.split("");
//   let counter = 0;
//   let pigArray = [];
//   if (splitArray[0] === 'a') {
//       pigArray.push(splitArray.slice(1, splitArray.length).join('') + splitArray[0] + 'way');
//       return pigArray;
//     } 
//   if (checkVowel(splitArray)) {
//       counter++;
//       console.log(counter++);
//       } else {
//       let placeHolder = splitArray.slice(counter, splitArray.length).join('');
//       pigArray.push(placeHolder + splitArray.slice(0, counter).join('') + 'ay');
//       console.log(pigArray);
//       return pigArray;
//     }
//     console.log(pigArray);
//   }


// UTILITY LOGIC
// function checkVowel(splitArray) {
//   let counter = 0;
//   for (let i = 0; i < splitArray.length; i++) {
//   if (splitArray[i] !== 'A' && splitArray[i] !== 'a' && splitArray[i] !== 'E' && splitArray[i] !== 'e' && splitArray[i] !== 'I' && splitArray[i] !== 'i' && splitArray[i] !== 'O' && splitArray[i] !== 'o' && splitArray[i] !== 'U' && splitArray[i] !== 'u') {
//       counter++;
//     } else {
//       false
//     }
//   }
// }


// BEEZNESS LOGIC

function pigLatin(text) {
  let splitArray = text.split("");
  let counter = 0;
  let pigArray = [];
  if (splitArray[0] === 'a') {
      pigArray.push(splitArray.slice(1, splitArray.length).join('') + splitArray[0] + 'way');
      return pigArray;
    }
  for (let i = 0; i < splitArray.length; i++) {
  if (splitArray[i] !== 'A' && splitArray[i] !== 'a' && splitArray[i] !== 'E' && splitArray[i] !== 'e' && splitArray[i] !== 'I' && splitArray[i] !== 'i' && splitArray[i] !== 'O' && splitArray[i] !== 'o' && splitArray[i] !== 'U' && splitArray[i] !== 'u') {
      counter++;
      console.log(counter);
      } else {
      let placeHolder = splitArray.slice(counter, splitArray.length).join('');
      pigArray.push(placeHolder + splitArray.slice(0, counter).join('') + 'ay');
      return pigArray;
    }
    console.log(pigArray);
  }
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
