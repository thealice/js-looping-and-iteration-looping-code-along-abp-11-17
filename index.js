// Code your solutions in this file
function printBadges(arrayNames) {
  arrayNames = ['Ada', 'Brendan', 'Ali'];
  for (let i = 0; i < arrayNames.length; i++;) {
    console.log(`Welcome ${arrayNames[i]}! You are employee #${[i] + 1}.`);
  }
}
