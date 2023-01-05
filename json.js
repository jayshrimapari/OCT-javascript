empdetails =
{
    emp :[
        { firstName:'jayu',lastName:'bhokare', age: 24 },
        { firstName:'jayu1',lastName:'bhokare1', age: 25 },
        { firstName:'jayu2',lastName:'bhokare2', age: 26 }
    ],
    add :[
        {
            city:'sambhajinagar'
        }
    ],
    detailaddress:[
        [
            {city:'vaijapur' , pincode:423701}
        ],
        [
            {city:'pune' , pincode:443701}
        ],
    ]
}

console.log(empdetails.emp[0].firstName); 
console.log('empdetails',empdetails);
//JSON stringify
var stringyfiedJson = JSON.stringify(empdetails)
console.log(' stringyfied empdetails--->',stringyfiedJson);
var parsedJson = JSON.parse(stringyfiedJson)
console.log('parsedJson-->',parsedJson);