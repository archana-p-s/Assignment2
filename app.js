const express=require('express');
const app=express();
const nav=[{link:'/Books',name:'Books'},{link:'/Authors',name:'Authors'},{link:'/SignIn',name:'Sign In'},{link:'/SignUp',name:'Sign Up'},{link:'/admin',name:'Add Book'},{link:'/Addauthor',name:'Add Author'}];
const booksRouter=require('./src/routes/booksRoute')(nav);
const authorRouter=require('./src/routes/authorRoute')(nav);
const signRouter=require('./src/routes/signRoute')(nav);
const signUpRouter=require('./src/routes/signUpRoute')(nav);
const adminRouter=require('./src/routes/adminRoute')(nav);
const adminauthorRouter=require('./src/routes/adminauthorRoute')(nav);

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use('/Books',booksRouter);
app.use('/Authors',authorRouter);
app.use('/SignIn',signRouter);
app.use('/SignUp',signUpRouter);
app.use('/admin',adminRouter);
app.use('/Addauthor',adminauthorRouter);
app.get('/', function(req, res){
    res.render("index",
    {
        nav,
        title:'library App'
    }
    );

});
//app.listen(5000);
app.listen(process.env.PORT || 5000);