let botones = document.querySelectorAll("button")
let casillas = document.querySelectorAll(".celda")
let posicionCasillaActual = 0
let palabraAdivinar = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)]
let comprobar = false
let primeraPalabraCompletada = false
let segundaPalabraCompletada = false
let terceraPalabraCompletada = false
let cuartaPalabraCompletada = false 
let quintaPalabraCompletada = false


let palabraInt = ""

for( let boton of botones){
    boton.addEventListener("click", function() { teclaPresionada(boton.attributes["data-key"].value) })
}



function teclaPresionada(key){
    
    if (key === "DELETE"){
        borrar()
    } 
    else if (key === "ENTER"){

        comprobarResultado()
        adivinarPalabra()
    }
    else {
        if(posicionCasillaActual === 5 && !primeraPalabraCompletada){
         return
        }else if(posicionCasillaActual === 10 && !segundaPalabraCompletada){
            return
        }else if(posicionCasillaActual === 15 && !terceraPalabraCompletada){
            return
        }else if(posicionCasillaActual === 20 && !cuartaPalabraCompletada){
            return
        }else if(posicionCasillaActual === 25 && !quintaPalabraCompletada){
            return
        }
            
        if(posicionCasillaActual !== 0 && posicionCasillaActual % 5 == 0){
            comprobar = true
        }

        casillas[posicionCasillaActual].innerText = key 
        posicionCasillaActual ++
        console.log(posicionCasillaActual)
        
    }

}

function borrar(){
    comprobar = false
    if(posicionCasillaActual === 5 && primeraPalabraCompletada){
        return
    }else if(posicionCasillaActual === 10 && segundaPalabraCompletada){
        return
    }else if(posicionCasillaActual === 15 && terceraPalabraCompletada){
        return
    }else if(posicionCasillaActual === 20 && cuartaPalabraCompletada){
        return
    }else if(posicionCasillaActual === 25 && quintaPalabraCompletada){
        return
  
    }
    if (posicionCasillaActual !== 0){
        posicionCasillaActual --
        casillas[posicionCasillaActual].innerText = ""
    }
}

function comprobarResultado(){
    comprobar = false
    if (posicionCasillaActual !== 0 && posicionCasillaActual % 5 === 0){
        
   
      let palabra = ""
      for (let i = posicionCasillaActual - 5 ; i < posicionCasillaActual; i++){
        palabra += casillas[i].innerText
      }
     palabraInt = palabra
     console.log(palabraInt)
    }
}



function adivinarPalabra(){
    let palabraCorrecta = palabraAdivinar
    let palabraIntroducida = palabraInt

    if (palabraIntroducida.length !== 5) {
        window.alert ("Not enough letters!")
        
    }

   else if (!palabrasUnidas.includes(palabraIntroducida)) {
        window.alert ("Word not in list!")
        comprobar = false
        
    }
    else {
        
        for (let i=0; i< palabraCorrecta.length; i++){
            if (palabraCorrecta[i] === palabraIntroducida[i]){
                casillas[posicionCasillaActual - 5 + i ].style.color = "green"
                
            } else if (palabraCorrecta.includes(palabraIntroducida[i])){
                casillas[posicionCasillaActual - 5 + i ].style.color = "yellow"
            } else {
                casillas[posicionCasillaActual - 5 + i ].style.color = "grey"
            }  
        }
        
        if(posicionCasillaActual == 5){
            primeraPalabraCompletada = true
        }else if(posicionCasillaActual == 10){
            segundaPalabraCompletada = true
        }else if(posicionCasillaActual == 15){
            terceraPalabraCompletada = true
        }else if(posicionCasillaActual == 20){
            cuartaPalabraCompletada = true
        }else if(posicionCasillaActual == 25){
            quintaPalabraCompletada = true
        }
    }
}


