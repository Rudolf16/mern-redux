const {Router}=require('express');
const router=Router();
const Item=require('../models/Item')


router.get('/',(req,res)=>{
    const items=Item.find()
    .then(items=>res.json(items))
})


router.post('/',(req,res)=>{
    const newItem=Item.create({name:req.body.name})
    .then(item=>res.json(item))
})
router.delete('/:id',(req,res)=>{
    const newItem=Item.findById(req.params.id)
    .then(item=>item.remove())
    .then(()=>res.json({success:true}))
    .catch(e=>res.status(404).json({success:false}))
})

module.exports=router