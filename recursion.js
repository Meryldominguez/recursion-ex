/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length===0) return 1

  return nums[0]*product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length===1) return words[0].length
  return words[0].length > longest(words.slice(1))? words[0].length : longest(words.slice(1))
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <=1) return str
  return str[0]+everyOther(str.substring(2))
  
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <=1) return true
  
  return(
    (str[0] === str[str.length-1]) && isPalindrome(str.slice(1,str.length-1))?
     true :false)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (arr.length===0) return -1
  return (arr[0]===val)? idx :findIndex(arr.slice(1), val, idx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length<=1) return str
  return str[str.length-1]+revString(str.substring(0, str.length-1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  for (let [key, value]of Object.entries(obj)){
    if (typeof value === "string"){
      delete obj[key]
      return [value,...gatherStrings(obj)]
    }
    if (typeof obj[key] === "object"){
      delete obj[key]
      return [...gatherStrings(value), ...gatherStrings(obj)]
    }
  }
  return []
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, idx=0) {
  if (arr.length===0) return -1
  let leftIdx = idx;
  let rightIdx = arr.length - 1;
  let middleIdx = Math.floor((0 + rightIdx) / 2);
  let middleVal = arr[middleIdx];

  if (middleVal<val){
    return binarySearch(arr.slice(middleIdx+1),val,leftIdx+middleIdx+1)
  } else if (middleVal>val){
    return binarySearch(arr.slice(0,middleIdx-1),val,leftIdx)
  }else if (middleVal===val){
    return middleIdx+leftIdx
  }
  return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
