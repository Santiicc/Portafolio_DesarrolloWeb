document.getElementById('Nochebtn').addEventListener('click', function() {
  document.body.style.backgroundImage = "url('noche.jpg')" ;
  document.getElementById('style').href = "stylesnight.css"
});



document.getElementById('Diabtn').addEventListener('click', function() {
  document.body.style.backgroundImage = "url('mountains.jpeg')"  ;
  document.getElementById('style').href = "styles.css"
});

class Task {
  constructor(name, description, assignedTo, priority, startdate ,endDate, status,comments) {
      this.name = name;
      this.description = description;
      this.assignedTo = assignedTo;
      this.priority = priority;
      this.endDate = endDate;
      this.comments = comments;
      this.status = status;
      this.startdate = startdate;

  }
}


function displayadd() {
  document.getElementById('modaladd').style.display = 'block';
};


document.getElementById('buttonsend').addEventListener('click', async function() {
  let name = document.getElementById('name').value;
  let description = document.getElementById('descriptiontask').value;
  let assignedTo = document.getElementById('assignedto').value;
  let priority = document.getElementById('priority').value;
  let endDate = document.getElementById('EndDate').value;
  let comments = document.getElementById('comments').value;
  let status = document.getElementById('opcionesstatus').value;
  let startdateaux = new Date();
  let startdate = `${startdateaux.getFullYear()}-${startdateaux.getMonth() + 1}-${startdateaux.getDate()}`;

  
  let taskaux = new Task(name, description, assignedTo, priority, startdate, endDate, status, comments);
  try {
    const data = await agregarTareaBackend(taskaux);
    let task = new Task(data.name, data.description, data.assignedTo, data.priority, data.startdate, data.endDate, data.status, data.comments);
    task.id = data.id;
    agregarTarea(task);
    document.getElementById('modaladd').style.display = 'none';
  } catch (error) {
    console.error('Error al agregar tarea:', error);
  }
});




function agregarTarea(task) {
  let nuevoBoton = document.createElement('button');
  let nuevoParrafo = document.createElement('p');

  nuevoParrafo.textContent = task.name;
  nuevoBoton.appendChild(nuevoParrafo);



  let botonEditar = document.createElement('button');
  botonEditar.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  botonEditar.onclick = function() {
      editar(task, nuevoParrafo);
  };
  nuevoBoton.appendChild(botonEditar);





  let botonBorrar = document.createElement('button');
  botonBorrar.innerHTML = '<i class="fa-solid fa-trash"></i>';
  botonBorrar.onclick = function() {
      borrar(task.id,nuevoBoton);
  };
  nuevoBoton.appendChild(botonBorrar);




  let botonMover = document.createElement('button');
  botonMover.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
  botonMover.onclick = function() {
      mover(task,nuevoBoton);
  };
  nuevoBoton.appendChild(botonMover);




  let botonLeer = document.createElement('button');
  botonLeer.innerHTML = '<i class="fa-solid fa-book-open"></i>';
  botonLeer.onclick = function() {
      leer(task.id,task.description,task.assignedTo,task.priority,task.startdate,task.endDate,task.comments,task.status);
  };
  nuevoBoton.appendChild(botonLeer);



  let statusnew = document.getElementById('opcionesstatus').value;

  if ( statusnew === 'ToDo') {
    document.getElementById('TareasToDo').appendChild(nuevoBoton);
  } else if (statusnew === 'Doing') {
    document.getElementById('TareasDoing').appendChild(nuevoBoton);
  } else if (statusnew === 'Done' || destino === 'Donae') {
    document.getElementById('TareasDone').appendChild(nuevoBoton);
  } 

}





function mover(task,boton){
  let destino = prompt("Ingrese a donde mover la tarea (ToDo, Doing o Done):");
  if (destino === 'ToDo') {
    document.getElementById('TareasToDo').appendChild(boton);
    task.status = 'ToDo'
  } else if (destino === 'Doing') {
    document.getElementById('TareasDoing').appendChild(boton);
    task.status = 'Doing'
  } else if (destino === 'Done') {
    document.getElementById('TareasDone').appendChild(boton);
    task.status = 'Done'
  } else {
    alert("Ubicación de destino no válida.");
  }
}






function editar(task,parrafo){
  let nuevoNombre = prompt('Ingrese el nuevo nombre de la tarea:');
  let nuevadesc = prompt('Ingrese la nueva descripcion de la tarea:');
  let nuevocomments = prompt('Ingrese los nuevos comentarios de la tarea:');
  if (nuevoNombre,nuevadesc) {
    task.name = nuevoNombre;
    parrafo.textContent = nuevoNombre;
    task.description = nuevadesc;
    task.comments = nuevocomments;
    actualizarTareaPorID(task.id,task);
  }
}




function borrar(taskid,boton){
  if (confirm('¿Desea borrar la tarea?')) {
    boton.remove();
    borrarBackend(taskid);
  }
}

function leer(taskid,taskdesc,taskassigned,taskpriority,taskstartdate,taskenddate,taskcomments,taskstatus) {
  document.getElementById('taskid').innerHTML = 'ID de la tarea : ' + taskid;
  document.getElementById('taskdesc').innerHTML = 'Descripcion de la tarea : ' + taskdesc;
  document.getElementById('taskassigned').innerHTML = 'Responsable de la tarea : ' + taskassigned;
  document.getElementById('taskpriority').innerHTML = 'Prioridad de la tarea : ' + taskpriority;
  document.getElementById('taskstartdate').innerHTML = 'Fecha de inicio de la tarea : ' + taskstartdate;
  document.getElementById('taskenddate').innerHTML = 'Fecha de fin de la tarea : ' + taskenddate;
  document.getElementById('taskcomments').innerHTML = 'Comentarios de la tarea : ' + taskcomments;
  document.getElementById('taskstatus').innerHTML = 'Estado de la tarea : ' + taskstatus;
  document.getElementById('modal').style.display = 'block';
}



window.onclick = function(event) {
  let modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelector(".modalClose").addEventListener("click", function() {
  document.getElementById('modal').style.display = 'none';
});

window.onclick = function(event) {
  let modaladd = document.getElementById('modaladd');
  if (event.target == modaladd) {
    modal.style.display = "none";
  }
}

document.querySelector(".modaladdClose").addEventListener("click", function() {
  document.getElementById('modaladd').style.display = 'none';
});



async function getData(){
  let data = await fetch('http://localhost:3000/api/tasks')
  let datatojson = await data.json();
  console.log(datatojson)

}

async function agregarTareaBackend(task) {
  try {
    const response = await fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    console.log('Tarea agregada:', data)
    return data;
  } catch (error) {
    console.error('Error al agregar tarea:', error);
  }
}

async function borrarBackend(taskId) {
  try {
    const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      console.log('Tarea eliminada');
    } else {
      console.error('No se pudo borrar');
    }
  } catch (error) {
    console.error('Error al eliminar tarea:', error);
  }
}

async function actualizarTareaPorID(taskId, updatedTask) {
  try {
    const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await response.json();
    console.log('Tarea actualizada:', data);
  } catch (error) {
    console.error('Error al actualizar tarea:', error);
  }
}

