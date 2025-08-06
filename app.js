// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función que limpia objetso HTML
function limpiaObgeto(elemento){
    elemento.innerHTML="";
}

//Función que agrega un nombre a las listas
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    document.querySelector('#amigo').value = '';
    
    let ul = document.getElementById('listaAmigos');
    limpiaObgeto(ul);
    
    if (nombre == null || nombre.trim() == ''){
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    amigos.forEach(function(elemento){
        let li = document.createElement('li');
        li.textContent=elemento;
        ul.appendChild(li);
        
    })
    return;
          
    
}
//Función que sortea el amigo secreto en base a un numero aleatorio según la cantidad de registros de la lista de amigos
function sortearAmigo(){
    let ul = document.getElementById('listaAmigos');
    limpiaObgeto(ul);

    let resultado = document.getElementById('resultado');
    limpiaObgeto(resultado);

    let cantidad=amigos.length;
    let indiceGenerado =  Math.floor(Math.random()*cantidad);

    console.log(indiceGenerado);
    if(cantidad==null || cantidad<=0){
        alert("No hay amigos para realizar el sorteo")
        return;
    }
    let li = document.createElement('li');
    li.textContent="El amigo secreto sorteado es: " + amigos[indiceGenerado];
    resultado.appendChild(li);  
    return;   

}



