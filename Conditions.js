//syntax:condition ==true then if block will get execute.
//if (condition) {
    
//}
// >--greater than operator
// <--less than operator
// ==--equals to operator
// >=--greater than equal to operator
// <=--lessthan equal to operator
// !==--not equal to operator...........................
function conditions(){
    let marks = 80;
    let minmarks = 35;
    if(marks == minmarks){ //if true not jump in else condition  //if false then jump to else condition.......
       console.log('i am pass');
    }
    //if(marks < minmarks){
        //console.log('i am pass');
    //}
    //console.log('this is out of if block');
    if(marks > minmarks){
        console.log('i am pass');
    }
    else{  //if condition is true only if block is execute.......
        console.log('i am fail');
    }
    }
    function marks(){                              
        let basicpercentage = 40;
        let percentage = 50;
        let percentage1 = 60;
        let percentage2 = 70;
        if(percentage < basicpercentage){
            console.log('third class');
    }
    else if(percentage < basicpercentage && percentage1 > percentage){
        console.log('second class');
    }
    else if(percentage2 > basicpercentage && percentege2 > percentage1){
        console.log('first class');
    }
    else{
        console.log('fail');
    }
    }
    // T||T=T  , T||F=T  ,F||T=T  ,F||F=F
    function logicalor() {
        if(10 >= 20 || 10 < 50){
            console.log('inside if');
        }
        }
        // Ternary operator: condition == condition ? true : false
        50 > 10? console.log('50 is greater'):console.log('10 is greater');
        50 < 10? console.log('50 is greater'):console.log('10 is greater');
        50 < 10 || 50>=20 ? console.log('50 is greater'):console.log('10 is greater');
       // 50 > 10 || 50>=20 ? marks() : console.log('10 is greater');

// prefix ++i , postfix i++ operators
// postfix i++ ------> first return value then incremented by 1......... i++ = i+1......
let i = 2;
console.log('i',i);
console.log('i++',i++);
console.log('i',i);
let j = 1;
j = j + 1;  //j++
console.log('j',j);
// prefix ++i -------> first incrememt then return.............. 
let h = 1;
console.log('h',h);
console.log('++h',++h);
console.log('h',h);
let no1 = 20;
let no2 = 30;
let result = no1 + no2;
console.log('result',result);
let no3 = 20;
let no4 = 30;
let result1 = no3 - no4;
console.log('result1',result1);
let no5 = 20;
let no6 = 30;
let result2 = no5 * no6;
console.log('result2',result2);
let no7 = 20;
let no8 = 30;
let result3 = no7 / no8;
console.log('result2',result3);
let k = 1;
console.log('k',k);
console.log('--k',--k); // first increment then return........
console.log('k',k);
let l= 1;
console.log('l',l);
console.log('l--',l--); //first return then increment........
console.log('l',l);



