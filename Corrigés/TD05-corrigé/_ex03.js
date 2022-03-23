function exA(index) {
  const { id, first_name, last_name } = MOCK_DATA[index];
  return { id, first_name, last_name };
  // Alternativement, il était possible de passer par un spread de "rest" comme ceci:
  // const { age, country, email, gender, wallet_amount, ...rest } = MOCK_DATA[index];
  // return rest;
}

function exB(index) {
  data = MOCK_DATA[index];
  const { first_name, last_name } = data;
  return {
    ...data,
    full_name: `${first_name} ${last_name}`,
  };
}

function exC(index) {
  data = MOCK_DATA[index];
  const {
    first_name: firstName,
    last_name: lastName,
    wallet_amount: walletAmount,
    ...rest
  } = data;
  return {
    ...rest,
    firstName,
    lastName,
    walletAmount,
  };
}
