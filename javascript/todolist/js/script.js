
const form = document.querySelector(".form");
const input = document.querySelector("#task");
const addButton = document.querySelector(".button");
const list = document.querySelector("#list");
const removeButton = document.querySelector(".delete-button");


let todoList = [];


const renderDOM = () => {
  list.innerHTML = "";

  
  todoList.map((todo) => {
    const li = document.createElement("li");

    li.id = todo.id;
    li.classList =
      "todo-item d-flex justify-content-between align-items-center";
    li.dataset.checked = todo.checked;
    li.innerHTML = `
    ${todo.name}<span class="delete-button btn btn-danger ">&times;</span>
    `;

    list.append(li); 
  });
};


const addLocalStorage = (todoList) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));

  renderDOM();
};


const getLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todoList"));

  
  todos ? (todoList = todos) : (todolist = []);

  renderDOM();
};


const addTodo = (item) => {
  
  if (!item) {
    $("#error").toast("show");
    return false;
  } else {
    $("#added").toast("show");
  }


  const todo = {
    id: Date.now(),
    name: item,
    checked: false,
  };

 
  todoList.push(todo);
  addLocalStorage(todoList);

  input.value = ""; 
};


const toggleTodo = (item) => {
  
  todoList.map((item) => {
    if (item.checked === false) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });


  if (!item.className.includes("checked")) {
    item.classList.add("checked");
    item.dataset.checked = true;
  } else {
    item.classList.remove("checked");
    item.dataset.checked = false;
  }
};


const removeTodo = (item) => {
  const parent = item.parentElement;
  const id = parent.id;

  todoList.filter((todo) => {
    if (todo.id != id) {
      console.log(" ");
    }
  });

  parent.remove();

  localStorage.setItem("todoList", JSON.stringify(todoList));
};


list.addEventListener("click", (e) => {
  
  if (e.target.className.includes("todo-item")) {
    toggleTodo(e.target);

    
  } else if (e.target.className.includes("delete-button")) {
    removeTodo(e.target);
  }
});


form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(input.value);
});

getLocalStorage();