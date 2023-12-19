lista = []

document.getElementById("hozzaad").addEventListener("click", () => {
    lista.push(document.getElementById("mezo").value);
    console.log(lista);
    listaDiv = document.getElementById("lista"); 
    listaDiv.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        a = document.createElement("p");
        a.innerHTML = lista[i]
        listaDiv.appendChild(a);
    }
});