import moment from "moment";

// Static Import
// import { getUsers } from "./common/usersAPI";

const getUserModule = () => import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");

import "./style.css";
import "./style.scss";

console.log("Hello webpack!");

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();

// Static Import and invoke
// getUsers().then((json) => console.log(json));

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json));
  });
});
