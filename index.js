const todoInput = document.querySelector("#todoInput");
const enterBtn = document.querySelector(".enterBtn");
const todoList = document.querySelector(".todoItems");
const removeAllbtn = document.querySelector(".removeAllBtn");
const selectAllbtn = document.querySelector(".enterAllBtn");
const finishBtn = document.querySelector(".finishBtn");
const searchInput = document.querySelector(".searchInput");
const searchResults = document.querySelector(".searchResults");
//listOne is for fetch and listTwo for user entered data
let list = {
  listOne: [],
  listTwo: [],
};
//clear the input
function clearInput() {
  todoInput.value = "";
}
//fetch data from website for practice and todo
const res = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((e) => {
      createList(e.title);
      list.listOne.push(e.title);
    });
  });
//search input for items
searchInput.addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase();

  searchResults.innerHTML = "";

  for (result of list.listOne) {
    if (result.includes(search)) {
      const gg = document.createElement("div");
      gg.textContent = result;
      searchResults.appendChild(gg);
    }
  }
  for (result of list.listTwo) {
    if (result.includes(search)) {
      const gg = document.createElement("div");
      gg.textContent = result;
      searchResults.appendChild(gg);
    }
  }
});
//gets the user entered todo from local storage
function LoadLocalStorage() {
  const savedList = localStorage.getItem("userInput");
  if (savedList !== null) {
    list.listTwo = JSON.parse(savedList);
    for (item of list.listTwo) {
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
//create the list for every item in the todos fetched and entered
function createList(item) {
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
  selectAllbtn.addEventListener("click", () => {
    if (listCheckbox.checked === false) {
      listCheckbox.checked = true;
      console.log("ss");
    } else {
      listCheckbox.checked = false;
    }
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
  const index = list.listTwo.indexOf(item);
  if (index !== -1) {
    list.listTwo.splice(index, 1);
    localStorage.setItem("userInput", JSON.stringify(list.listTwo));
  }
}

//Using the todos the user entered
function init() {
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

init();
LoadLocalStorage();
