const warningMessage = document.querySelector(".sub-exercices .warning");
document.querySelector(".sub-exercices").removeChild(warningMessage);

const expect = {
  a: [
    {
      check: () => exA("John", "Doe"),
      expectedResult: "John Doe",
    },
    {
      check: () => exA("Jane", "Doe"),
      expectedResult: "Jane Doe",
    },
  ],
  b: [
    {
      check: () => exB(128),
      expectedResult: "The number 128 is even",
    },
    {
      check: () => exB(55),
      expectedResult: "The number 55 is odd",
    },
    {
      check: () => exB(-2),
      expectedResult: "The number -2 is even",
    },
  ],
  c: [
    {
      check: () => exC("Linus", 1024),
      expectedResult: "Hello Linus, you have 1024 credits in your account",
    },
    {
      check: () => exC("José", 1),
      expectedResult: "Hello José, you have 1 credit in your account",
    },
    {
      check: () => exC("Cédric", 0),
      expectedResult: "Hello Cédric, you have 0 credits in your account",
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
      const res = value === test.expectedResult;
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
