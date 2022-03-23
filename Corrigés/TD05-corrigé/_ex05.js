const dataSet1 = [
  {
    id: 1,
    first_name: "Dennie",
    last_name: "Lambdean",
    email: "dlambdean0@spotify.com",
    gender: "Male",
    children: [],
  },
  {
    id: 2,
    first_name: "Garnette",
    last_name: "Bebb",
    email: "gbebb1@gravatar.com",
    gender: "Male",
    children: [
      {
        id: 1,
        first_name: "Candy",
        last_name: "Wedgbrow",
        email: "cwedgbrow0@nasa.gov",
        gender: "Female",
      },
      {
        id: 2,
        first_name: "Moses",
        last_name: "Stanesby",
        email: "mstanesby1@yale.edu",
        gender: "Male",
      },
    ],
  },
];

const dataSet2 = [
  {
    children: [],
    id: 1,
    first_name: "Dennie",
    gender: "Male",
    last_name: "Lambdean",
    email: "dlambdean0@spotify.com",
  },
  {
    id: 2,
    first_name: "Garnette",
    gender: "Male",
    last_name: "Bebb",
    email: "gbebb1@gravatar.com",
    children: [
      {
        id: 1,
        first_name: "Candy",
        last_name: "Wedgbrow",
        email: "cwedgbrow0@nasa.gov",
        gender: "Female",
      },
      {
        first_name: "Moses",
        id: 2,
        gender: "Male",
        last_name: "Stanesby",
        email: "mstanesby1@yale.edu",
      },
    ],
  },
];
const dataSet3 = [
  {
    id: 1,
    first_name: "Carleen",
    last_name: "Harle",
    email: "charle0@narod.ru",
    gender: "Female",
  },
  {
    id: 2,
    first_name: "Teresa",
    last_name: "Bosher",
    email: "tbosher1@hugedomains.com",
    gender: "Male",
  },
];

// Exemple d'implémentation d'une égalité d'objets relativement générique,
// Mais il y aura plein de situations où ce check ne suffira pas...
// Si les valeurs sont des objets Date, des fonctions... Il manque des cas
// pour que ça marche partout. En plus, c'est lourd à lire/maintenir/écrire
const areObjectsEqual = (obj1, obj2) => {
  // Vérification égalité des références (ou valeurs...)
  if (obj1 === obj2) {
    return true;
  }
  // Véricitation conditions si on a des tableaux
  if (Array.isArray(obj1) && obj1.length !== obj2?.length) {
    return false;
  }
  // recursive object equality check
  var p = Object.keys(obj1);
  return (
    Object.keys(obj2).every(function (i) {
      return p.indexOf(i) !== -1;
    }) &&
    p.every(function (i) {
      return areObjectsEqual(obj1[i], obj2[i]);
    })
  );
};

const areObjectsEqualLodash = (obj1, obj2) => {
  return _.isEqual(obj1, obj2);
};

// ==> Vérifications <==
// Solution méthode maison
console.group("Check manual method");
console.log("Expect false", areObjectsEqual(dataSet1, dataSet3));
console.log("Expect false", areObjectsEqual(dataSet3, dataSet1));
console.log("Expect false", areObjectsEqual(dataSet2, dataSet3));
console.log("Expect false", areObjectsEqual(dataSet3, dataSet2));
console.log("Expect true", areObjectsEqual(dataSet1, dataSet2));
console.log("Expect true", areObjectsEqual(dataSet2, dataSet1));
console.groupEnd("Check manual method");
// Solution avec lodash
console.group("Check lodash method");
console.log("Expect false", areObjectsEqualLodash(dataSet1, dataSet3));
console.log("Expect false", areObjectsEqualLodash(dataSet3, dataSet1));
console.log("Expect false", areObjectsEqualLodash(dataSet2, dataSet3));
console.log("Expect false", areObjectsEqualLodash(dataSet3, dataSet2));
console.log("Expect true", areObjectsEqualLodash(dataSet1, dataSet2));
console.log("Expect true", areObjectsEqualLodash(dataSet2, dataSet1));
console.groupEnd("Check lodash method");
