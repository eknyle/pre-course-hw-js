let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
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
let cloneObj=cloneFunction(passportWithAddress);
cloneObj.address.city="Bobryisk";


console.log(passportWithAddress.address.city);
console.log(cloneObj.address.city);