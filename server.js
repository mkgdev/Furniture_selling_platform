var express     =require("express"),
    app         =express();


app.set("view engine","ejs");

app.use(express.static(__dirname+"/public"));



//Routes

app.get("/" , function(req, res)
       
{
   res.render("index");
  

}
       
       
);



app.listen(2000, function()           
{
    
   console.log("Server is started on port : 2000"); 
    
});