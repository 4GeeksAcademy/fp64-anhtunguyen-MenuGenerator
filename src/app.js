/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = () => {
  document.querySelector("#menu").innerHTML = generateMenu();
};
const getRandomElement = array => {
  return array[Math.floor(Math.random() * array.length)];
};
const getStarter = () => {
  const starter = ["Spring rolls", "Dumplings", "Rice cake", "Chicken salad"];
  return getRandomElement(starter);
};
const getMainCourse = () => {
  const mainCourse = ["Bun cha", "Pho", "Fried noodles", "Fried rice"];
  return getRandomElement(mainCourse);
};
const getDessert = () => {
  const dessert = [
    "Matcha cake",
    "Seasame icecream",
    "Passionfruit cheesecake"
  ];
  return getRandomElement(dessert);
};
const getDrink = () => {
  const drink = ["Water", "Wine", "Coke", "Tea"];
  return getRandomElement(drink);
};
const getMenu = (starter, mainCourse, dessert, drink) => {
  return `
  <h2>${starter}</h2>
  <h2>${mainCourse}</h2>
  <h2>${dessert}</h2>
  <h2>${drink}</h2> `;
};

const generateMenu = () => {
  const starter = getStarter();
  const mainCourse = getMainCourse();
  const dessert = getDessert();
  const drink = getDrink();
  const menu = getMenu(starter, mainCourse, dessert, drink);
  return menu;
};
