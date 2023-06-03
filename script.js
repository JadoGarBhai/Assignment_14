                    // Function to Enter Number.
function appendNumber(num) {
    document.getElementById("result").value += num;
}
                    
                    // Function to Perform Operator. 
function appendOperator(op) {
    document.getElementById("result").value += op;
}

                    // Function to Clear Screen.
function clearResult() {
    document.getElementById("result").value = result.value.toString().slice(0,0);
}

                    // Functions to Calculate Percentage.
function calculatePercentage() {
    let result = document.getElementById("result").value;

    try {
        let answer = eval(result + "/100");
        document.getElementById("result").value = answer;
    } catch (error) {
        console.log("error : " + error);
        document.getElementById("result").value = "Masti kr rya";
    }
}

                    // Functions to Calculate Result (Eval).
function calculate() {
    let result = document.getElementById("result").value;
    
    try {
        let answer = eval(result);
        document.getElementById("result").value = answer;
    } catch (error) {
        console.log("error : " + error);
        document.getElementById("result").value = "Masti kr rya";
    }

}