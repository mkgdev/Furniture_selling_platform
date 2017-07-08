

   // ======================================
   //           Image Slider
   //=======================================

    $(".slides").on("click",".slide",function()   // click event listener
{
   var $slide = $('.slide');
 
        var $position= $slide.last().css('left');  // saving the position of last div element 
        
    if(!($(':animated').length))        // it wont do animation on extra click within animation time
{
 
    $slide.each(function()          // looping through
    {
        
         $(this).animate({          
           
       left : "-=28.7%"            // changing position of div element
       
        
    },500, function()
                    
    {
       var $firstElement = $slide.first();
        $slide.first().remove();               //removing the first element
             
        $firstElement.css("left",$position);   
        $slide.parent().append($firstElement);  // appending the first element to the end of div array
            
      
    });           
    }
                                 
    );
}

});

//*******************************************
 

 
 
 
