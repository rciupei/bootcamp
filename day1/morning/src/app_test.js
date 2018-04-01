var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello, World!')
})

app.get("/hi", (req1, res1) => res1.send("hi there arrow1"))

app.get("/coin",function(req,res){
    var rand = (Math.random()*10).toPrecision(1);
    return (rand<=5 ? res.send(`tails `) : res.send("heads"))})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});