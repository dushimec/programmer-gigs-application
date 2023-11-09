const express = require('express')
const {exphbs} = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./config/database')


const app = express()
const PORT = process.env.PORT || 8000
app.use('/gigs', require('./routes/gig'))
db.authenticate()
 .then(() => console.log('Db connected!'))
 .catch((err) => console.log('Error'+err))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req,res) =>{
    res.send('Welcome on my Servser') 
})

app.listen(PORT, console.log(`Sever is running on http://localhost:${PORT}`))