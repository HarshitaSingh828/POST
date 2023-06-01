const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// create a post
router.post("/",async(req,res)=>{
    try{  
    let {name,text,image}=req.body;
    let post = new Post({name,text,image});
    await post.save();
    res.status(200).json({msg:"Post created successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({ msg: "Something went wrong!" });
    }
})
module.exports = router;