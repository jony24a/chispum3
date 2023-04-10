function chispum(any){
    if(any % 3 == 0 && any % 5 == 0){
        return "chispum";
    }else if  (any %  3 == 0){
        return "chis"
    }else if  (any %  5 == 0){
        return "pum"
    }
    return any;
}

console.log("Hola bienvenidos");
console.log("Envio un 15 =>" + chispum(15));

module.exports = chispum 