function superDigit(n, k) {

    let p = k * (n.split("").map((j)=>parseInt(j,10)).reduce((a,b)=>(a+b)));

    return parseInt(super_digit(p.toString()), 10);
}

function super_digit(pstr) {

    if (pstr.length > 1) {
        return super_digit(pstr.split("").map((j)=>parseInt(j,10)).reduce((a,b)=>(a+b)).toString());
    }
    return pstr;
    
    
}

console.log(superDigit("148", 3));
