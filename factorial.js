
let n = 6;

function calculateFactorial (num){
    let factorial = 1;
    if(num === 0){
        return factorial;
    } else {
        for(let i = num; i > 1; i--,num--){
            factorial *=num
        }
    }
    return factorial;
}

console.log(calculateFactorial(n));