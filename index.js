function receivesAFunction(callBack){
    callBack();
}

function callBack(){
    console.log("Call back the function.")
}




function returnsANamedFunction(){
 


   return function namedFunction(){
        return "Hello"
    
    }

};




function returnsAnAnonymousFunction(){
    return function(){
        console.log("Cat Dog")
    }
}