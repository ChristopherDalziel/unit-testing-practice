let numArr = []

const add = (num1,num2)=>
{
    if(typeof(num1) !== "number" || typeof(num2) !== "number" )
    {
        throw new TypeError("Not a valid number");
    }
    numArr.push(num1 + num2);
    return num1 + num2;
}

const addAll = (numArr) =>{
    return addAllTesting = numArr.reduce((a, b) => a+b );
}

const subtract = (num1,num2)=>{
    if(typeof(num1) !== "number" || typeof(num2) !== "number" )
    {
        throw new TypeError("Not a valid number");
    }
    return num1 - num2;
}

const multiply = (num1,num2)=>{
    if(typeof(num1) !== "number" || typeof(num2) !== "number" )
    {
        throw new TypeError("Not a valid number");
    }
    return num1 * num2
}

const multiplyAll = (numArr)=>{
    return multiplyAllTesting = numArr.reduce((a, b) => a*b);
}
const divide = (num1,num2)=>{
    if(typeof(num1) !== "number" || typeof(num2) !== "number" )
    {
        throw new TypeError("Not a valid number");
    }
    return num1 / num2
}

const printBinString = ( num ) =>
{
    let binString = "";
    if( num > 0 && num <= 1 )
    {
        console.log( num );
    }
    else if( num > 1 )
    {
        while( num > 1 )
        {
            binString = (num % 2 ) + binString;
            num = Math.floor( num / 2 ); 
        }
        binString = num + binString;
    }
    console.log( binString );
}

module.exports = {add,addAll,subtract,multiply,multiplyAll,divide,printBinString};