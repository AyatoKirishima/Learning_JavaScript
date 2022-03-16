"use strict";

const getData = async () => {
  const response = await fetch("https://reqres.in/api/users/2");
  const result = await response.json();
  console.log(result.data.email);
};

getData();
