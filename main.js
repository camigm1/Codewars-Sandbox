// function getCount(str) {
//   const word = str.toLowerCase();
//   const arr = word.split("");
//   console.log(arr);
//   const vowels = [];
//   console.log(vowels);
//   for (const l of arr) {
//     if (l == "a" || l == "e" || l == "i" || l == "o" || l == "u") {
//       vowels.push(l);
//       console.log(l);
//     }
//   }

//   console.log(vowels.length);
// }
//////////////////////////////////////////////////////////////////////////////////
// getCount("Camila");

// function getMiddle(s) {
//   const length = s.length;
//   const arr = s.split("");
//   console.log(arr);
//   let middle;
//   let char;
//   if (length % 2 === 0) {
//     char = length / 2 - 1;
//     console.log((middle = arr.splice(char, 2)));
//   } else {
//     char = Math.floor(length / 2);
//     console.log((middle = arr.splice(char, 1)));
//   }
//   console.log(middle.join(""));
// }

// getMiddle("Car");
////////////////////////////////////////////////////////////////////////////////////////
// function findDeletedNumber(arr, mixArr) {
//   const sorted = mixArr.sort((a, b) => a - b);
//   const difference = arr.filter((x) => !sorted.includes(x)).join("");
//   // if (sorted.length === array.length) {
//   //   return 0;
//   // } else {
//   //   return Number(difference);
//   // }
//   return sorted.length === arr.length ? 0 : Number(difference);
// }

// findDeletedNumber([1, 2, 3, 4, 5], [3, 2, 1, 5]);

//
///////////////////////////////////////////////////////////////////////////////////
// function positiveSum(arr) {
//   const sum = [];
//   for (const val of arr) {
//     if (val > 0) {
//       console.log(val);
//       sum.push(val);
//     }
//   }
//   return sum.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
// }

// positiveSum([1, 2, 3, -6]);
////////////////////////////////////////////////////////////////////////////////////////
// function maskify(cc) {
//   const lastFour = cc.slice(-4);
//   const firstChars = cc.slice(0, -4);
//   const arr = [];
//   for (const char of firstChar) {
//     arr.push("#");
//   }
//   console.log(`${arr.join("")}${lastFour}`);
// }

// maskify("123456789567723");
//////////////////////////////////////////////////////////////////////////////////////////
// function stray(numbers) {
//   const set = new Set(numbers);
//   const indexFirst = numbers.indexOf([...set][0]);
//   const indexSecond = numbers.indexOf([...set][1]);
//   if (indexFirst !== -1) {
//     numbers.splice(indexFirst, 1);
//   }
//   return numbers.includes([...set][0]) ? [...set][1] : [...set][0];
// }

// function stray(numbers) {
//   const sorted = numbers.sort((a, b) => a - b);
//   console.log(sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0]);
// }

// stray([1, 4, 4, 4, 4, 4, 4]);
///////////////////////////////////////////////////////////////////////////////////////
// function createPhoneNumber(numbers) {
//   const firstThree = numbers.slice(0, 3).join("");
//   const middle = numbers.slice(3, 6).join("");
//   const last = numbers.slice(-4).join("");
//   console.log(`(${firstThree})${middle}-${last}`);
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

/////////////////////////////////////////////////////////////////////////////////////////////
// function alphabetPosition(text) {
//   const alphabetArray = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   const textArr = text
//     .replace(/[^a-zA-Z]/g, "")
//     .toLowerCase()
//     .split("");
//   console.log(textArr);
//   const nums = textArr.map((item) => {
//     return alphabetArray.indexOf(item) + 1;
//   });
//   console.log(nums.join(" "));
// }

// alphabetPosition("The narwhal bacons at midnight.8");

