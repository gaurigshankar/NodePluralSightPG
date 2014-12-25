/**
 * Created by gshanka on 12/25/14.
 */
exports.info = function(message){
    console.log(new Date()+':'+message);
};
function Logger(level){
    this.level = level;
}

exports.Logger = Logger;