// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
  let messages = []
  for (let i = 0; i < names.length; i++) {
    messages.push("Thank you, " + names[i] +"," + " for the wonderful " + event + " gift!")
  }
  return messages;
}
function countDown() {
    let countDown = 10;
  while (countDown > -1) {
    console.log(countDown--);
  }
  }