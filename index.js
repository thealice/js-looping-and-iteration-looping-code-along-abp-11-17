// Code your solutions in this file
function printBadges(arrayNames) {
  for (let i = 0; i < arrayNames.length; i++) {
    console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`);
    return arrayNames[i];
  }
}
