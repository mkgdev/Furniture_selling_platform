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


////setting  the position of info button at the same level
//
//var parentY; //total Y distance + height of element ;
//var childY;
//var distance=0; // distance between bottom of parent and child
//
//
//$('.thumbnail-product .caption').each(function()
//{
//   
//     parentY=$(this).offset().top+$(this).height();
//    
// childY =   $(this).find('a').offset().top+$('.thumbnail-product .caption a').height();
//    
//
//    
//    distance = parentY-childY;
//      
//      $(this).find('a').css({
//          
//          marginBottom : '-='+String(distance)
//      })
//   
//    
//}
//);



