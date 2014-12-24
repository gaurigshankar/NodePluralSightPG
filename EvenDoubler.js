/**
 * Created by gshanka on 12/24/14.
 */
var maxTime = 1000;
var evenDoubler = function(inputNumber,callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if(inputNumber%2){
        setTimeout(function(){
            callback(new Error("Odd Input" +inputNumber));
        },waitTime);
    }
    else{
        setTimeout(function(){
            callback(null,inputNumber*2,waitTime)
        },waitTime);
    }
};




var evenDoublerSync = function(v){
    if(v%2){
        throw (new Error("Odd Input"));
    }
    else{
        return (v*2);
    }
}


module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = evenDoublerSync;
module.exports.foo = "bar";
console.log("------Done with Call-------");