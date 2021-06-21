const express=require('express');
const app=express();

/* const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); */

app.use(express.static('test1'));

app.listen(8082);
console.log("App listening on port 8082");
