// routes
const router = require('express').Router();

// Model
const vinyl = require('../models/vinyl')

// Token 
const verifyToken = require('./validateToken')

// get favs

router.get('/vinyls',  async (req, res) =>{

      
      try{
            const vinyls = await vinyl.find();
            res.status(200).json({
            message : vinyls
            })
         }
       catch(e){
          console.log(e);   
       }     
      
} )

module.exports = router;
