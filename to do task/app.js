const express=require('express');
const exphbs=require('express-handlebars')
const bodyParser=require('body-parser')
const mysql = require('mysql')


require('dotenv').config();

const app = express();
const port =process.env.PORT||5000;


app.use(bodyParser.urlencoded({extended:false}));
//parser application/json

app.use(bodyParser.json());

//static files
app.use(express.static('public'));
//template engine
 
app.engine('hbs', exphbs.engine({ extname: '.hbs' }))

app.set('view engine', 'hbs');




// const pool=mysql.createPool({
//     connectionLimit : 100,
//     host            :process.env.DB_HOST,
//     user            :process.env.DB_USER,
//     password        :process.env.DB_PASS,
//     database        :process.env.DB_NAME    
// })





const routes=require('./server/routes/user')
app.use('/', routes) ;


app.listen(port,()=>{
    console.log("server is runnig,,," + port);
})

