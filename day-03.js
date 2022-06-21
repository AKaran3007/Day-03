//for loop
let arr = ['apple','banana','kiwi','orange'];
for(let i=1; i<arr.length; i++){
console.log(arr[i]);
}

//for of loop 

let fruits = ['apple','banana','kiwi','orange'];
for(let ele of fruits){
console.log(ele);
}

//for in loop

let person = {
    name: 'karan',
    age: 22,
    email: 'akaran3007@gmail'
    }
    for(let key in person){
    console.log('key ' + key + 'data' + person [key]);
    }

//JSON RESUME

var karan = {
    basicinfo:{
    name: 'karan',
    age: 22,
    email: 'akaran3007@gmail',
    address: 'ayanavaram',
    nationality:'indian',
    city:'chennai',
    state:'tamilnadu',
    pincode:'600023'
    },
    workexperience: 'i am fresher to IT field and i am studing full stack developer course at guvigeek',
    qualification: 'bachelor of engineering in electronics and communication at panimalar engineering college and i finished college at november 2020',
    hoobies: 'bike and car riding and exeploring foods',
    languagesknown: 'english and tamil'
}
   var karanJSON = JSON.stringify(karan);
   console.log(karanJSON);



