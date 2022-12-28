var car = {
    carname : 'swift',
    price : 800000,
    color : 'white',
}
for(let i in car){
     if(i == 'price')
     console.log(car[i]);
    //console.log(i);  //for keys run.......

}
console.log(car.price); //for values run....
console.log(car.carname);

// let cars = ['swift','i10','i20','enova','fortune']
// for(let j in cars){
//     console.log(cars[j]);
//     //console.log(j);
// }
let cars = ['swift','i10','i20','enova','fortune']
for(let h of cars){
   //console.log(h);
   if(h == 'i20'){
    
    //break;
    continue;
   }
   console.log(h);
}
let g = 20;
while(g>10){
    console.log(g);
    g--;
}
var b = 6;
do {
    console.log(b);
    b++;

}
while(b < 6)