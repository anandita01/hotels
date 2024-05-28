const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');

router.post('/',async(req,res)=>{
    try{
      const data=req.body;
      const newMenu=MenuItem(data);
      const response= await newMenu.save();
      console.log('menu saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(400).json({error:'Internal server error'});
    }
  })
  router.get('/',async(req,res)=>{
    try{
      const data=await MenuItem.find();
      console.log('menu fetched');
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(400).json({error: 'Internal server error'});
    }
  })

  router.get('/:tasteType',async(req,res)=>{
    try{
      const tasteType=req.params.tasteType;
      if(tasteType=='Spicy' || tasteType=='Sweet'|| tasteType=='Sour')
        {
          const response=await MenuItem.find({taste: tasteType});
          console.log('response fetched');
          res.status(200).json(response);
        }
        else{
          console.log('Invalid Taste type');
          res.status(404).json({error: "Invalid taste type"});
        }
    }
    catch(err)
    {
      console.log(err);
      res.status(400).json({error:' Internal Server error'});
    }
  })
  router.put('/:id',async(req,res)=>{
    try{
      const menuId=req.params.id;
      const updatedMenu=req.body;

      const response= await MenuItem.findByIdAndUpdate(menuId,updatedMenu,{
        new:true,
        runValidators:true,
      });
      if(!response){
        res.status(404).json({person:'Person Not found'});
      }

      console.log('Menu Updated');
      res.status(200).json(response);
    }
    catch(err)
    {
      console.log(err);
      res.status(400).json({error:' Internal Server error'});
    }
  })
  router.delete('/:id',async(req,res)=>{
    try{
      const menuId=req.params.id;
     

      const response= await MenuItem.findByIdAndDelete(menuId);
      if(!response){
        res.status(404).json({person:'Person Not found'});
      }

      console.log('Menu Deleted');
      res.status(200).json({message: 'Menu item deleted successfully'});
    }
    catch(err)
    {
      console.log(err);
      res.status(400).json({error:' Internal Server error'});
    }
  })
  module.exports=router;