var router = require('express').Router(),
    Product=require('../models/product');







router.get("/products/beds", function(req, res)
{  

    Product.find({},function(err, product)
    {
    
     if(err)
    {
        console.log("not responding");
        return console.log(err);
    }
    
   res.render("../views/product/beds",{Product:product});
    
    }
    );
    
   

    
}
          
);


router.get("/products/new", function(req, res)
{

   res.render("../views/product/new");

}
);


router.post("/products/beds", function(req, res)
  {
  
    
    var newProduct = req.body.product;
    
      
    Product.create(newProduct, function(err, product)
    {
        if(err)
            {
                return console.log(err);
            }
        console.log("Ne Product added : ", product);
        
        res.redirect("/products/beds");
        
        
    });
    
    
    
    
}
           
 );




module.exports  = router;