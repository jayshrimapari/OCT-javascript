emp = [
    { firstName:'jayu',lastName:'bhokare', age: 24 },
    { firstName:'jayu1',lastName:'bhokare1', age: 25 },
    { firstName:'jayu2',lastName:'bhokare2', age: 26 }
]
let data = emp.filter((element)=>{
    return element.age == 50;
})
console.log(data);

