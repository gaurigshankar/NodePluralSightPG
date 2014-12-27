/**
 * Created by gshanka on 12/26/14.
 */
var express = require('express');

var app = express();

//for localhost:3000/customer/111
app.get('/customer/:id',function(request,response){
    response.write("The customer id is "+request.params.id+'\n');

    response.end("Another form is "+request.params['id']);
});

//for localhost:3000/customer?id=111
app.get('/customer',function(request,response){
    response.end("The custoemr id is"+request.query.id);
});
app.listen(3000);