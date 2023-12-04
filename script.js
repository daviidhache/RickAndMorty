window.onload=inicio;
var combo = document.getElementById("combo");
var caja = document.getElementById("cajonPadre");
var texto = document.getElementById("texto-flotante");
combo.addEventListener("click",accion);
var arrayEspecies = [];
function inicio(){

        cargarCombo();
       
}


 async function cargarCombo(){
    const respuesta = await fetch("https://rickandmortyapi.com/api/character");
    const dato = await respuesta.json();
    // Cargar la especie de los personajes en el combo
    for(let i = 0; i < dato.results.length;i++){
        if(!arrayEspecies.includes(dato.results[i].species)){
            arrayEspecies.push(dato.results[i].species);
            combo.innerHTML+= `<option values=${dato.results[i].species}>${dato.results[i].species}</option>`;
        }
    }


}

 async function accion(){
    caja.innerHTML = "";
    let seleccion = combo.value;
    const respuesta = await fetch("https://rickandmortyapi.com/api/character");
    const dato = await respuesta.json();
   
    for(let i = 0; i < dato.results.length;i++){
        console.log(dato.results.length);
        if(dato.results[i].species == seleccion){
            let imagen = document.createElement("img");
            imagen.addEventListener("mouseover",accionImagen);
            imagen.addEventListener("mouseout",imagenSalida);
                
                
            function accionImagen(){
                texto.innerHTML = "";
                imagen.style.borderRadius = "100px";
                texto.style.display = 'block';
                texto.innerHTML += dato.results[i].name + "\n" +  dato.results[i].status + "\n" +  dato.results[i].gender;
              

            }
            function imagenSalida(){
               
                texto.style.display = 'none';
            }
          
            
            imagen.src = dato.results[i].image;
            imagen.style.width ="250px";
            imagen.style.height ="170px";
            imagen.style.borderRadius ="17px";
            caja.appendChild(imagen);
        }
    }
}





