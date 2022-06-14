let botones = document.querySelectorAll("button")
let casillas = document.querySelectorAll(".celda")
let tituloDom = document.querySelector("titulo")
let posicionCasillaActual = 0
let palabraAdivinar = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)]
let comprobar = false
let primeraPalabraCompletada = false
let segundaPalabraCompletada = false
let terceraPalabraCompletada = false
let cuartaPalabraCompletada = false 
let quintaPalabraCompletada = false


let palabraIntroducida = ""

for( let boton of botones){
    boton.addEventListener("click", function() { teclaPresionada(boton.attributes["data-key"].value) })
}



function teclaPresionada(key){
    console.log("entras aqui o que")
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
     palabraIntroducida = palabra
     console.log(palabraIntroducida)
    }
    
}



function adivinarPalabra(){

    if (palabraIntroducida.length !== 5) {
        swal ("Escribe 5 letras")
        
    }

   else if (!palabrasUnidas.includes(palabraIntroducida)) {
        swal ("La palabra no existe")
        comprobar = false
        
    }
    else {
    
        for (let i=0; i< palabraAdivinar.length; i++){
            if (palabraAdivinar[i] === palabraIntroducida[i]){
                casillas[posicionCasillaActual - 5 + i ].style.backgroundColor = "#B0F083"
                document.querySelector(`button[data-key=${palabraIntroducida[i]}]`).style.backgroundColor =  "#B0F083"
            
            } else if (palabraAdivinar.includes(palabraIntroducida[i]) && contarLasLetrasDeUnaPalabra(palabraIntroducida[i], palabraIntroducida) <= contarLasLetrasDeUnaPalabra(palabraIntroducida[i], palabraAdivinar)){
                casillas[posicionCasillaActual - 5 + i ].style.backgroundColor = "#F8EF84"
                
            } else {
                casillas[posicionCasillaActual - 5 + i ].style.backgroundColor = "#D1BECD"
                document.querySelector(`button[data-key=${palabraIntroducida[i]}]`).style.backgroundColor =  "#D1BECD"
                
            }  
        }
        
        if(posicionCasillaActual === 5){
            primeraPalabraCompletada = true
        }else if(posicionCasillaActual === 10){
            segundaPalabraCompletada = true
        }else if(posicionCasillaActual === 15){
            terceraPalabraCompletada = true
        }else if(posicionCasillaActual === 20){
            cuartaPalabraCompletada = true
        }else if(posicionCasillaActual === 25){
            quintaPalabraCompletada = true
        }
    }
    if (palabraAdivinar === palabraIntroducida){
        swal ("Has adivinado la palabra, eres genial!")
    } else if (posicionCasillaActual === 30){
        swal ("oh no... la palabra correcta era: " + palabraAdivinar)
    }



    palabraIntroducida = ""
}

function contarLasLetrasDeUnaPalabra (letra, palabra){
    return palabra.split(letra).length - 1
}




