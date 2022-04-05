function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFunction() {
    console.log("Named Function"); 
   }
}

function returnsAnAnonymousFunction(){
    return () => console.log("this is an anonymous function");
}