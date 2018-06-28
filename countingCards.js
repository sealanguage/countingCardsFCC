// counting cards not working yet

var count = 0;

function cc(card) {
  // Only change code below this line
  
for(var i = 0; i < cardseq; i++) {
   
   if (card >= 2 && card <= 6) {
    count++;
    console.log("high" + count);
  } else if (card === 10) {
    count--;
    // console.log("mid" + count);
  } else if (card == 'J', 'Q', 'K', 'A') {
    count--;
    // console.log("low" + count);
  }
}

if(count > 0) {
  return count + "Bet";
} else if (count <= 0) {
  return count + "Hold";
  return count;
}

 
  
  // return "count";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');