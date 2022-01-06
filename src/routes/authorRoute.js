const express=require('express');
const authorRouter=express.Router();
function router(nav)
{
    authorRouter.get('/', function(req, res){
        res.render("Authors",
        {
            nav,
            title:'library App',
            Authors
        }
        );
    
    });
    authorRouter.get('/:id', function(req, res){
        const id=req.params.id;
        res.render("Author",
        {
            nav,
            title:'library App',
            Author:Authors[id]
        }
        );
    
    });
    var Authors=[
        {
            name:'Vaikom Muhammad Basheer',
            work:'Pathummayude aadu',
            genre:'Humorous novel',
            img:'basheer.jpg'
        },
        {
            name:'S K Pottekkatt',
            work:'Oru Desathinte Katha',
            genre:'Novel',
            img:'pottekatt.jpg'
        },
        {
            name:'Kumaran Asan',
            work:'Veena Poovu',
            genre:'Poem',
            img:'kumaranassan.jpg'
        }
    ];
    return authorRouter;
}

module.exports=router;