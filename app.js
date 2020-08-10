const path=require('path')
const express = require('express');
const app = express();
const port=3000
var exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
var expressSession = require('express-session')
const connectMongo=require('connect-mongo')
var cookieParser = require('cookie-parser')
var QRCode = require('qrcode')
var moment = require('moment');


app.use(express.static('public'))

const hbs= exphbs.create({
  helpers:{
    generateDate: (date,format)=>{
      return moment(date).format(format)
    }
  }
})


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(cookieParser())

mongoose.connect('mongodb://localhost/test_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const mongoStore=connectMongo(expressSession)
app.use(expressSession({
  secret:"secret path",
  resave: false,
  saveUninitialized: true,
  store: new mongoStore({ mongooseConnection: mongoose.connection })
}))




//page routes:
//---------------------------------------------------------------
const mainRoutes=require('./routes/mainRoutes');
const boatEngineRoutes= require('./routes/boatEngineRoutes');
const boatTypeDefRoutes= require('./routes/boatTypeDefRoutes');
const coopDefRoutes= require('./routes/cooperativeDefRoutes');
const portRegRoutes= require('./routes/portRegRoutes');
const userRegRoutes= require('./routes/userRegRoutes');
const boatRegRoutes=require('./routes/boatRegRoutes');
//const loginPageRoutes=require('./routes/loginPageRoutes');
const logOutButtonRoutes=require('./routes/logOutButtonRoutes');
const restApiRoutes=require('./restApi');




app.use('/',mainRoutes)
app.use('/boatEngineRoutes',boatEngineRoutes)
app.use('/boatTypeDefRoutes',boatTypeDefRoutes)
app.use('/cooperativeDefRoutes',coopDefRoutes)
app.use('/portRegRoutes',portRegRoutes)
app.use('/userRegRoutes',userRegRoutes)
app.use('/boatRegRoutes',boatRegRoutes)
//app.use('/loginPageRoutes',loginPageRoutes)
app.use('/logOutButtonRoutes',logOutButtonRoutes)
app.use('/restApi',restApiRoutes)

//---------------------------------------------------------------

app.listen(port, () => {
 console.log('Uygulama çalıştırıldı...');
});

