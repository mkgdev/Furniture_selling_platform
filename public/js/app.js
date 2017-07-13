
$(".ui.dropdown").hover(function()
{
   $(this).toggleClass("hower");
}
                       
);

$(".ui.dropdown .menu .item").hover(function()
{
    
    $(this).toggleClass("hower");
    
}
                              
                              
);


 //make image height equal

    var imgmaxht = 0;  // maximum image height
    $('.thumbnail-product img').each(function()
                                    
    {
    
        if($(this).height()>imgmaxht)
            {
                imgmaxht= $(this).height();
            }
    }
                                    
    );




      $('.thumbnail-product img').height(imgmaxht);

//make same  height of caption


    var capmaxht = 0;  // maximum image height
    $('.thumbnail-product .caption').each(function()
                                    
    {
    
        if($(this).height()>capmaxht)
            {
                capmaxht= $(this).height();
            }
    }
                                    
    );




      $('.thumbnail-product .caption').height(capmaxht);



//Returning the value of radios button

//$('[name="optionsRadios"]').prop('checked');


//Sending a Post request to server when radio button selected
$('[name="optionsRadios"]').on('change', function()
{
     $(this).prop('checked','true');

    $('#radio-form').submit();
  


        
}

                              
                              
);
