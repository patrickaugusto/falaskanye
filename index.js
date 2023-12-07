function request(){
    axios
    .get("https://api.kanye.rest")
    .then(response => {
        const falas = response.data.quote
        console.log(falas)
     

    var lista = document.querySelector('#falas');
    var elemento = document.createElement("li")
    elemento.innerHTML = JSON.stringify(falas);
    lista.appendChild(elemento);
    })

    .catch(error => console.log(error))

} 
