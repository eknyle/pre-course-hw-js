const numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
];
numbers.forEach(function (item) {
  for (let i = 0; i < item.length; i++) {
    if (item[i] % 2 !== 0) {
      delete item[i];
    }
  }
  return item;
});
numbers.forEach(function (item) {
    let i=0;
    let length=item.length;
    while (i<length){
        if (item[i] % 2 !== 0) {
            item.splice(i,1);
            length--;
          }
          i++;
    }
    return item;
  });

console.log(numbers);
