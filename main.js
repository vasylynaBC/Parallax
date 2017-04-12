$(function(){
    var moon=$('.moon');
   setInterval(function(){ moon.animate({
        top:"550px",
        left:"200px",
        zIndex:3
        
        
        
    },2000).animate({
        top:"65px",
        left:"450px",
        zIndex:5,
       
    },2000)
    
    },2000)
    
    
})