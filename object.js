var studentsdetails = {name:'jayshri mapari',age:20,address:'pune',std:12};
console.log(studentsdetails);
console.log(studentsdetails.address);
console.log(studentsdetails.name);
console.log(studentsdetails.age);
console.log(studentsdetails.std);
//loops-----for,for/in,for/off,while,do while....
//(statement;condition block;increment/decrement)
//let cars = ['bmw','volvo','audi','minicup']
function looping(){
// for(let i=0; i < cars.length ; i++){
//     console.log(cars[i]);
// }
// for(let j = 0; ; j++){
//     console.log(cars[j]);    // output is infinite loops..........
// }
// for(let i=0;  ;){
//     console.log(cars[i]);
// }
//for(; ;){
   // console.log(jjjjjjjjjjj); //output is error.....
//}
   // for(a = 1; a < cars.length; a--){
   //  console.log(cars[a]);
   // }
   // for(let i=1; i < 10 ; i++){
   //         console.log(i=i+1); // for even number.....
   // }
   //for(let i=0; i < 10 ; i++){
    //  console.log(i=i+1); // for odd number.....


//for/for each............
let cars = ['bmw','volvo','audi','minicup']
//cars.forEach(items =>{
   //console.log(items);
//})
for (var t=0 ; t < cars.length ; t++){
   if(cars[t] == 'volvo'){
      //continue;
      break;
   }
   console.log(cars[t]);
}
let newCars =[];
cars.forEach(items =>{
   if(items != 'volvo'){
      newCars.push(items);
   }
})

}
