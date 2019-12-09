const {add,addAll,subtract,multiply,multiplyAll,divide,printBinString} = require("./mathOps");

test("This will test the addition of two numbers", () => {
    expect(add(10,5)).toBe(15);
});

test("This will add all the numbers in the array together into one", () => {
    expect(addAll([10, 5, 0])).toBe(15);
});

test("this will multiply all the numbers in the array into one", () => {
    expect(multiplyAll([8, 10, 2])).toBe(160);
});

test("This will test the validity of the input for the add function", () => {
    const inputValidity = () =>
    {
        add( "Hello "," World" );
    };
    expect(inputValidity).toThrow(TypeError);
});

test( "Test if the console log of binary string is as expected", () => {
    //spyOn first argument is the object you need to spy and the second
    //argument is the method you want to spy
    const log = jest.spyOn(global.console, 'log');
    printBinString( 320 );
    expect(log).toHaveBeenCalledWith( '101000000' );
});

test("This will be the subtraction of two numbers", () => {
    expect(subtract(5,2)).toBe(3);
});

test("This will be the multiplication of two numbers", () => {
    expect(multiply(5,0)).toBe(0);
});

test("This will divide two numbers", () => {
    expect(divide(6,3)).toBe(2);
});