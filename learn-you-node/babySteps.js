function babySteps(input) {
    var sumOfArgs = 0;
    for (var i=2; i<input.length; i++) {
        sumOfArgs += Number(input[i]);
    }
    return sumOfArgs;
}

var a = babySteps(process.argv);
console.log(a);