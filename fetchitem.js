import { myList } from "./myList.js";
import { createList } from "./createItems.js";
function get() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((e) => {
        createList(e.title);
        myList.list.listOne.push(e.title);
      });
    });
}

export { get };
