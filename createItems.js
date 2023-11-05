const todoList = document.querySelector(".todoItems");
const removeAllbtn = document.querySelector(".removeAllBtn");
const selectAllbtn = document.querySelector(".enterAllBtn");
const finishBtn = document.querySelector(".finishBtn");
import { myList } from "./myList.js";

//create the list for every item in the todos fetched and entered
export function createList(item) {
  const list = document.createElement("li");
  const listBtn = document.createElement("button");
  let listCheckbox = document.createElement("input");
  list.innerHTML = item;
  listBtn.classList.add("removeBtn");
  listBtn.textContent = "Remove";
  listCheckbox.type = "checkbox";
  listCheckbox.classList.add = "checkbox";
  todoList.append(list);
  list.append(listBtn);
  list.append(listCheckbox);
  //remove an item
  listBtn.addEventListener("click", () => {
    // const item1 = this.parentNode.textContent; // Get the item text from the parent element
    removeItem(item);
    list.remove(item);
  });
  //remove the selected items
  removeAllbtn.addEventListener("click", () => {
    if (listCheckbox.checked) {
      list.remove(item);
      listCheckbox.checked = false;
      removeItem(item);
    }
  });
  //select all the checkboxes
  let checkboxes = [];
  let isChecked = false;
  checkboxes.push(listCheckbox);
  selectAllbtn.addEventListener("click", () => {
    isChecked = !isChecked;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
    selectAllbtn.textContent = isChecked ? "Unselect all" : "Select all";
  });

  //finished items
  finishBtn.addEventListener("click", () => {
    if (listCheckbox.checked === true) {
      let finishedItems = document.querySelector(".finishedItems");
      let finished = document.createElement("div");
      finishedItems.append(finished);
      finished.append(item);
      listCheckbox.checked = false;
      list.remove(item);
    }
  });
}
//remove item from localstorage
function removeItem(item) {
  const index = myList.list.listTwo.indexOf(item);
  if (index !== -1) {
    myList.list.listTwo.splice(index, 1);
    localStorage.setItem("userInput", JSON.stringify(myList.list.listTwo));
  }
}
