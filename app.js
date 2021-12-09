const path = require('path');
const express = require('express');
const app = express();

app.set('port',3000)
app.listen(app.get('port'),() => console.log ("Server is up"));
app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'./views/home.html')));
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'./views/register.html')))
app.use(express.static(path.resolve(__dirname,'public')));