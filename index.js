var express = require('express')
var app = express()
var path = require('path')
var port = process.env.PORT || 8000

var throttle = require('express-throttle-requests');



app.get('/', (req,res) => {
    res.sendFile(__dirname +'/test.html')
})

throttle(app, {
  min:4000, //Example showing a minimum of 1000ms (1 second) 
  max:5000 //Example showing a maximum of 5000 (5 seconds) 
})
app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/cdn', (req,res) => {
    res.sendFile(__dirname + '/cdn.html')
})

app.get('/test', (req,res) => {
    res.sendFile(__dirname + '/test.html')
})

app.listen(port, () => {
    console.log('running on port ' + port)
})
