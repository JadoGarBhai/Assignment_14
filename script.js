                    // Function to Enter Number.
function appendNumber(num) {
    document.getElementById("result_01").value += num;
}
                    
                    // Function to Perform Operator. 
function appendOperator(op) {
    document.getElementById("result_01").value += op;
}

                    // Function to Clear Screen.
function clearResult() {
    document.getElementById("result_01").value = "";
    document.getElementById("result_02").value = "";
}

                    //Function to Delete One Number
function delResult() {
    document.getElementById('result_01').value = document.getElementById('result_01').value.slice(0, -1);
}

                    // Show of Values
function valueOfSqrRoot() {
    appendNumber('√');
}

                    // Log 10
function valueOfLog() {
    appendNumber('lg(');
    alert("Please make sure to close the bracket after entering the value. For Example: lg(00)");
}

                    // Ln Function for Value.
function valueOfLn() {
    appendNumber('ln(');
    alert("Please make sure to close the bracket after entering the value. For Example: ln(00)");
}

                    // Percentage Value.
function valueOfPercentage() {
    appendNumber('%');
}

                    // Function to Calculate Square Root.
function calculateSqrRoot() {
    let result1 = document.getElementById('result_01').value;
    let parse = result1.slice(1);
    let sr = Math.sqrt(parse).toFixed(4);
    return sr;
}

                    // Function to Calculate Log.
function calculateLog() {
    let result1 = document.getElementById('result_01').value;
    let parse = result1.slice(3, -1);
    let lg = Math.log10(parse).toFixed(4);
    return lg;
}

                    // Function to Calculate Ln.
function calculateLn() {
    let result1 = document.getElementById('result_01').value;
    let parse = result1.slice(3, -1);
    let ln = Math.log(parse).toFixed(4);
    return ln;
}

                    // Functions to Calculate Percentage.
function calculatePercentage() {
let result1 = document.getElementById("result_01").value;
let result = parseFloat(result1);
let answer = (result / 100);
return answer;
}

                    // Alert and Trigonometric Value.
function valueOfSin() {
    appendNumber('Sin(');
    alert("Please make sure to close the bracket after entering the value. For Example: Sin(45)");
}
function valueOfCos() {
    appendNumber('Cos(');
    alert("Please make sure to close the bracket after entering the value. For Example: Cos(45)");
}
function valueOfTan() {
    appendNumber('Tan(');
    alert("Please make sure to close the bracket after entering the value. For Example: Tan(45)");
}
function valueOfSinInv() {
    appendNumber('arcsin(');
    alert("Please make sure to close the bracket after entering the value. For Example: arcsin(45)");
}
function valueOfCosInv() {
    appendNumber('arccos(');
    alert("Please make sure to close the bracket after entering the value. For Example: arccos(45)");
}
function valueOfTanInv() {
    appendNumber('arctan(');
    alert("Please make sure to close the bracket after entering the value. For Example: arctan(45)");
}

                    // Functions to Calculate Trigonometric Values. 
function calculateSin() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let sin = Math.sin(slice * (Math.PI / 180)).toFixed(4);
    return sin;
}
function calculateCos() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let cos = Math.cos(slice * (Math.PI / 180)).toFixed(4);
    return cos;
}
function calculateTan() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let tan = Math.tan(slice * (Math.PI / 180)).toFixed(4);
    return tan;
}

                    // Functions to Calculate Inverse Trigonometric Values.
function calculateSinInverse() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let sinInverse = 1 / (1 / (Math.sin(slice * (Math.PI / 180))));
    return sinInverse;
}
function calculateCosInverse() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let cosInverse = 1 / (1 / (Math.sin(slice * (Math.PI / 180))));
    return cosInverse;
}
function calculateTanInverse() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let tanInverse = 1 / (1 / (Math.sin(slice * (Math.PI / 180))));
    return tanInverse;
}


                    // Function for Toggle.
function slider() {
    let scientificCalc = document.querySelector('.scientific-calculator');
    let buttonSection = document.querySelector('.button-section');
    let img = document.querySelector('.nav-bar img');
    let result1 = document.getElementById('result_01');
    let result2 = document.getElementById('result_02');
    
    if (scientificCalc.classList.contains('hidden')) {
        scientificCalc.classList.remove('hidden');
        buttonSection.classList.add('hidden');
        img.src = './assests/converter_01.png';
        img.style.height = '30px';
        result1.style.height = '81px';
        result2.style.height = '81px';
    } else {
        buttonSection.classList.remove('hidden');
        scientificCalc.classList.add('hidden');
        img.src = './assests/converter.png';
        img.style.height = '25px';
        result1.style.height = '120px';
        result2.style.height = '120px';
    }
}

                        // Functions to Calculate Result (Eval).
function calculate() {
    let result = document.getElementById('result_01').value;
    try {
        let answer = eval(result);
        document.getElementById('result_02').value = answer;
    } catch (error) {
        console.log('error: ' + error);
        document.getElementById('result_02').value = 'Error';
    }
    
    if (result.includes('Sin(')) {
        let answer = calculateSin();
        document.getElementById('result_02').value = answer;
    }else if (result.includes('Cos(')) {
        let answer = calculateCos();
        document.getElementById('result_02').value = answer;
    }else if (result.includes('Tan(')) {
        let answer = calculateTan();
        document.getElementById('result_02').value = answer;
    }else if (result.includes('arcsin')) {
        let answer = calculateSinInverse();
        document.getElementById('result_02').value = answer;
    }else if (result.includes('arccos(')) {
        let answer = calculateCosInverse();
        document.getElementById('result_02').value = answer;
    }else if (result.includes('arctan(')) {
        let answer = calculateTanInverse();
        document.getElementById('result_02').value = answer;
    }else if (result.includes('√')) {
        let answer = calculateSqrRoot();
        document.getElementById('result_02').value = answer;
    }else if (result.includes('lg(')) {
        let answer = calculateLog();
        document.getElementById('result_02').value = answer;
    }else if (result.includes('ln(')) {
        let answer = calculateLn();
        document.getElementById('result_02').value = answer;
    }else if (result.includes('%')) {
        let answer = calculatePercentage();
        document.getElementById('result_02').value = answer;
    }
}