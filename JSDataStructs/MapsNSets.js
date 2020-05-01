/*
What does the following code return?
new Set([1,1,2,2,3,4])
*/

//{1,2,3,4}

/*
What does the following code return?

[...new Set("referee")].join("")
*/

//[ref]

/*
What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
*/

//{[1,2,3] => True, [1,2,3] => false}

/*
Write a function called hasDuplicate which accepts an 
array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
*/

const hasDuplicate = (arr) => {
  if([...new Set(arr)].length < arr.length){
    return true;
  }
  else{
    return false;
  }
}
console.log(hasDuplicate([1,3,2,1]));
console.log(hasDuplicate([1,5,-1,4]));

/*
Write a function called vowelCount which accepts a string and 
returns a map where the keys are numbers and the values are the 
count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
*/

const vowelCount = (str) => {
  let newVowelMap = new Map();
  let vowels = 'aeiou';

  [...str].forEach(element => {
    let lowered = element.toLowerCase();
    if(vowels.indexOf(lowered) !== -1){
      if(newVowelMap.has(lowered)){
        newVowelMap.set(lowered, newVowelMap.get(lowered)+1);
      }
      else{
        newVowelMap.set(lowered, 1);
      }
    }
  });
  return newVowelMap;
}
//Using ++ on the increment threw an error, so +1 is what I ended up using
console.log(vowelCount('awesome'));
console.log(vowelCount('Colt'));
