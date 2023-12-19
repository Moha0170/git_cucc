lista = []

document.getElementById("hozzaad").addEventListener("click", () => {
    lista.push(document.getElementById("mezo").value);
    console.log(lista);
});