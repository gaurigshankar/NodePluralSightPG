/**
 * Created by gshanka on 12/24/14.
 */
var maxTime = 1000;

var evenDoubler = function(inputNumber,callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if(inputNumber%2){
        setTimeout(function() {
            callback(new Error("Odd Input "+inputNumber));
        }, waitTime);
    }
    else{
        setTimeout(function() {
            callback(null,inputNumber*2,waitTime);
        },waitTime);
    }

};

var count = 0;
for (var i = 0; i < 10; i++) {
    console.log("Calling evenDoubler function with input "+i);
    evenDoubler(i,function(err,results,time){
        if(err){
            console.log(err.message);
        }
        else{
            console.log("The Results are: "+results+" ("+time+" ms)")
        }
        if(++count === 10){
            console.log("Done with all callback calls");
        }
    });
}

console.log("------Done with Call-------");