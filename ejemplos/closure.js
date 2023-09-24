'use strict'

function creaSumador(numero){
    //este contexto es accesible siempre 
    //por la funcion que estamos devolviendo
    const nombre = 'luis'
    return function(otronumero){
       return numero + otronumero
    }
}

const sumaSiete = creaSumador(7)

console.log(sumaSiete(10));
console.log(sumaSiete(20));


function creaVehiculo(nombre){
    //contexto de closure, no pierde el contexto interno porque usa un closure
    return{
        getNombre: function(){ return nombre},
        setNombre: function(valor){nombre = valor},
        saluda: function(){console.log('Hola soy', nombre)}
    }
}

const coche = creaVehiculo('Seat') // parece que guarda este dato 

coche.saluda()

setTimeout(coche.saluda, 2000)