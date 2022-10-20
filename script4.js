//compare json same  property without order
var obj1={name:"person1",age:5};// declare the  object data
var obj2={age:5,name:"person1"};

if(obj1===obj2){ // compare the json data by triple equaltoo by using if
    console.log(true);
}
else{
    console.log(false);

}
//output: false
