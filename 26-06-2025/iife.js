const counter = (function () {
    let count = 0;
    return {
        increment: function (){
            count++;
            return count;
        },
        reset: function(){
            count = 0;
        }
    }
})()

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.increment());
console.log(counter.increment());