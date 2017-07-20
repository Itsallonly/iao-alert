/*
 Plugin Name: iao alert
         Key: iao-alert
     Version: 1.0.7
      Author: Prashant Kapoor
     Website: http://www.itsallonly.com
        Repo: https://github.com/Itsallonly/iao-alert
      Issues: https://github.com/Itsallonly/iao-alert/issues
       Files: iao-alert.jquery.js, iao-alert.css
  Dependency: Jquery
*/
(function( $ ) {
    $.fn.iaoAlert = $.iaoAlert = function(arr) {
        var opt = $.extend( {
            msg: "This is default iao alert message.",
            type: "notification",
            mode: "light",
            autoHide: true,
            alertTime: "3000",
            fadeTime: "500",
            closeButton: true,
            closeOnClick: false,
            fadeOnHover: true,
            position: 'top-right',
            zIndex: '999',
            roundedCorner: false,
            alertClass: ''
        }, arr ),
        timeStamp = $.now(),
        ext = {
            chkPosition : (opt.position == 'bottom-right')?'bottom-right':((opt.position == 'bottom-left')?'bottom-left':(opt.position == 'top-left')?'top-left':'top-right'),
            closeOption : (opt.closeButton)?'<iao-alert-close></iao-alert-close>':'<style>#iao'+timeStamp+':before,#iao'+timeStamp+':after{display:none}</style>',
            chkMsg : (opt.msg.indexOf(" "))?'white-space:pre-wrap;word-wrap:break-word;':''
        },
        roundedCorner = (opt.roundedCorner)?('round'):'';
        if($('iao-alert-box').length==0)
        $('body').append('<iao-alert-box position="top-left" style="z-index:'+opt.zIndex+'"><iao-alert-start></iao-alert-start></iao-alert-box><iao-alert-box position="top-right" style="z-index:'+opt.zIndex+'"><iao-alert-start></iao-alert-start></iao-alert-box><iao-alert-box position="bottom-right" style="z-index:'+opt.zIndex+'"><iao-alert-start></iao-alert-start></iao-alert-box><iao-alert-box position="bottom-left" style="z-index:'+opt.zIndex+'"><iao-alert-start></iao-alert-start></iao-alert-box>');
        var iaoAlert = $('<iao-alert class="'+opt.alertClass+'" id="iao'+timeStamp+'" close-on-click='+opt.closeOnClick+' fade-on-hover='+opt.fadeOnHover+' mode="'+opt.mode+'"type="'+opt.type+'" style="'+ext.chkMsg+'" corners="'+roundedCorner+'">'+opt.msg+ext.closeOption+'</iao-alert>')
        .insertAfter('iao-alert-box[position="'+ext.chkPosition+'"] > iao-alert-start');
        if(opt.autoHide)
        setTimeout(function(){
            iaoAlert.fadeOut(opt.fadeTime, function() {
                $(this).remove();
            });
        }, opt.alertTime);
        $('iao-alert[close-on-click="true"]').click(function() {
            $(this).fadeOut(opt.fadeTime, function() {
                $(this).remove();
            });
        });
        $('iao-alert > iao-alert-close').click(function() {
            $(this).parent()
            .fadeOut(opt.fadeTime, function() {
                $(this).remove();
            });
        });
        return this;
    };
}( jQuery ));