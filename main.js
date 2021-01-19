
/*function numberCheck(x,y) {
var x, y, z= x + y;
    if (typeof x == number && x === 100) {
        document.getElementById('sum').innerHTML = "First Number is 100";
    }
    else if (typeof y == number && y === 100) {
        document.getElementById('sum').innerHTML = "Second Number is 100";

    }
    else if (typeof x == number && typeof y == number && x === 100 && y === 100) {
        document.getElementById('sum').innerHTML = "Both Numbers are 100";
    }
    else if (z === 100) {
        document.getElementById('sum').innerHTML = "Sum of two Numbers is 100";
    }
    else if (typeof x == number && typeof y == number && x !== 100 && y !== 100 && z !== 100) {
        document.getElementById('sum').innerHTML = "None of numbers nor their sum is 100";
    }
    else if (typeof x != number || typeof y != number) {
        document.getElementById('sum').innerHTML = "Please Enter a Valid Number";
    }
}*/


function inputPrompt() {
    var x = document.getElementById('firstNumber').value,
        y = document.getElementById('secondNumber').value,
        a = Number(x),
        b = Number(y),
        z = a + b;
        if(isNaN(x) == true || isNaN(y) == true){
            document.getElementById('dispMessage').innerHTML="ERROR: Input Must Be A Valid Number";
        }
        else if( x == 100 && y == 100 ){
            document.getElementById('dispMessage').innerHTML = "Both The Inputs are 100";
        }
        else if( x == 100 || y == 100){
            document.getElementById('dispMessage').innerHTML="One of the Input is 100";
        }
       
        else if( z == 100){
            document.getElementById('dispMessage').innerHTML="Sum of the inputs is 100";
        }
        else{
            document.getElementById('dispMessage').innerHTML="Neither Any Input Nor their sum is 100";
        }
        console.log(typeof a);
        console.log(isNaN(a));
}