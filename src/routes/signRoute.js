const express=require('express');
const signRouter=express.Router();

function router(nav)
{
    signRouter.get('/', function(req, res){
        res.render("signIn",
        {
            nav,
            title:'library App',
            
        }
        );
    
    });
    
   
       
  
    return signRouter;
}

module.exports=router;
