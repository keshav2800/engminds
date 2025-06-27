// check for mail validation

let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let mail = "keshav@gmail.com";

if(regex.test(mail)){
    console.log("valid email");
}else{
    console.log("invalid email");
}

// only digits

let regex2 = /^[0-9]+$/;

let num = "1234567890";
if(regex2.test(num)){
    console.log("valid number");
}else{
    console.log("invalid number");
}


// postal code 

let regex3 = /^[0-9]{5}$/;

let postal = "12345";
if(regex3.test(postal)){
    console.log("valid postal code");
}else{
    console.log("invalid postal code");
}


// valid indian number

let regex4 = /^[6789]\d{9}$/;

let phone = "9382736450";

if(regex4.test(phone)){
    console.log("valid indian number");
}else{
    console.log("invalid indian number");
}


// check password

let regex5 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)$/;

let password1 = "Abc123";
let password2 = "123abc";

if(regex5.test(password1)){
    console.log("valid password");
}else{
    console.log("invalid password");
}

if(regex5.test(password2)){
    console.log("valid password");
}else{
    console.log("invalid password");
}


// string starts with hello

let regex6 = /^Hello/;

let str = "Hello world";
if(regex6.test(str)){
    console.log("string starts with hello");
}else{
    console.log("string does not start with hello");
}


// string ends with .com

let regex7 = /\^.com$/;

let str2 = "hello.com";
if(regex7.test(str2)){
    console.log("string ends with .com");
}else{
    console.log("string does not end with .com");
}


// find words starts with capital letter

let regex8 = /^[A-Z]/;
let str3 = "Hello world";
if(regex8.test(str3)){
    console.log("string starts with capital letter");
}else{
    console.log("string does not start with capital letter");
}


// replace multiple spaces with single space

let regex9 = /\s+/g;

let str4 = "Hello  world  from  javascript";
let str5 = str4.replace(regex9, " ");
console.log(str5);

// check valid date

let regex10 = /^0[1-9]|[12][0-9]|3[01]-(0[1-9]|1[0-2])-[0-9]{4}$/;

let date = "27-06-2025";
if(regex10.test(date)){
    console.log("valid date");
}else{
    console.log("invalid date");
}





