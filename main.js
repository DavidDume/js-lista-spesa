const spesa = ["mele", "pere", "carote", "pane", "patate"];
const container = document.querySelector(".container");

let contatore = 0;

while (contatore < spesa.length - 1) {
    container.innerHTML += `<h3>${spesa[contatore]}</h3>`
    contatore++;
}
