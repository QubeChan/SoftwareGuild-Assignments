function playGame() {
  let startWager = parseInt(document.forms["formDisplay"]["wager"].value);
  let balance = startWager;
  let highScore = 0;
  let rollAtHighestBalance = 0;
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

    if (balance > highScore) {
      highScore = balance;
    }

    rollCount++;
    console.log(balance);
  }

  document.getElementById("divResults").style.display = "block";
  document.getElementById("startBet").innerText = `$ ${startWager}.00`;
  document.getElementById("rollBroke").innerText = `${rollCount} roll(s)`;
  document.getElementById("maxWon").innerText = `$${highScore}.00`;
  return false;
}

function rollDice() {
  let firstDie = Math.floor(Math.random() * 6) + 1;
  let secondDie = Math.floor(Math.random() * 6) + 1

  return firstDie + secondDie;
}
