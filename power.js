function calculatePower(base, exponent){
    let result = 1;
    if(exponent === 0){
        return result = 1;
    } else {
        for(let i = 1;i <= exponent; i++){
            result *= base;
        }
    }
    return result;
}

console.log(calculatePower(3,3));