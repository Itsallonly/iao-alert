/*
 Plugin Name: iao alert
         Key: iao-alert
     Version: 1.0.2
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
            mode: "light",
            autoHide: true,
            alertTime: "3000",
            fadeTime: "500",
            closeButton: true
        }, arr );
        var closeOption = (opt.closeButton)?'<iao-alert-close></iao-alert-close>':'<style>iao-alert:before,iao-alert:after{display:none}</style>';
    	if($('iao-alert-box').length==0)
    	$('body').append('<iao-alert-box><iao-alert-start></iao-alert-start></iao-alert-box>');
    	var iaoAlert = $('<iao-alert mode="'+opt.mode+'"type="'+opt.type+'">'+opt.msg+closeOption+'</iao-alert>')
    	.insertAfter('iao-alert-start');
    	if(opt.autoHide)
    	setTimeout(function(){
    		iaoAlert.fadeOut(opt.fadeTime, function() {
	    		$(this).remove();
	    	});
    	}, opt.alertTime);
    	$('iao-alert > iao-alert-close').click(function() {
	    	$(this).parent()
	    	.insertAfter('iao-alert-start')
	    	.fadeOut(opt.fadeTime, function() {
	    		$(this).remove();
	    	});
	    });
    	return this;
    };
}( jQuery ));
