const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
const{mongoURI} =require('./config/keys')
const PORT=process.env.PORT||5000;
const items=require('./routes/items')

app.use(bodyParser.json())
app.use("/api/items",items)



mongoose.connect(mongoURI,{useNewUrlParser: true,useUnifiedTopology: true})
.then(res=>console.log('mongo connected')).catch(e=>console.log(e))
app.listen(PORT,()=>console.log('server is running on port : '+PORT))


