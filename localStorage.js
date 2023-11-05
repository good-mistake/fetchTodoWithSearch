import { createList } from "./createItems.js";
import { myList } from "./myList.js";

//saves the user entered todo to local storage
function saveStorage(item) {
  if (item) {
    let listItem = { title: item.title };
    myList.list.listTwo.push(listItem);
    localStorage.setItem("userInput", JSON.stringify(myList.list.listTwo));
  }
  localStorage.setItem("userInput", JSON.stringify(myList.list.listTwo));
}
//gets the user entered todo from local storage
function LoadLocalStorage() {
  let savedList = localStorage.getItem("userInput");
  if (savedList !== null) {
    myList.list.listTwo = JSON.parse(savedList);
    for (let item of myList.list.listTwo) {
      createList(item);
    }
  } else {
    console.log("No Data Found");
  }
}
export { saveStorage, LoadLocalStorage };
