function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    var prueba=true;
    for(let i=0; i<arreglo.lenght;i++){
    for(let j=0; j<arreglo.length;j++){
      if(arreglo[i]!==arreglo[j]){
         prueba=false;
      }
    }
    }
    if(prueba=true){
      return true;
    }else{
      return false;
    }
  }