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