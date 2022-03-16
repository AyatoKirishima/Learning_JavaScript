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

const areObjectsEqual = (obj1, obj2) => {
  return false;
};
