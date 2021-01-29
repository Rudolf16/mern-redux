const {Schema,model}=require('mongoose');
const validator=require('validator')
const bcrypt=require('bcrypt');

const userSchema=new Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        validate:[validator.isEmail,"Enter correct email"]
    },
    password:{
        type:String,
        required:true,
        minlength:[8,"Password must be an eigth carackters or more"]
    }
})
userSchema.pre('save',async function(next){
    this.password= await bcrypt.hash(this.password,12);
    next();
})

const User=model('User',userSchema);
module.exports=User;