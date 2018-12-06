 var number = 1;

function takeANumber(){
  return number + 1;
  // representing the # of people in the current line
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    // I know that shift removes the first element of an array, we want it to remove it and return it.
   return "Currently serving " + katzDeliLine.shift()+'.';  
  }
}

// rewrite the take a number function so that instead of returning 

function currentLine (line){
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    var sentence = "The line is currently:";
    for(var i = 0; i<line.length; i++){
          //looking to check that we're not at the last element, if we are not at the last element, do not add the commas, if we are, add the commas.
      if (i !== line.length - 1) {
        sentence = `${sentence} ${i + 1}. ${line[i]},`;
       } else {
       sentence = `${sentence} ${i + 1}. ${line[i]}`;
       }
    }
 return sentence;
  }
}