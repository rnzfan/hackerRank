function reverseString(s) {
    try {
    return console.log(s.split("").reverse().join(""));
    } catch (e) {
        console.log(e.message);
        console.log(s);
    }
}
