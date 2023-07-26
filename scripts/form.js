function agregarPregunta() {
    const preguntaInput = document.getElementById("pregunta");
    const pregunta = preguntaInput.value;

    if (pregunta.trim() === "") {
      alert("Por favor, escribe una pregunta válida.");
      return;
    }

    const preguntaElement = document.createElement("p");
    preguntaElement.textContent = pregunta;
    document.getElementById("preguntasContainer").appendChild(preguntaElement);

    preguntaInput.value = "";
  }