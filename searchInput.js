const searchInput = document.querySelector(".searchInput");
const searchResults = document.querySelector(".searchResults");
import { list } from "./myList.js";
//search input for items
export function search() {
  searchInput.addEventListener("input", (e) => {
    const search = e.target.value.toLowerCase();

    searchResults.innerHTML = "";
    if (search > "") {
      for (let result of list.listOne) {
        if (result.includes(search)) {
          const searchContent = document.createElement("div");
          searchContent.textContent = result;
          searchResults.appendChild(searchContent);
        }
      }
      for (let result of list.listTwo) {
        if (result.includes(search)) {
          const searchContent = document.createElement("div");
          searchContent.textContent = result;
          searchResults.appendChild(searchContent);
        }
      }
    }
  });
}
