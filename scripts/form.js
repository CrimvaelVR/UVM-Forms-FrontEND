// Función para añadir una nueva pregunta al contenedor
function addQuestion() {
  const question = document.getElementById("question").value;
  const questionType = document.getElementById("questionType").value;

  if (question.trim() === "") {
    alert("Por favor, ingresa una pregunta válida.");
    return;
  }

  let questionElement = document.createElement("div");
  questionElement.innerHTML = `<h2>Pregunta:</h2><p>${question}</p>`;

  if (questionType === "text") {
    questionElement.innerHTML += '<input type="text" placeholder="Respuesta">';
  } else if (questionType === "select") {
    const options = document.getElementById("options").value.split(",");
    let selectOptions = "";
    for (const option of options) {
      selectOptions += `<option value="${option.trim()}">${option.trim()}</option>`;
    }
    questionElement.innerHTML += `<select>${selectOptions}</select>`;
  } else if (questionType === "options") {
    const options = document.getElementById("options").value.split(",");
    let radioOptions = "";
    for (const option of options) {
      radioOptions += `<input type="radio" name="radioOptions" value="${option.trim()}">${option.trim()}<br>`;
    }
    questionElement.innerHTML += radioOptions;
  }

  document.getElementById("questionsContainer").appendChild(questionElement);
}

// Mostrar u ocultar el campo de opciones dependiendo del tipo de pregunta seleccionada
document.getElementById("questionType").addEventListener("change", function () {
  const optionsContainer = document.getElementById("optionsContainer");
  if (this.value === "options"||"select") {
    optionsContainer.style.display = "block";
  } else {
    optionsContainer.style.display = "none";
  }
});
