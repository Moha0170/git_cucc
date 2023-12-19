lista = []

document.getElementById("hozzaad").addEventListener("click", () => {
    lista.push(parseInt(document.getElementById("mezo").value));
    console.log(lista);
    listaDiv = document.getElementById("lista"); 
    listaDiv.innerHTML = "";
    b = parseInt(lista[0])
    document.getElementById("legkisebb").innerText = "A legkisebb szám a listából: " + b
    for (let i = 0; i < lista.length; i++) {
        a = document.createElement("p");
        a.innerHTML = lista[i]
        listaDiv.appendChild(a);
        if (parseInt(lista[i]) < b) {
            document.getElementById("legkisebb").innerText = "A legkisebb szám a listából: " + lista[i]
            b = parseInt(lista[i])
        }
    }
});