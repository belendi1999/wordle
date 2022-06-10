let filaActual = 1
let celdaActual = 1
document.addEventListener("keydown", escribir)
let botones = document.querySelectorAll("button")
console.log(botones)

function escribir(e){
    let celdaActualElem 
    if(filaActual === 1 && celdaActual === 1){
        celdaActualElem = document.getElementById("celda1.1")
        celdaActual ++
    } 
    else if(filaActual === 1 && celdaActual === 2){
        celdaActualElem = document.getElementById("celda1.2")
        celdaActual ++
    } 
    else if(filaActual === 1 && celdaActual === 3){
        celdaActualElem = document.getElementById("celda1.3")
        celdaActual ++
    } 
    console.log(e.key)
    celdaActualElem.innerText = e.key
}


for( let boton of botones){
    boton.addEventListener("click",teclaPresionada(boton.attributes["data-key"].value))
    }
    


function teclaPresionada(key){
    
}
