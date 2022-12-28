let name1 = 'jayashriyogesh'
console.log('length',name1.length);
var name2 = name1.slice(2,5);
console.log(name2);
var name2 = name1.slice(5,11);
console.log(name2);
var name2 = name1.slice(-5,-2);
console.log(name2);
 var carname = 'mini cuper';
 console.log(carname.substring(1,5));
 var carname = 'mini cuper';
 console.log(carname.substring(-1,-5));
 var carname = 'mini cuper';
 console.log(carname.substring(5));
 var carname = 'mini cuper';
 console.log(carname.substring(-1,5));
 var address = 'i live in sambhajinagar'
 console.log(address.replace('sambhajinagar','vaijapur'));
 var address = 'Sambhajinagar i live sambhajinagar in sambhajinagar'
var updatedaddress = address.replace('sambhajinagar','vaijapur');
console.log(updatedaddress);
var updatedaddress = address.replace(/sambhajinagar/g,'vaijapur');
console.log(updatedaddress);
var text = 'jayshri yogeshwar---i';
console.log(text.toUpperCase());
var text1 = 'SHIRDI SAIBABA----';
console.log(text1.toLowerCase());
console.log(text.concat(text1));
console.log(text1.concat(text));
var text2 = text + ' ' + text1;
console.log(text2);
console.log(text[3]);
console.log(text.charAt(3));
console.log(text[20]);    // no character is found then undefined in text.....
console.log(text.charAt(20)); //no character is found then empty in charAt........
console.log(text.indexOf('i'));
console.log(text.indexOf('x')); // x letter not show in text then output it will be -1........
console.log(text.lastIndexOf('i'));
console.log(text.indexOf('i',7));
console.log(text.indexOf('i',22));
console.log(text.search('i'));

var date = '21-12-2022';
var newdate = date.split('-');
console.log(newdate);

var fullname ='jayshri mapari';
var newfullname = fullname.split(' ');
console.log(newfullname);
 
var firstname = newfullname[0];
console.log(firstname);
var lastname = newfullname[1];
console.log(lastname);