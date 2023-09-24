'use strict'


function Fruta(nombre){
    this.nombre = nombre
    this.saluda = function(){
        console.log('hola soy', this.nombre);
    }
}

const limon = new Fruta('limon')

//console.log(limon)

//limon.saluda()

const saludaLimon = limon.saluda.bind(limon)

saludaLimon.call(limon)
saludaLimon.apply(limon)

saludaLimon()

// JS busca el punto a la izquierda de los paréntesis de ejecución
// y lo que haya a la izquierda de ese punto, lo usa como this

//setTimeout(limon.saluda, 2000)
