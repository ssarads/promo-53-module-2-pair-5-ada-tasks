'use strict';

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  { name: "Aprender cómo se realizan las peticiones al servidor en JavaScript", completed: false, id: 4 },
];

// 1. Traer el ul del HTML -> JS querySelector
const listTask = document.querySelector (".js_listtask");

// 2. Ir rellenando con <li>
for (const task of tasks) {
  listTask.innerHTML += `<li class="js_task"> <input type="checkbox"  >${task.name}</li>`;
}

// 3. Traer todos los <li> y ponerles un evento

const arrayDeElementosLi = document.querySelectorAll('.js_task');

for( const li of arrayDeElementosLi ) {
  li.addEventListener("click",(ev)=>{
    //console.log(ev.target);
    //console.log(ev.currentTarget);
    //console.log(li)
    //console.log(arrayDeElementosLi);
    ev.currentTarget.classList.toggle("tachado")
  });
}

// NO: arrayDeElementosLi.addEventListener -> El array no tiene addEventListener

listTask.addEventListener('click' , () =>{
  listTask.classList.toggle('tachado')
});


