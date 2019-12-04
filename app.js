const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const inputC = document.getElementById('c');
const inputArea = document.getElementById('area')
const inputPerimeter = document.getElementById('perimeter');
const button = document.getElementById('calculate');
const reset = document.getElementById('reset');

// button.addEventListener('click', calculateC);
reset.addEventListener('click', resetCalc)
inputA.addEventListener('keyup', calculateC)
inputB.addEventListener('keyup', calculateC)

function calculateC(){
  if(inputArea.value != '' && (inputA.value === '' || inputB.value === '')) {
    inputArea.value = '';
    inputPerimeter.value = '';
    inputC.value = '';
  }
  if(inputA.value != '' && inputB.value != ''){
    a = inputA.value
    b = inputB.value
    inputC.value = Math.sqrt(Math.pow(inputA.value, 2) + Math.pow(inputB.value, 2)).toFixed(2);
    calculatePerimeterAndArea();
  }
}

function calculatePerimeterAndArea(){
  inputArea.value = inputA.value * inputB.value * .5 
  inputPerimeter.value = (parseFloat(inputA.value) + parseFloat(inputB.value) + parseFloat(inputC.value)).toFixed(2)
}

function resetCalc(){
  inputA.value = '';
  inputB.value = '';
  inputC.value = '';
  inputArea.value = '';
  inputPerimeter.value = '';
}

