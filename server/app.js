const express =require('express');
const app=express()
const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const DB='mongodb+srv://musab:musab12@cluster0.dcotlij.mongodb.net/musab_DB?retryWrites=true&w=majority'
//  useNewURlParser: true,
//  useCreateIndex: true,
//  useUnifiedTopology: true,
//  userFindAndModify: false
var spawn = require('child_process').spawn;
const text="hheheheheheh";
const process = spawn('python3', ['script.py', text]);
process.stdout.on('data', (data) => {
    test = data.toString();
    console.log('Test Data', test)
  });
mongoose.connect(DB).then(()=>{
console.log('connection sudccesful')
}).catch((err)=>console.log('no connection'));
const User=require('./model/userSchema')
app.use(express.json())
var cors = require('cors')

app.use(cors())
app.use(require('./router/auth'));
const middleware =(req,res,next)=> {
      console.log('Hello my middle ware');
}

// middleware();
app.get('/',(req,res)=> {
    res.send('Heloo howa are you')
})
app.get('/about',middleware,(req,res)=> {
    res.send('Heloo howa are you About')
})
app.get('/settings',(req,res)=> {
    res.send('Heloo howa are you settings')
})
app.get('/main',(req,res)=> {
    res.send('Heloo howa are you MAin')
})
app.listen(5000,()=> {
    console.log('RUnnig MUsab')
})