// function countSmileys(arr) {
//   const eyes = [";", ":"];
//   const nose = ["-", "~", null];
//   const mouth = [")", "D"];
//   let count = 0;
//   arr.forEach((face) => {
//     if (face.length === 3) {
//       if (
//         eyes.includes(face.split("")[0]) &&
//         nose.includes(face.split("")[1]) &&
//         mouth.includes(face.split("")[2])
//       ) {
//         count += 1;
//         console.log(face);
//       }
//     } else if (face.length === 2) {
//       if (
//         eyes.includes(face.split("")[0]) &&
//         mouth.includes(face.split("")[1])
//       ) {
//         count += 1;
//         console.log(face);
//       }
//     }
//   });
//   console.log(count);
// }

// countSmileys([":]", ":[", ";*", ":$", ";-D"]);

// function isValidWalk(walk) {
//   const arr = walk.length;
//   if (arr === 10) {
//     console.log("YAY");
//   }
// }

// isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);

// function findUniq(arr) {
//   const sorted = arr.sort((a, b) => {
//     return a - b;
//   });
//   console.log(sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0]);
// }

// findUniq([3, 10, 3, 3, 3]);

//////////////////////////////////////////////////////
// function findEvenIndex(arr) {
//   for (i = 0; i < arr.length; i++) {}
//   return -1;
// }

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    const right = arr.slice(0, i).reduce((acc, value) => acc + value, 0); //
    const left = arr.slice(i + 1).reduce((acc, value) => acc + value, 0);

    if (right === left) {
      return i;
    }
  }

  return -1;
}

// function findEvenIndex(arr) {
//   var left = 0,
//     right = arr.reduce(function (pv, cv) {
//       return pv + cv;
//     }, 0);
//   for (var i = 0; i < arr.length; i++) {
//     if (i > 0) left += arr[i - 1];
//     right -= arr[i];

//     if (left == right) return i;
//   }

//   return -1;
// }
//////////////////////////////////////////////////////////////////////
// function camelize(str) {
//   const words = str.split("-");
//   const together = words
//     .map((word, i) => {
//       return i === 0 ? word : word[0].toUpperCase() + word.slice(1);
//     })
//     .join("");
//   console.log(together);
// }

// camelize("my-long-word");

// function spinWords(string) {
//   return string
//     .split(" ")
//     .map((word) => {
//       if (word.length >= 5) {
//         return word.split("").reverse().join("");
//       } else {
//         return word;
//       }
//     })
//     .join(" ");
// }

// spinWords("Hey fellow warriors");

/////////////////////////////////////////////////
// function arrayDiff(a, b) {
//   const nums = a.filter((x) => !b.includes(x));
//   console.log(nums);
// }

// arrayDiff([1, 2, 2, 2, 3], [2]);

///////////////////////////////

// function printerError(s) {
//   const length = String(s.length);
//   const arr = String(
//     s.split("").filter((x) => {
//       return x > "m";
//     }).length,
//   );
//   console.log(`${arr}/${length}`);
// }

// printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");

////////////////////////////////////////////////////////////////////

// function findOdd(A) {
//   const countAll = A.reduce((accumulator, currentItem) => {
//     accumulator[currentItem] = (accumulator[currentItem] || 0) + 1;
//     return accumulator;
//   }, {});
//   console.log(countAll);
//   for (const [key, value] of Object.entries(countAll)) {
//     if (value % 2 !== 0) {
//       console.log(key);
//     }
//   }
// }

// findOdd([1, 1, 2]);

/////////////////////////////////////////////////
// function getRealFloor(n) {
//   if (n > 12) {
//     return n - 2;
//   } else if (n < 0) {
//     return n;
//   } else {
//     return n - 1;
//   }
// }

// getRealFloor(15);

function likes(names) {
  if (names.length === 0) {
    console.log("no one likes this");
  } else if (names.length === 1) {
    console.log(`${names[0]} likes this`);
  } else if (names.length === 2) {
    console.log(`${names[0]} and ${names[1]} like this`);
  } else if (name.length === 3) {
    console.log(`${names[0]},${names[1]} and ${name[2]} like this`);
  } else if (names.length === 4) {
    console.log(`${names[0]},${names[1]} and 2 others like this`);
  } else {
    console.log(
      `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    );
  }
}
likes(["Alex", "Chica", "Mark", "Max", "Cami", "Wami"]);
