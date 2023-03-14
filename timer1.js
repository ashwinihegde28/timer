/*
This progrma will beep for the given seconds
Conditions:
- No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
- An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
- An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number. 
- Uses use process.stdout.write('\x07');
*/

const timer = function(numberList){
  const beep = '\x07';
  // If nothing passed as argument return nothing 
  if(numberList.length === 0){
      return ;
  }
  // for each timer in the list  
  for (let num of numberList) {
      // return if the number is negative or not a number
      if(!isNaN(num) && num > 0){
          //set the timer beep to seconds mentioned in the arguments.
      setTimeout(() => {
          process.stdout.write(beep);
          }, num * 1000);
      }    
  }
};

timer([1, 3]);