/*
 Plugin Name: iao alert
         Key: iao-alert
     Version: 1.0.0
      Author: Prashant Kapoor
     Website: http://www.itsallonly.com
        Repo: https://github.com/Itsallonly/iao-alert
      Issues: https://github.com/Itsallonly/iao-alert/issues
       Files: iao-alert.jquery.js, iao-alert.css
  Dependency: Jquery
*/
(function( $ ) {
    $.fn.iaoAlert = function(arr) {
    	var opt = $.extend({
            msg: "This is default iao alert message.",
            type: "notification",
            mode: "light"
        }, arr );
    	if($('iao-alert-box').length==0)
    	$('body').append('<iao-alert-box><iao-alert-start></iao-alert-start></iao-alert-box>');
    	$('<iao-alert mode="'+opt.mode+'"type="'+opt.type+'">'+opt.msg+'</iao-alert>').insertAfter('iao-alert-start').delay(3000).fadeOut(500, function(){$(this).remove();});
    	return this;
    };
}( jQuery ));
