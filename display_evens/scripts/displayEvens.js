function validateItems() {
  let startNum = parseInt(document.forms["formDisplayEvens"]["startNum"].value),
    endNum = parseInt(document.forms["formDisplayEvens"]["endNum"].value),
    stepNum = parseInt(document.forms["formDisplayEvens"]["stepNum"].value);

  // // debugging to test datatype of user input
  // console.log(typeof startNum);
  // console.log(parseInt(endNum));
  // console.log(stepNum);

  if (startNum === "" || isNaN(startNum)) {
    alert("Starting number field must be filled out with a number");
    return false;
  } else if (endNum === "" || isNaN(endNum) || endNum < startNum) {
    alert("Ending number field must be filled out with a number and should be greater than the starting number");
    return false;
  } else if (stepNum === "" || isNaN(stepNum || stepNum <= 0)) {
    alert("Step field must be filled out with a positive number")
  }

  let results = findEvens(startNum, endNum, stepNum);
  document.getElementById("sectionResults").style.display = "block";
  document.getElementById("results").innerText = `Here are the even numbers between ${startNum} and ${endNum} by increments of ${stepNum}'s:\n`

  for(let i = 0; i<results.length;i++){
    document.getElementById("results").innerText += `${results[i]}\nj`
  }

  // return false so the form doesn't submit and we can see the results
  return false;
}

function findEvens(startNum, endNum, increment) {
  let results = [];
  for (let i = startNum; i < endNum; i += increment) {
    if (i % 2 === 0) {
      results.push(i);
    }
  }
  return results;
}

// // testing function should log 4, 10, 16
// console.log(findEvens(4,20,3));
