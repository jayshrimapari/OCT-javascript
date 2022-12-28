let varName = 'Jayshriyogeshwarbhokare';
console.log(varName.length);
//array is used to stores multiple values......
//[] is empty array.....
let colors = ['pink','red','blue','black','purple']; //Array index starts from zeros.....
console.log(typeof(colors));
console.log(colors.length);  //length is a property...  length proprty is used in string also....
console.log(colors);
console.log(colors[1]);
console.log(colors[3]);
console.log(colors[(colors.length-1)]); // [(colors.length-1)] is used in last value index....
colors[2] = 'white';
console.log(colors);
colors[9] = 'pink';
console.log(colors);
console.log(colors[7]);

//Javascript array methods...
   
var cars = ['volvo','I20', 'jaguar','maecedes benz' ]
let newcars = cars.toString();
console.log('newcars',newcars);
console.log(cars.toString());   //array_name.method_name.......
console.log(cars.join('$'));
console.log(cars.join(" ")); //" " is used in space....
console.log(cars.join('\n')); //\n is used in line break......
 //pop function used in delete last element.....
console.log(cars.pop());
console.log(cars);
//push function  add in last element....

var cars1 = ['volvo','I20', 'jaguar','maecedes benz' ]
cars1.push('mini cuper');
console.log(cars1);
// Shift() function is used in to delete the first position items........
console.log(cars1.shift());
console.log(cars1);

// unshift() function add in first position items............
cars1.unshift('fortune')
console.log(cars1);
 delete cars1[2];
console.log(cars1);
var no1 = [10, 20, 30,40];
var no2 = [50, 60, 70, 80];
var no = [90, 100];
var conNo = no1.concat(no2)
console.log(conNo);
var conNo = no2.concat(no1)
console.log(conNo);
var conNo = no1.concat(no2 , no)
console.log(conNo);
var conNo = no.concat(no1 ,no2)
console.log(conNo);
const fruits1 = [10,20,30,40,50,60];
const fruits2 = fruits1.slice(1,3)
console.log('fruits2 +',fruits2);
const fruits3 = [10,20,30,40,50,60];
const fruits4 = fruits3.slice(1,3)
console.log('fruits4 +',fruits4);
var drinks = ['coffee','milk','tea','cold coffee']
//drinks.splice(1, 0,'masala milk')
//console.log(drinks);
drinks.splice(1, 1,'hot coffee') // in positive number add first then shift later......
console.log(drinks);
var fruits = ['apple','mango','banana','papaya','chiku' ]
fruits.splice(-1,-1,'lemon','kiwi')// in negative number mango add then add value...
console.log(fruits);

//replace() method.......is case sensitive.....it will replace only for first match..........replace all match to use /g.........
 var address = 'I live in mumbai'
 console.log(address.replace('mumbai', 'pune'));
 var address = ' mumbai I live mumbai in mumbai'
 var updatedAddress = address.replace('/mumbai/g','pune')
 console.log(updatedAddress);
 var address = ' Mumbai I live mumbai in mumbai'
 var updatedAddress = address.replace(/mumbai/g,'pune')
 console.log(updatedAddress);

 //uppercase()... lowercase() function........
 var text = 'jayshri mapari.......Y';
 console.log(text.toUpperCase()); 
 var text1 = 'SHIRDI SAIBABA.......';
 console.log(text1.toLowerCase());

 //concate....
 console.log(text.concat(text1));
 var text2 = text + ' ' + text1
 console.log(text2);  

 console.log(text[3]);
 console.log(text.charAt(3));
 //IndexOf()function....
 console.log(text.indexOf('i'));
 console.log(text.indexOf('b'));
 console.log(text.lastIndexOf('y'));
 console.log(text.indexOf('i',8));
 console.log(text.indexOf('i',15));
 console.log(text.search('i'));
 console.log(text.search(/Y/));

// Split() function....
var date = '10-20-2022';
var newDate = date.split(' -')
console.log(newDate);
var fullName = 'jayshri mapari';
var NewFullName = fullName.split(' ');
console.log(NewFullName);
var firstname = NewFullName[0]
console.log(firstname);
var lastname = NewFullName[1]
console.log(lastname);
 





