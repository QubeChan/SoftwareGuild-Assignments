function playGame() {
  let startWager = parseInt(document.forms["formDisplay"]["wager"].value);
  let balance = startWager;
  let rollCount = 0;

  if (startWager === "" || isNaN(startWager) || startWager <= 0) {
    alert("Invalid bet, please use a number");
    return false;
  }

  while (balance > 0) {
    if (rollDice() === 7) {
      balance += 4;
    } else {
      balance -= 1;
    }
    rollCount++;
    console.log(balance);
  }

  document.getElementById("divResults").style.display = "block";
  document.getElementById("startBet").innerText = `$ ${startWager}.00`;
  document.getElementById("rollBroke").innerText = `${rollCount} rolls`;
  return false;
}

function rollDice() {
  let firstDie = Math.floor(Math.random() * 6) + 1;
  let secondDie = Math.floor(Math.random() * 6) + 1

  return firstDie + secondDie;
}
