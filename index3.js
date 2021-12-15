function pressButton(number) {
    let console = document.getElementById("console");
    console.value += number;
}

function clearConsole() {
    let console = document.getElementById("console");
    console.value = "";
}

//eval() => để tính biểu thức trong js
//VD: eval('3+5') => 8
function calculate() {
    let console = document.getElementById("console").value;
    let result = eval(console);
    document.getElementById("console").value = result;
}



















