const express=require('express');
const adminauthorRouter=express.Router();

function router(nav)
{
    adminauthorRouter.get('/', function(req, res){
        res.render("Addauthors",
        {
            nav,
            title:'library App',
            
        }
        );
    
    });
    
   
       
  
    return adminauthorRouter;
}

module.exports=router;
