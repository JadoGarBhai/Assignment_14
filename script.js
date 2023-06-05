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
function toggleMode() {
    const body = document.querySelector('body');
    body.classList.toggle('scientific-calculator');
                        
    const toggleButton = document.getElementById('toggle-button');
    if (body.classList.contains('scientific-calculator')) {
        document.getElementsByClassName('scientific-calculator').remove(style.display);
    } else {
        toggleButton.body.classList = 'button-section';
    }
}

// [ 
//     let result1 = document.getElementById('result_01');
//         result1.style.height = '70px';
//     let result2 = document.getElementById('result_02');
//         result2.style.height = '70px';
// ]