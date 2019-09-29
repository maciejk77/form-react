let getString = arr => {
  let str = '';
  let spaces = 0;

  const getSpaces = number => {
    let text = '';
    for (let i = 0; i < number; i++) {
      text += ' ';
    }
    return text;
  };

  // wrap for loop below in a function
  // invoke with arr, arr.reverse() as args
  // add '/' to the closing tag

  for (let el of arr) {
    spaces = el * 1;
    str += `\n${getSpaces(spaces)}<${el}>`;
  }

  for (let el of arr.reverse()) {
    spaces = el * 1;
    str += `\n${getSpaces(spaces)}</${el}>`;
  }
  return str;
};

getString([1, 2, 3, 4, 5, 6]);

// -----------------------------

//  to complex...

// let getString = arr => {
//   let str = '';
//   let spaces = 0;

//   const getSpaces = number => {
//     let text = '';
//     for (i = 0; i < number; i++) {
//       text += ' ';
//     }
//     return text;
//   };

//   const foo = (array, isReversed) => {
//     const bar = isReversed ? array : array.reverse();
//     const baz = isReversed ? `</${el}>` : `<${el}>`;

//     for (let el of bar) {
//       spaces = el * 1;
//       str += `\n${getSpaces(spaces)}${baz}`;
//     }
//     return str;
//   };

// create a loop to accept true/false?
//   foo(arr, false);
//   foo(arr, true);

//   return str;

// };
