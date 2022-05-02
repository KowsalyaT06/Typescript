// let a = 1;
// a=5

// console.log('resss',a)

// //Union 

// let Union : string|number;
// Union = 'Types';
// Union =123;

// let userName:string|string[]
// userName='Kowsi'
// userName=['Fname','Lname']

// //Alias

// type People = string|number;


// let person : People
// person = 'kowsi'
// person = 22

// let Peopless : People[]
// ['Kowsi',1,'ramya',2]

// //Generics

// function g<T>(items:T):T{
//     return items;
// }
// let numbers = g(1);
// let strings = g("kowsi");

// console.log('Numbers',numbers);
// console.log('Strings',strings)


let employe:{
    firstname:string,
    roles:string[],
    age:number,
}[]

employe =[
    {'firstname':'testuser',roles:["data", "data1"],age:23},
    {'firstname':'testuser2',roles:["data2", "data1"],age:24}
]