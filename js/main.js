"use strict";

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: false, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

// 1. Traer el ul del HTML -> JS querySelector
const listTask = document.querySelector(".js_listtask");

// 2. Ir rellenando con <li>
for (const task of tasks) {
  console.log(task);

  if (task.completed === true) {
    listTask.innerHTML += `<li class="js_task tachado"> <input type="checkbox" checked >${task.name}</li>`;
  } else {
    listTask.innerHTML += `<li class="js_task"> <input type="checkbox"  >${task.name}</li>`;
  }
}

// 3. Traer todos los <li> y ponerles un evento

const arrayDeElementosLi = document.querySelectorAll(".js_task");

for (const li of arrayDeElementosLi) {
  li.addEventListener("click", (ev) => {
    //console.log(ev.target);
    //console.log(ev.currentTarget);
    //console.log(li)
    //console.log(arrayDeElementosLi);
    ev.currentTarget.classList.toggle("tachado");
  });
}

// NO: arrayDeElementosLi.addEventListener -> El array no tiene addEventListener

// listTask.addEventListener('click' , () =>{
//   listTask.classList.toggle('tachado')
// });

const handleClickList = (event) => {
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  if (!taskId) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función

  // Busca la tarea que tenga el id `taskId` en el array `tasks`
  // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
  // Pinta de nuevo las tareas en el html
};

// list.addEventListener("click", handleClickList);


const filterBtn = document.querySelector(".js-btn-filter");
const textFilter = document.querySelector(".js-text-task-filter");
//evento
//filter

filterBtn.addEventListener("click", (ev) => {
  ev.preventDefault();

  // 1. Obtén el valor del input de filtrar.

  const textFilter = textFilter.value;

  // 2. Filtra las tareas que coinciden con el valor introducido por el usuario.

  const completado = tasks.filter(
    (taskObj) => taskObj.completed === textFilter.value
  );
  console.log(completado);

  // 3. Vuelve a pintar las tareas, esta vez utilizando el listado filtrado.
});


//// FUNCION GANCHO
// Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado. Por cada elemento de la lista, hay que pintar la tarea en el html. ¿Qué utilizamos en JavaScript para realizar una operación por cada elemento de un array? Exacto, un bucle.

listTask.innerHTML = '';
  for( const oneTask of tasks ) {

    const li = document.createElement('li');

    const input = document.createElement('input');
          input.setAttribute('type', 'checkbox');  

          input.dataset.taskid = oneTask.id;
          input.addEventListener('click', handleClickList );
          li.appendChild(input);
    
    const texto = document.createTextNode(oneTask.name);
          li.appendChild(texto);
    

    if( oneTask.completed ) {
      li.classList.add('tachado');
      input.setAttribute('checked', true);     
    }

    listTask.appendChild(li);
  };