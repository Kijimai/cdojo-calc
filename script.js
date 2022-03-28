const calculatorContainer = document.getElementById("calculator")
let screenNumber = 0

function press(key) {
  console.log("clicked!", key)
}

function setOP(operation) {
  switch (operation) {
    case "/":
      console.log("divide")
      break
    case "*":
      console.log("multiply")
      break
    case "-":
      console.log("minus")
      break
    case "+":
      console.log("plus")
      break
    default:
      break
  }
}

function calculate() {
  console.log("calculating!")
}

function clr() {
  console.log("clearing!")
}
