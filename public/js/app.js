
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


//getFromStrorage function to get and set value in localstorage


function getFromStorage()  // required to save the current radio button checked which will be extracted after reload of page
{
    
    return {
        
        set : function(key ,value)
        {
            localStorage.setItem(key, value);
        },
        
        get : function(key)
        
         {
             return localStorage.getItem(key);
         }
    };
    
}

$.when($('[name="optionsRadios"]').on('change', function()
{
    
    getFromStorage().set("Cur_radio", $(this)[0].value);
    
    $('#radio-form').submit();

  
}

                              
                              
)
).then(function()
      
      {
     
    var value=getFromStorage().get('Cur_radio'); //value extracted from localStorage
   
    
  $('[value="'+value+'"]').prop('checked','true');  //set the current radio button checked
});


