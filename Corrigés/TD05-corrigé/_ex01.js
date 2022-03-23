function exA(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function exB(num) {
  return `The number ${num} is ${num % 2 === 0 ? "even" : "odd"}`;
}

function exC(name, noCredits) {
  return `Hello ${name}, you have ${noCredits} credit${
    noCredits !== 1 ? "s" : ""
  } in your account`;
}
