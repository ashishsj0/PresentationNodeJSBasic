const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const routes = require('./Routes/routes')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes)

app.listen(3000, function () {
    console.log("listening to port 3000")
})

app.get("/", function(req,res) {

    console.log("did you hit app / path??")

})