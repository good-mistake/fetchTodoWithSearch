import { saveStorage } from "./localStorage.js";
import { clearInput } from "./clearInput.js";
import { list } from "./myList.js";
import { createList } from "./createItems.js";
const todoInput = document.querySelector("#todoInput");
const enterBtn = document.querySelector(".enterBtn");
//Using the todos the user entered
export function init() {
  enterBtn.addEventListener("click", () => {
    let val = todoInput.value;
    console.log(val);
    if (val.trim() === "") {
      todoInput.classList.add("red");
    } else {
      list.listTwo.push(val);
      createList(val);
      saveStorage();

      clearInput();
    }
  });
}
