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
    // Make sure input does not start with an operator
    if (entryArr.length===0 && !opDict.hasOwnProperty(input)) {
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
    // If input is greater than 9 chars
    // else if {
    //
    // }
    // If input did not pass validation rules, throw error
    else {
      console.log("Input error");
    }
    setDisplay();
  }

  function setDisplay() {
    console.log(entryArr);
    $("#dispResult").html(entryArr.join(""));
  }

  $(".btn").click(function (){
    inputCalc(this.id);
  }); // end of OCF

}); // end of DRF
