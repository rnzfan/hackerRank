function isPalindrome(s) {
  

    if (s.substring(0, Math.floor(s.length/2)) == s.substring(s.length - Math.floor(s.length/2)).split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

function palindromeIndex(s) {
    // Write your code here
    if (isPalindrome(s)) return -1;

    for (let i=0; i<s.length; i++) {
        let testString = s.substring(0,i) + s.substring(i+1, s.length);
        if (isPalindrome(testString)) {
            return i;
        }
    }
    return -1;

}

let s = "baa";
console.log(palindromeIndex(s));