let passport = {
    name: "Petr",
    surname: "Petrov",
};
let clone=Object.assign({},passport);
clone.name="Ivan";
console.log(passport.name);
console.log(clone.name);