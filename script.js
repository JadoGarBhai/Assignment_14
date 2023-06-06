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

                    // Functions to Calculate Result (Eval).
function calculate() {
    let result = document.getElementById("result_01").value;
    
    try {
        let answer = eval(result);
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
        // Show scientific calculator and change the image
        scientificCalc.classList.remove('hidden');
        buttonSection.classList.add('hidden');
        img.src = './assests/converter_01.png';
        img.style.height = '30px';
        result1.style.height = '81px';
        result2.style.height = '81px';
    } else {
        // Show button section and change the image back
        buttonSection.classList.remove('hidden');
        scientificCalc.classList.add('hidden');
        img.src = './assests/converter.png';
        img.style.height = '25px';
        result1.style.height = '120px';
        result2.style.height = '120px';
    }
}