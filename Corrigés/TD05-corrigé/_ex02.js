function exA() {
  // Implémentez votre solution ici au sous-exercice A
  return MOCK_DATA.map((item) => item.id);
  // Alternativement, on pourrait combiner cette solution avec une déstructuration:
  // return MOCK_DATA.map(({id}) => id);
  // On pourrait faire pareil avec les solutions des prochains sous-exercices
}

function exB() {
  // Implémentez votre solution ici au sous-exercice B
  return MOCK_DATA.map((item) => `${item.first_name} ${item.last_name}`);
}

function exC() {
  // Implémentez votre solution ici au sous-exercice C
  return MOCK_DATA.filter((item) => item.country === "Luxembourg");
}

function exD() {
  // Implémentez votre solution ici au sous-exercice D
  return MOCK_DATA.find((item) => item.email === "ahaxley4@myspace.com");
}

function exE() {
  // Implémentez votre solution ici au sous-exercice E
  return MOCK_DATA.reduce(
    (acc, item) => acc + parseInt(item.wallet_amount.replace("$", "")),
    0
  );
}

function exF() {
  // Implémentez votre solution ici au sous-exercice F
  return MOCK_DATA.filter((item) => item.age >= 50).reduce(
    (acc, item) => acc + parseInt(item.wallet_amount.replace("$", "")),
    0
  );
}
