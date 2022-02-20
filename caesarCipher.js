

function caesarCipher(s, k) {
    let smallK = k % 26;
    let stringArray = [];
    // Write your code here
    for (let i=0; i<s.length; i++) {
        let newPosition = s.charCodeAt(i)+smallK;
        if (s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90) {
            if (newPosition<=90) {
                stringArray[i] = String.fromCharCode(newPosition);
                
            } else {
                stringArray[i] = String.fromCharCode(newPosition-90+64);
            }
        } else if (s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122) {
            if (newPosition<=122) {
                stringArray[i] = String.fromCharCode(newPosition);
            } else {
                stringArray[i] = String.fromCharCode(newPosition-122+96);
            }
        } else {
            stringArray[i] = s[i];
        }
        
    }
    return stringArray.join("");

}

let s = 'middle-Outz';
console.log(caesarCipher(s, 2));