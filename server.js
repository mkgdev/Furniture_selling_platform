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

app.get("/products", function(req, res){
   res.render("products"); 
});

app.get("/contact", function(req, res){
   res.render("contact"); 
});

app.get("/about", function(req, res){
   res.render("about"); 
});
    
app.get("/hfinishing", function(req, res){
   res.render("hfinishing"); 
});
    
app.get("/view_all_products", function(req, res){
   res.render("view_all_products"); 
});
    
    
    

app.listen(2000, function()           
{
    
   console.log("Server is started on port : 2000"); 
    
});