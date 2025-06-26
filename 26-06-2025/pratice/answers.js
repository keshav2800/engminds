function reverse(str){
    let newstr = "";
    for(let i = str.length -1; i>=0; i--){
        newstr += str[i];
    }
    return newstr;
}

console.log(reverse("hello"));

function checkpalindrome(str){
    let rstring = reverse(str);
    if(str == rstring){
        console.log("palindrome");
    }else{
        console.log("not palindrome");
    }   
}

console.log(checkpalindrome("madam"));


function longestword(str){
    str = str.split(" ");
    let maxi = 0;
    let maxstr = "";
    for(let i =0; i<str.length; i++){
        if(str[i].length > maxi){
            maxi = str[i].length;
            maxstr = str[i];
        }
    }
    return maxstr;
}

console.log(longestword("the quick brown fox jumps over the lazy dog"));

function flatten(arr){
    console.log(arr.flat(Infinity));
}
flatten([1, [2, [3, 4], 5], 6]); 

function removeduplicates(arr){
    arr.sort();
    for(let i =1; i<arr.length; i++){
        if(arr[i] == arr[i-1]){
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr);
}
removeduplicates([1, 3, 2, 3, 4, 4, 5]);

function isanagram(str1, str2){
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');
    console.log(s1, s2);

    if(s1 === s2){
        return "this is anagram";
    }else{
        return "this is not anagram";
    }
}
console.log(isanagram("listen", "silent"));
console.log(isanagram("hello", "world"));

function tocapital(str){
    let arr = str.split(" ");
    for(let i =0; i<arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

console.log(tocapital("hello world from javascript"));


function arrayPrototype(arr){
    const arr1 = arr.map((x) => x*2);
    console.log(arr1);
}

arrayPrototype([1, 2, 3]);

async function fetchData(){
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("error: ", error));
}
fetchData();


function counter(){
    let count =0;
    return function(){
        count++;
        return count;
    }
}

let counterr1 = counter();
console.log(counterr1());
console.log(counterr1());






