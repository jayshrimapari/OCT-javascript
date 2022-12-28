let name1 ='jayshri';


function keywords(){
    console.log('..we are learning keywords..let/var/const..........');
    let name = 'mapari'; //Let has block scope..........
    console.log('name inside block',name);
    var name2 = 'sai';   //var does not have block scope........
    console.log(name2);

}

console.log('outside block',name1);
function test() {
    if(true) {
        var num = 20;
        console.log(num);
    }
    console.log(num);
}
var number = 50; //In var redeclaration of variable name is possible.........
var number = 40;
console.log(number);
//In let redeclaration of variable name is not possible.................
xyz = 5000;
console.log('xyz--->',xyz);
function test1(){
    //let myFavcolor = 'Black';  //In let reassign is possible.......
   // myFavcolor = 'Blue';
    //console.log('myFavcolor',myFavcolor);
    var myFavcolor = 'pink';  //In var reassign is also possible.......
    myFavcolor = 'Green';
    console.log('myFavcolor',myFavcolor); //In const reassign is not possible........
}



