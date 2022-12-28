//let var const
//syntax: let/var/const variable name = data;
let b = 10; //declaration + definition
let a; // declaration
a = 10; //defination
let name1 = "Jayu";
let my_name = "Jayu1";
let myName  = "Jayu2";
let MYNAME = "Jayu3";
console.log(a);
console.log(name1);
console.log('a',a); //, is space
console.log('a' + a); //+ is not space
console.log("a" + a);
console.log('a'+a+b);
console.log('a'+a-MYNAME);
console.log('a',a+MYNAME);
console.log('a-->' ,a + 'b-->',b);
console.log('a' ,a + b);
console.log('aaa' +12+20);
console.log('xyz'+20);
console.log(12+20+'aaa');
console.log(12+20+'aaa'+12+20);
console.log(12+20+20,'aaa'+12+20+20);
console.log('a',a,a);
console.log('a'-a-b);
console.log(10+10+'aaa');
console.log(30+20,'aaaaa');
console.log(10+20+30+'aaaaaaaaaa'+10+20+30);
console.log(10+20+30+'aaaaaaaaaaaa',10,20,30);
//Javascript Data Types : String,boolean,null,undefined,number,object,Bigint,Symbol.........
//String
let first_sec = "Jayu";
let first_sec1 = 'Jayu';  
let first_sec2 = '';
let first_sec3 = "";
console.log(typeof(first_sec));
console.log(typeof(first_sec1));
console.log(typeof(first_sec2));
console.log(typeof(first_sec3));
//Boolean    : boolean true/boolean false
let rs = 20;
let rs1 = 30;
console.log(rs == rs1); // = assinging operator : (eg let a = 20); ==equality operator (eg a==b); ===Triple equals to :it will check data type as well as value of variable
let rs2 = 10;           // != ---->not equal to.....
let rs3 = 10;
console.log(rs2 == rs3);
console.log(rs2 === rs3);
let d1 = true;
console.log(typeof(d1));
let d2 = 'true';
console.log(typeof(d2));
let d3 = null;
console.log(d3);
console.log(typeof(d3));
let d4;
console.log(d4);
console.log(typeof(d4));
let d5 = 50;
console.log(typeof(d5)); 
let d6 = '50';
console.log(typeof(d6)); 
let d7 = {}; // {} --> means object.......
console.log(typeof(d7));
let d8 = []; //[] --> is a empty array.......
console.log(typeof(d8));

function callingjsfile() {

    console.log('inside js'); //3.19==3.2
   // let d9 = 999999999999999  //16time 999999999999999999999...........10000000000000
    //console.log(d9);
   let d10 = 9999999999999999n
   console.log(d10);
   let d11 = BigInt(99999999999999999999n) // BigInt("9999999999999999")---->string is applied output is same
   console.log(d11);
   console.log(d10 + '' + d11);
   console.log(typeof(d10)+typeof(d11));
   let d12 = Symbol('hi')
   console.log(d12);
   console.log(d12.description);
   console.log(typeof(d12));

    
}