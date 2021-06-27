"use strict";
const joke = document.getElementById("joke");
const btn = document.getElementById("btn");

btn.addEventListener("click", getAjoke);

async function getAjoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jokeRes = await response.json();
  console.log(jokeRes);
  joke.innerHTML = jokeRes.joke;
}
