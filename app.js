function result(num) {
    var inputsrn = document.getElementById("inputsrn")
    inputsrn.value += num
}
function clearinput() {
    var inputsrn = document.getElementById("inputsrn")
    inputsrn.value = "  "
}
function final() {
    var inputsrn = document.getElementById("inputsrn")
    inputsrn.value = eval(inputsrn.value)
}

