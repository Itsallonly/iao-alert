/*
	Name: iao alert
	 Key: iao-alert
 Version: 1.0.0
  Author: Prashant Kapoor
 Website: http://www.itsallonly.com
    Docs: http://www.itsallonly.com/plugin/jquery/iao-alert
    Repo: http://www.itsallonly.com/plugin/jquery/iao-alert
  Issues: http://www.itsallonly.com/plugin/jquery/iao-alert
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