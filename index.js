// Code your solutions in this file
function printBadges(arrayNames) {
  for (let i = 0; i < arrayNames.length; i++) {
    console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`);
  }
  return arrayNames;
}

function tailsNeverFails() {
  return Math.random() >= 0.5;
}

while (counter = 0; tailsNeverFails() === true; counter++) {
  return `"You got ${counter + 1} tails in a row!"`;
}
