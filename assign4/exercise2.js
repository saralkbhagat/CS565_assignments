
function ReverseDigitsOld (x) {
    console.log("Starting ReverseDigits\ninput: "+x+"\noutput: ");
    while (x > 0) {
        var y = Math.round(((x / 10) - Math.floor(x / 10 )) * 10);
        console.log(y);
        x = Math.floor(x / 10);
    }
}
ReverseDigitsOld(231756);


function ReverseDigitsBetter (x) {
    console.log("Starting ReverseDigits\ninput: "+x);
    x = x + ""
    console.log("output: "+x.split("").reverse().join(""));
}
ReverseDigitsBetter(231756);