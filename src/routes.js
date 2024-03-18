import express from 'express'

const router = express.Router()

router.get('/',(req,res)=>{
    res.sendFile('./static/about.html',{
        root:__dirname
    });
})

module.exports=router