// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el span que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Obtener el párrafo dentro del modal para la descripción de la tarea
var taskDescription = document.getElementById("taskDescription");

// Función para abrir el modal con la descripción de la tarea
function openModal(description) {
  taskDescription.textContent = description;
  modal.style.display = "block";
}

// Cuando el usuario haga clic en el span (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, también se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Obtener todas las tareas (párrafos dentro de los divs de Tareas)
var tasks = document.querySelectorAll(".Tareas p");

// Agregar un controlador de eventos para cada tarea
tasks.forEach(function(task) {
  task.addEventListener("click", function() {
    openModal(task.textContent);
  });
});
