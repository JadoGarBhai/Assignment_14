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

                    // Function to Calculate Square Root.
function sqrRoot() {
    document.getElementById("result_01").value = Math.sqrt(result.value).toFixed(4);
}

                    // Function to Calculate Log.
function calculateLog() {
    let result = document.getElementById("result_01").value;

    try {
        let answer = eval(result + 'Math.log10');
        document.getElementById("result_02").value = answer;
    } catch (error) {
        console.log("error : " + error);
        document.getElementById("result_02").value = "Masti kr rya";
    }
}

                    // Function to Calculate Ln.
function calculateLn() {
    document.getElementById("result").value = Math.log(result.value).toFixed(4);
}

                    // Alert and Value.
function valueOfSin() {
    appendNumber('Sin(');
    alert("Please make sure to close the bracket after entering the value.");
}

                    // Functions to Calculate Trigonometric Values. 
function calculateSin() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let sin = Math.sin(slice * (Math.PI / 180)).toFixed(4);
    return sin;
}
function calculateCos() {
    
}
function calculateTan() {
    
}

                    // Functions to Calculate Inverse Trigonometric Values.
function calculateSinInverse() {
    let result1 = document.getElementById('result_01').value;
    let slice = result1.slice(4, -1);
    let sinInverse = 1 / (1 / (Math.sin(slice * (Math.PI / 180))));
    return sinInverse;
}
function calculateCosInverse() {
   
}
function calculateTanInverse() {
    
}


                    // Functions to Calculate Percentage.
function calculatePercentage() {
    let result = document.getElementById("result_01").value;

    try {
        let answer = eval(result + "/100");
        document.getElementById("result_02").value = answer;
    } catch (error) {
        console.log("error : " + error);
        document.getElementById("result_02").value = "Masti kr rya";
    }
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
    }
}