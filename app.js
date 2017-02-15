const express = require('express') 
// require the npm library
const app = express() 
const bodyParser= require('body-parser')
// create a var for the app to be built using express
// app is the global variable namespace for the program we are building
const port = 3000
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	// console.log(__dirname);
	res.sendFile(__dirname + '/index.html')
})

app.get('/entry/:name?', function(req, res){
	var name = req.params.name
  res.send(`
    <h1>${name}</h1>
    <p>Content for ${name}</p>
    `)
})

app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})

app.get('*', function(req, res){
  res.send(`
    <h1>Page not found</h1>
    `)
})

app.post('/entries', (req, res) => {
  console.log(req.body)
})