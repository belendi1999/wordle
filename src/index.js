let botones = document.querySelectorAll("button")
let casillas = document.querySelectorAll(".celda")
let posicionCasillaActual = 0
//let palabraAdivinar = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)]
let comprobar = false
let primeraPalabraCompletada = false
let segundaPalabraCompletada = false

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
    let palabraCorrecta = "PERRO"
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
            for (let j=0; j< palabraIntroducida.length; j++){
              
              
                let colorLetra = ""
                if (palabraCorrecta[i] === palabraIntroducida[j]){
                    casillas[i].style.color = "green"
                    
                } 
                console.log(casillas[i], palabraCorrecta[i], palabraIntroducida[j])
              
                
            }
        }
        if(posicionCasillaActual == 5){
            primeraPalabraCompletada = true
        }else if(posicionCasillaActual == 10){
            segundaPalabraCompletada = true
        }
    }
}

//* let palabra1 = "raiz"
// let palabra2 = "arroz"
/*  let repeatedChars = []
PALABRA1[I] === PALABRA[I]

    for (let i=0; i< palabra2.length; i++){
      if (palabra1.contains(palabra2[i])){
         repeatedChars.push(palabra2[i])
       }
  }

  let palabra1 = "raiz"
  let palabra2 = "arroz"
  let palabrasRepetidas = []
  let palabra2Copia = palabra2.split("")
  
   function comprobarLetras (){
   palabra2Copia.forEach(function(letra){
     if (palabra1.indexOf(letra) !== -1){
       palabrasRepetidas.push(letra)
     }
     console.log(palabrasRepetidas)
   })
  
   }
 
  function win (){
    if (palabra1.localeCompare(palabra2) === 0){
      return "win"
    } else {
      comprobarLetras()
    }
  }
 win()

  */
    


