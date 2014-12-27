/**
 * Created by gshanka on 12/26/14.
 */
var express = require('express'),
    path = require('path');


var app = express();

// Configure an express app
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

//make sure what view name is passed on url is presnet in jade
app.get('/:viewname',function(request,response){
    response.render(request.params.viewname);
});

app.listen(3000);