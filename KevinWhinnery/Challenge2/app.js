/**
 * Created by gshanka on 12/25/14.
 */


var Person = require('./Person'),
    logger = require('./logger')

var kevin = new Person({
    firstName:'Kevin',
    lastName:'Whinnery',
    age:31,
    knowsKungFu:true
});

var l = new logger.Logger("warn");

logger.info('Does '+ kevin.firstName +' know kung-fu?');
logger.info(kevin.knowsKungFu ? 'You better believe it!' : 'Nope.');