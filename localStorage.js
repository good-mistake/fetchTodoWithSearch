import { list } from "./myList.js";
import { createList } from "./createItems.js";
//gets the user entered todo from local storage
function LoadLocalStorage() {
  const savedList = localStorage.getItem("userInput");
  if (savedList !== null) {
    list.listTwo = JSON.parse(savedList);
    for (let item of list.listTwo) {
      createList(item);
    }
    console.log(list.listTwo);
  } else {
    console.log("No Data Found");
  }
}
//saves the user entered todo to local storage
function saveStorage(item) {
  if (item) {
    const listItem = { title: item.title };
    list.listTwo.push(listItem);
    localStorage.setItem("userInput", JSON.stringify(list.listTwo));
  }
  localStorage.setItem("userInput", JSON.stringify(list.listTwo));
}
export { saveStorage, LoadLocalStorage };
