'use strict';

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

const listTask = document.querySelector (".js_listtask");
for (const task of tasks) {
listTask.innerHTML += `<li><input type="checkbox" checked="true">${task.name}</li>`;
}


listTask.addEventListener('click' , () =>{
  listTask.classList.toggle('tachado')
});


