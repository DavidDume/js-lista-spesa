const spesa = [];

const lista = document.querySelector(".lista");
const input = document.querySelector("#item");

const btn = document.querySelector('#btn')


let contatore = 0;

btn.addEventListener('click', function() {
    if(input.value != "") {
        spesa.push(input.value);
        input.value = "";
        while (contatore <= spesa.length - 1) {
            lista.innerHTML += `<h3>${spesa[contatore]}</h3>`
            contatore++;
        }
    }
    
});

