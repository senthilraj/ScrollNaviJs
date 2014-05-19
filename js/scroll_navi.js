/* 
    Name: ScrollNavi.js
    Author: senthilkumar
    Website: http://senthildesigner.co.nr/
    mail: senthil2rajan@gmail.com
*/

(function ( $ ) {

    $.fn.scroll_navi = function(options) {
        
        var defaults = {
            speed        : 1000
        };
        
        var settings = $.extend( {}, defaults, options );
        
        return this.each( function() {
            var win = $( window );
            var elem = $( this );
            var elem_a = "#"+elem.attr("id")+" a";
            var wh = win.height();
            wh=wh-60;
            elem.css("top",wh+"px");
            
            $(elem_a).click(function(event){
				var link_outerpage = $(this).attr("data-outerpage");
				if(link_outerpage=='true')
				{
					console.log("this is outerpage link");	
				}
				else{
                event.preventDefault();
					var link_add = $(this).attr("href");
					var pos = $(link_add).offset().top;
					$('html, body').animate({scrollTop: pos}, settings.speed);
				}
            });
            
            win.scroll(function() {
                var topvalue = win.scrollTop();
                if(wh<=topvalue)
                {
                    $(elem).css({"position":"fixed","top":"0px"});
                }
                else{
                    $(elem).css({"position":"absolute","top":wh+"px"});
                }
            });
            
        });
    };
 
}( jQuery ));
