document.getElementById('Nochebtn').addEventListener('click', function() {
  document.body.style.backgroundImage = "url('noche.jpg')" ;
  document.getElementById('style').href = "stylesnight.css"
});



document.getElementById('Diabtn').addEventListener('click', function() {
  document.body.style.backgroundImage = "url('mountains.jpeg')"  ;
  document.getElementById('style').href = "styles.css"
});




function agregarTareaToDo(nombretarea) {
 
  var nuevoBoton = document.createElement('button');

  var nuevoParrafo = document.createElement('p');
  var Tarea = prompt('Ingresar tarea:');
  nuevoParrafo.textContent = Tarea;
  nuevoBoton.appendChild(nuevoParrafo);

  var botonEditar = document.createElement('button');
  botonEditar.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  botonEditar.onclick = function(){
    editar(nuevoParrafo)
  };
  nuevoBoton.appendChild(botonEditar);

  var botonBorrar = document.createElement('button');
  botonBorrar.innerHTML = '<i class="fa-solid fa-trash"></i>';
  botonBorrar.onclick = function(){
    borrar(nuevoBoton)
  };
  nuevoBoton.appendChild(botonBorrar);

  var botonMover = document.createElement('button');
  botonMover.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
  botonMover.onclick = function(){
    mover(nuevoBoton)
  };
  nuevoBoton.appendChild(botonMover);

  document.getElementById('TareasToDo').appendChild(nuevoBoton);
}





function agregarTareaDoing(nombretarea) {
 
  var nuevoBoton = document.createElement('button');

  var nuevoParrafo = document.createElement('p');
  var Tarea = prompt('Ingresar tarea:');
  nuevoParrafo.textContent = Tarea;
  nuevoBoton.appendChild(nuevoParrafo);

  var botonEditar = document.createElement('button');
  botonEditar.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  botonEditar.onclick = function(){
    editar(nuevoParrafo)
  };
  nuevoBoton.appendChild(botonEditar);

  var botonBorrar = document.createElement('button');
  botonBorrar.innerHTML = '<i class="fa-solid fa-trash"></i>';
  botonBorrar.onclick = function(){
    borrar(nuevoBoton)
  };
  nuevoBoton.appendChild(botonBorrar);

  var botonMover = document.createElement('button');
  botonMover.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
  botonMover.onclick = function(){
    mover(nuevoBoton)
  };
  nuevoBoton.appendChild(botonMover);

  document.getElementById('TareasDoing').appendChild(nuevoBoton);
}








function agregarTareaDone() {
 
  var nuevoBoton = document.createElement('button');

  var nuevoParrafo = document.createElement('p');
  var Tarea = prompt('Ingresar tarea:');
  nuevoParrafo.textContent = Tarea;
  nuevoBoton.appendChild(nuevoParrafo);

  var botonEditar = document.createElement('button');
  botonEditar.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  botonEditar.onclick = function(){
    editar(nuevoParrafo)
  };
  nuevoBoton.appendChild(botonEditar);

  var botonBorrar = document.createElement('button');
  botonBorrar.innerHTML = '<i class="fa-solid fa-trash"></i>';
  botonBorrar.onclick = function(){
    borrar(nuevoBoton)
  };
  nuevoBoton.appendChild(botonBorrar);

  var botonMover = document.createElement('button');
  botonMover.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';
  botonMover.onclick = function(){
    mover(nuevoBoton)
  };
  nuevoBoton.appendChild(botonMover);

  document.getElementById('TareasDone').appendChild(nuevoBoton);
}







function mover(boton){
  var destino = prompt("Ingrese a donde mover la tarea (ToDo, Doing o Done):");
  if (destino === 'ToDo') {
    document.getElementById('TareasToDo').appendChild(boton);
  } else if (destino === 'Doing') {
    document.getElementById('TareasDoing').appendChild(boton);
  } else if (destino === 'Done' || destino === 'Donae') {
    document.getElementById('TareasDone').appendChild(boton);
  } else {
    alert("Ubicación de destino no válida.");
  }
}






function editar(parrafo){
  var nuevoNombre = prompt('Ingrese el nuevo nombre de la tarea:', parrafo.textContent);
  if (nuevoNombre) {
    parrafo.textContent = nuevoNombre;
  }
}




function borrar(boton){
  if (confirm('¿Desea borrar la tarea?')) {
    boton.remove();
  }
}

