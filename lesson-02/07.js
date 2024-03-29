let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

function cloneFunction(obj){
    if (obj === null) return null;
    let newObj=Object.assign({}, obj);

    for (let key in newObj){
        if (typeof obj[key] == 'object'){
            newObj[key]=cloneFunction(obj[key]);
        }else{
            newObj[key]=obj[key];            
        }
    }
    return newObj;
}
let cloneGuy=cloneFunction(passportMarried);
cloneGuy.married=true;


console.log(passportMarried);
console.log(cloneGuy);