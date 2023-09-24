function sum(a, b, callback){
    //hace algo que tarda mucho
    const lasuma = a + b
    callback(lasuma)
}

const resultado = sum(2, 3, function(resultado) {
    console.log(resultado);
})

