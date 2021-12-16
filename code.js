// helloWorld function 
function helloWorld() {
    return ("Hello, World!");
}
helloWorld();



function sayHello(input) {
    if (input === undefined || input === true || input === false) {
        return ("Hello World!");
    } else if (input === null){
        return "Input is Null!";
    }else if(input === ""){
        return "Please enter a Name.";
    } else{
    return ("Hello " + input + "!");
}}
//come back here and add more to the function to satisfy new tests

function isFive(input){
    if(parseInt(input) === 5){
        return true;
    }else{
        return false;
    }
}
function isEven (input){
    if(input % 2 === 0 && typeof input === "number"){
        return true;
    }else {
        return false;
    }
}