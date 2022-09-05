// using rest parameter, a function can be called with any number of arguments.
// Rest parameter is prefixed with three dots(...)

function show(...number) {
    let sum = 0;
    for (let i of number) {
        sum += i;
    }
    console.log("Sum = " + sum);
}
show(1, 2, 2, 3)