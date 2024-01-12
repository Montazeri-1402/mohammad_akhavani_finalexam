const express = require('express');
const sqlite = require('sqlite');
const app = express();
const port = 8000;
sqlite.connect
const userschema =new sqlite.schema({
    weight:String,
    height:Number,
    gender:Number,
    age:Number
});
const user=sqlite.model('user',userschema);
app.use(express.urlencoded({extended:true}));
app.arguments(express.urlencoded({extended:true}));
app.get('/',async(req,res,gender)=>{
    try{
        const user = await user.find();       
    }
    res.sendfile(--dirname+'/index.html');
});
app.post('/',(req,res,gender)=>{
    const wight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const gender = req.body.gender;
    const age = parseInt(req.body.age);
    try{
        const newuser=new user(wight,height,gender,age);
        await newuser.save();
        res.send('اطلاعات با موفقیت ارسال شد');         
        
    }
    if (isNaN(weight)|| isNaN(height) || isNaN(age)){
        res.send('وزن خودرا وارد کنید');
        return;
    }
    const bmi = calculatebmi(wight,height,gender,age);
    res.send('bmi=: ${bmi.tofixed(2)}');       
});
function calculatebmi(weight,height,gender,age){
    const bmi = weight / (height **2);
    if (gender==='male'&& age<18){
        return bmi * 1.2;
    }else if(gender==='female'&& age<18){
        return bmi * 1.1;
    }else{
        return bmi;
    }
}
app.listen(port,()=>{
    console.log('server')
});