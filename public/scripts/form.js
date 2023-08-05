const addQuestionButton = document.getElementById("addQuestion");
const questionsContainer = document.getElementById("questionsContainer");
const questionType = document.getElementById('questionType')
const optionsContainer = document.getElementById('options-container')
let tipo
let questionValue = 1

questionType.addEventListener("change", () => {
  toggleOptionsContainer(questionType);
});

optionsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("addOption")) {
    event.preventDefault();

    const options = optionsContainer.querySelectorAll("[name=options]");
    const lastOption = options[options.length - 1];
    const lastOptionValue = parseInt(lastOption.value.slice(-1));
    const newOptionValue = lastOptionValue + 1;

    const newOptionDiv = document.createElement("div");
    newOptionDiv.classList.add("option");

    if (questionType.value === "select") {
      const newOptionRadio = document.createElement("input");
      newOptionRadio.type = "radio";
      newOptionRadio.name = "options";
      newOptionRadio.value = `Option ${newOptionValue}`;
      newOptionDiv.appendChild(newOptionRadio);
    } else if (questionType.value === "options") {
      const newOptionCheckbox = document.createElement("input");
      newOptionCheckbox.type = "checkbox";
      newOptionCheckbox.name = "options";
      newOptionCheckbox.value = `Option ${newOptionValue}`;
      newOptionDiv.appendChild(newOptionCheckbox);
    }
    const newOptionInput = document.createElement("input");
    newOptionInput.type = "text";
    newOptionInput.name = `Options${questionValue}`;

    newOptionInput.placeholder = `Option ${newOptionValue}`;
    newOptionDiv.appendChild(newOptionInput);

    optionsContainer.insertBefore(newOptionDiv, event.target);
  }
});

function toggleOptionsContainer(select) {
  const selectedType = select.value;
  const optionsContainer = select.parentElement.querySelector(".options-container");
  if (selectedType === "select") {
    optionsContainer.style.display = "block";
    optionsContainer.innerHTML = `
      <label for="options">Opciones</label>
      <div class="option">
        <input type="radio" name="options" value="Option 1">
        <input type="text" name="Options${questionValue}" placeholder="Option 1">
      </div>
      <div class="option">
        <input type="radio" name="options" value="Option 2">
        <input type="text" name="Options${questionValue}" placeholder="Option 2">
      </div>
      <button class="addOption">Agregar opción</button>
    `;
  } else if (selectedType === "options") {
    optionsContainer.style.display = "block";
    optionsContainer.innerHTML = `
      <label for="options">Opciones</label>
      <div class="option">
        <input type="checkbox" name="options" value="Option 1">
        <input type="text" name="Options${questionValue}" placeholder="Option 1">
      </div>
      <div class="option">
        <input type="checkbox" name="options" value="Option 2">
        <input type="text" name="Options${questionValue}" placeholder="Option 2">
      </div>
      <button class="addOption">Agregar opción</button>
    `;
  } else {
    optionsContainer.style.display = "none";
    optionsContainer.innerHTML = "";
  }

  optionsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("addOption")) {
      event.preventDefault();
    }
  });
}


addQuestionButton.addEventListener("click", () => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("questionNew");
  questionValue = questionValue + 1
  const questionLabel = document.createElement("label");
  questionLabel.textContent = "Pregunta";
  const questionInput = document.createElement("input");
  questionInput.type = "text";
  questionInput.name = `textoPregunta${questionValue}`
  questionInput.classList.add("question-text");
  questionInput.placeholder = "Escribe tu pregunta aquí";

  const questionTypeLabel = document.createElement("label");
  questionTypeLabel.textContent = "Tipo de Pregunta";
  const select = document.createElement("select");
  select.name = `tipoPregunta${questionValue}`
  select.id = "questionType";
  const textOption = document.createElement("option");
  textOption.value = "text";
  textOption.textContent = "Pregunta de texto libre";
  select.appendChild(textOption);
  const selectOption = document.createElement("option");
  selectOption.value = "select";
  selectOption.textContent = "Pregunta de selección";
  select.appendChild(selectOption);
  const optionsOption = document.createElement("option");
  optionsOption.value = "options";
  optionsOption.textContent = "Pregunta de opciones";
  select.appendChild(optionsOption);

  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");
  optionsContainer.style.display = "none";

  questionDiv.appendChild(questionLabel);
  questionDiv.appendChild(questionInput);
  questionDiv.appendChild(questionTypeLabel);
  questionDiv.appendChild(select);
  questionDiv.appendChild(optionsContainer);

  questionsContainer.appendChild(questionDiv);

  toggleOptionsContainer(select);

  select.addEventListener("change", () => {
    toggleOptionsContainer(select);
  });

  optionsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("addOption")) {
      event.preventDefault();

      const options = optionsContainer.querySelectorAll("[name=options]");
      const lastOption = options[options.length - 1];
      const lastOptionValue = parseInt(lastOption.value.slice(-1));
      const newOptionValue = lastOptionValue + 1;

      const newOptionDiv = document.createElement("div");
      newOptionDiv.classList.add("option");

      if (select.value === "select") {
        const newOptionRadio = document.createElement("input");
        newOptionRadio.type = "radio";
        newOptionRadio.name = "options";
        tipo = 'Selecion'
        newOptionRadio.value = `Option ${newOptionValue}`;
        newOptionDiv.appendChild(newOptionRadio);
      } else if (select.value === "options") {
        const newOptionCheckbox = document.createElement("input");
        newOptionCheckbox.type = "checkbox";
        newOptionCheckbox.name = "options";
        tipo = 'Opciones'
        newOptionCheckbox.value = `Option ${newOptionValue}`;
        newOptionDiv.appendChild(newOptionCheckbox);
      }

      const newOptionInput = document.createElement("input");
      newOptionInput.type = "text";
      newOptionInput.name = `Options${questionValue}`;
      
      newOptionInput.placeholder = `Option ${newOptionValue}`;
      newOptionDiv.appendChild(newOptionInput);

      optionsContainer.insertBefore(newOptionDiv, event.target);
    }
  });
});