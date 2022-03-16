const warningMessage = document.querySelector(".sub-exercices .warning");
document.querySelector(".sub-exercices").removeChild(warningMessage);

function objectEquals(x, y) {
  "use strict";

  if (x === null || x === undefined || y === null || y === undefined) {
    return x === y;
  }
  // after this just checking type of one would be enough
  if (x.constructor !== y.constructor) {
    return false;
  }
  // if they are functions, they should exactly refer to same one (because of closures)
  if (x instanceof Function) {
    return x === y;
  }
  // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
  if (x instanceof RegExp) {
    return x === y;
  }
  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }
  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  }

  // if they are dates, they must had equal valueOf
  if (x instanceof Date) {
    return false;
  }

  // if they are strictly equal, they both need to be object at least
  if (!(x instanceof Object)) {
    return false;
  }
  if (!(y instanceof Object)) {
    return false;
  }

  // recursive object equality check
  var p = Object.keys(x);
  return (
    Object.keys(y).every(function (i) {
      return p.indexOf(i) !== -1;
    }) &&
    p.every(function (i) {
      return objectEquals(x[i], y[i]);
    })
  );
}

const expect = {
  a: [
    {
      check: () => exA(1),
      expectedResult: {
        id: "43018b5a-be86-4ff7-b1c2-551f9f16e12a",
        first_name: "Chicky",
        last_name: "Dibben",
      },
    },
    {
      check: () => exA(42),
      expectedResult: {
        id: "ba60a87c-ed28-4d96-b908-222850670ad9",
        first_name: "Crystie",
        last_name: "Orable",
      },
    },
    {
      check: () => exA(158),
      expectedResult: {
        id: "ec6f8c5c-cf69-4a1c-8234-80db0cdf5336",
        first_name: "Deina",
        last_name: "Eilles",
      },
    },
  ],
  b: [
    {
      check: () => exB(1),
      expectedResult: {
        id: "43018b5a-be86-4ff7-b1c2-551f9f16e12a",
        first_name: "Chicky",
        last_name: "Dibben",
        email: "cdibben1@e-recht24.de",
        gender: "Female",
        country: "France",
        age: 95,
        wallet_amount: "$62",
        full_name: "Chicky Dibben",
      },
    },
    {
      check: () => exB(128),
      expectedResult: {
        id: "af1202e9-e032-469a-8674-76149a96bb3b",
        first_name: "Tonie",
        last_name: "Milleton",
        email: "tmilleton3k@umich.edu",
        gender: "Genderqueer",
        country: "United Kingdom",
        age: 90,
        wallet_amount: "$22",
        full_name: "Tonie Milleton",
      },
    },
    {
      check: () => exB(867),
      expectedResult: {
        id: "46257bfe-7227-4a9f-9de4-b62869f66f17",
        first_name: "Trip",
        last_name: "Varns",
        email: "tvarnso3@blogspot.com",
        gender: "Female",
        country: "France",
        age: 16,
        wallet_amount: "$33",
        full_name: "Trip Varns",
      },
    },
  ],
  c: [
    {
      check: () => exC(1),
      expectedResult: {
        firstName: "Chicky",
        lastName: "Dibben",
        walletAmount: "$62",
        id: "43018b5a-be86-4ff7-b1c2-551f9f16e12a",
        email: "cdibben1@e-recht24.de",
        gender: "Female",
        country: "France",
        age: 95,
      },
    },
    {
      check: () => exC(512),
      expectedResult: {
        firstName: "Nicolle",
        lastName: "Liepins",
        walletAmount: "$87",
        id: "75a3add3-ea3d-429a-935e-815c04d2e1fe",
        email: "nliepinse8@e-recht24.de",
        gender: "Female",
        country: "France",
        age: 59,
      },
    },
    {
      check: () => exC(927),
      expectedResult: {
        firstName: "Gordie",
        lastName: "Faucett",
        walletAmount: "$62",
        id: "6b7b8d1c-d3fa-4a39-b190-3032ce45996f",
        email: "gfaucettpr@lycos.com",
        gender: "Male",
        country: "France",
        age: 40,
      },
    },
  ],
};

const checkExercice = (id) => {
  console.group("Check EX", id.toUpperCase());
  const mainElement = document.querySelector(`#${id}`);
  try {
    let checkFailed = false;
    expect[id].forEach((test, index) => {
      const value = test.check();
      const res = objectEquals(value, test.expectedResult);
      if (!res) {
        console.warn(index, "Check failed!");
        console.warn("Expected", test.expectedResult);
        console.warn("Got", value);
        checkFailed = true;
      } else {
        console.info(index, "Check cleared!");
      }
    });
    if (checkFailed) {
      mainElement.querySelector("dt").style.backgroundColor = "#F44336";
      mainElement.querySelector(".icon").innerText = "❌";
    } else {
      mainElement.querySelector("dt").style.backgroundColor = "#8BC34A";
      mainElement.querySelector(".icon").innerText = "✔";
    }
  } catch (error) {
    console.error("ERROR During check for ex id", id);
    console.error(error);
    mainElement.querySelector("dt").style.backgroundColor = "#FDD835";
    mainElement.querySelector("dt .text").innerText =
      mainElement.querySelector("dt .text").innerText + " (ERROR)";
    mainElement.querySelector(".icon").innerText = "⚠";
  }
  console.groupEnd("Check EX", id.toUpperCase());
};

console.time("check");
Object.keys(expect).forEach((key) => checkExercice(key));
console.timeEnd("check");
