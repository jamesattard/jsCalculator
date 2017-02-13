$(document).ready(function(){

  var opDict = {
    '+':'+',
    '-':'-',
    '÷':'/',
    '×':'*',
    'md':'%'
  },
  numArr = [0,1,2,3,4,5,6,7,8,9],
  entryArr = [];

  function inputCalc(input) {
    console.log(input);
    // If input is greater than 9 chars
    if (entryArr.length===9) {
      console.log('Display full');
    }
    // Make sure input does not start with an operator
    else if (entryArr.length===0 && !opDict.hasOwnProperty(input)) {
      entryArr.push(input);
      console.log('1st Val', entryArr);
    }
    // Make sure input is not two consecutive operators
    else if (opDict.hasOwnProperty(input) && !opDict.hasOwnProperty(entryArr[entryArr.length-1])) {
      entryArr.push(opDict[input]);
      console.log('2nd Val', entryArr);
    }
    // Make sure input is not two consecutive decimal points
    else if (input==='.' && entryArr[entryArr.length-1] != '.') {
      entryArr.push(input);
      console.log('3rd Val', entryArr);
    }
    // If number add to array
    else if (numArr.includes(Number(input))) {
      entryArr.push(input);
      console.log('4th Val', entryArr);
    }
    // If input did not pass validation rules, throw error
    else {
      console.log("Input error");
    }
    setDisplay();
  }

  function getResult() {
    var result=eval(entryArr.join(""))
    $("#dispResult").html(result);
    entryArr = [];
    entryArr.push(result);
  }

  function setDisplay() {
    console.log(entryArr);
    $("#dispResult").html(entryArr.join(""));
    if (entryArr.length==0) {
      $("#dispResult").html(0);
    }
  }

  $(".btn").click(function () {
    if (this.id==='AC'){
      entryArr = [];
      setDisplay();
    }
    else if (this.id==='←') {
      entryArr.pop();
      setDisplay();
    }
    else if (this.id==='ANS') {
      getResult();
    }
    else{
      inputCalc(this.id);
    }
  }); // end of OCF

}); // end of DRF
