function exA(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function exB(num) {
  if (num % 2 == 0) {
    return `The number ${num} is even`;
  }
  else {
    return `The number ${num} is odd`;
  }
}

function exC(name, noCredits) {
  if ((noCredits > 1) || (noCredits == 0)) {
    return `Hello ${name}, you have ${noCredits} credits in your account`;
  } else {
    return `Hello ${name}, you have ${noCredits} credit in your account`;
  }
}
