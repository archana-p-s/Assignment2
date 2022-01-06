const express=require('express');
const booksRouter=express.Router();
function router(nav)
{
    booksRouter.get('/', function(req, res){
        res.render("Books",
        {
            nav,
            title:'library App',
            Books
        }
        );
    
    });
    booksRouter.get('/:id', function(req, res){
        const id=req.params.id;
        res.render("Book",
        {
            nav,
            title:'library App',
            Book:Books[id]
        }
        );
    
    });
    var Books=[
        {
            title:'Pathummayude aadu',
            author:'Vaikom Muhammad Basheer',
            genre:'Humorous novel',
            img:'pathumma.jpg'
        },
        {
            title:'Oru Desathinte Katha',
            author:'S K Pottekkatt',
            genre:'Novel',
            img:'desam.jpg'
        },
        {
            title:'Veena Poovu',
            author:'Kumaran Asan',
            genre:'Poem',
            img:'veena.jpg'
        }
    ];
    return booksRouter;
}

module.exports=router;