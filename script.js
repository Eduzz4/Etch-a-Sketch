const grade = document.querySelector("#grade");
const slider = document.querySelector("#tamanhoGrade");
const span = document.querySelector("#mostrarTamanho");
const btn = document.querySelector("#limpar");

btn.addEventListener("click", () => {
  let todosOsQuadrados = document.querySelectorAll(".quadrado");
  todosOsQuadrados.forEach((quadrado) => {
    quadrado.style.backgroundColor = "";
  });
});

grade.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("quadrado")) {
    event.target.style.backgroundColor = "black";
  }
});

slider.addEventListener("input", () => {
  let tamanho = slider.value;
  span.textContent = `${tamanho}x${tamanho}`;

  let quantidadeDiv = tamanho * tamanho;

  grade.innerHTML = "";

  criarDivs(quantidadeDiv);
});

function criarDivs(numDeDivs) {
  let divsPorLinha = Math.sqrt(numDeDivs);
  let tamanhoDiv = 500 / divsPorLinha;
  for (let i = 0; i < numDeDivs; i++) {
    const novaDiv = document.createElement("div");
    novaDiv.classList.add("quadrado");
    novaDiv.style.height = tamanhoDiv + "px";
    novaDiv.style.width = tamanhoDiv + "px";
    grade.appendChild(novaDiv);
  }
}
