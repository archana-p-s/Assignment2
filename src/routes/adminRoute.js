const express=require('express');
const adminRouter=express.Router();

function router(nav)
{
    adminRouter.get('/', function(req, res){
        res.render("Addbooks",
        {
            nav,
            title:'library App',
            
        }
        );
    
    });
    
   
       
  
    return adminRouter;
}

module.exports=router;
