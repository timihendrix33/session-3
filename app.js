const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const port = 9000
app.use(bodyParser.urlencoded({extended: true}))
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://tstevenson33:dumbpass1234@ds161209.mlab.com:61209/bcl-2', (err, database) => {
   if (err) return console.log(err)
    db = database
  app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
  })
})

app.get('/', (req, res) => 
	res.sendFile(__dirname + '/index.html')
	) 

app.post('/entries', (req, res) => {
	db.collection('entries').save(req.body, (err, result) => {
		if (err) return console.log(err)
			console.log('saved to database')
		res.redirect('/')
	})
})	

app.get('/entry/:name?', function(req, res){
  let name = req.params.name
  res.send(`
    <h1>${name}</h1>
    <p>Commentary on ${name} will go here.</p>
    `)
})

app.get('*', function(req, res){
  res.send(`
    <h1>Page not found</h1>
    `)
})