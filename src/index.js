let botones = document.querySelectorAll("button")
let casillas = document.querySelectorAll(".celda")
let posicionCasillaActual = 0

for( let boton of botones){
    boton.addEventListener("click", function() { teclaPresionada(boton.attributes["data-key"].value) })
}



function teclaPresionada(key){
    
    if (key === "DELETE"){
        borrar()
    } 
    else if (key === "ENTER"){
        comprobarResultado()
    }
    else {
        casillas[posicionCasillaActual].innerText = key 
        posicionCasillaActual ++
    }

}

function borrar(){
    if (posicionCasillaActual % 5 !== 0){
        posicionCasillaActual --
        casillas[posicionCasillaActual].innerText = ""
    }
}

function comprobarResultado(){
    if (posicionCasillaActual !== 0 && posicionCasillaActual % 5 === 0 ){
        console.log("envias palabrita")
    }
}

    
