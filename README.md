# iao alert
Most flexible Jquery alert plugin with maximum number of customizations available.

## Meta Data
**Plugin Name**: iao alert<br />
        **Key**: iao-alert<br />
    **Version**: 1.0.7<br />
     **Author**: Prashant Kapoor<br />
    **Website**: http://itsallonly.github.io/iao-alert<br />
       **Repo**: https://github.com/Itsallonly/iao-alert<br />
     **Issues**: https://github.com/Itsallonly/iao-alert/issues<br />
      **Files**: iao-alert.jquery.js, iao-alert.css<br />
 **Dependency**: Jquery<br />


## Use
Alert can be invoked in two ways:<br />
1.`$.iaoAlert({
			msg: "This is demo iao alert message."
		});`<br />
2.`$.fn.iaoAlert({msg: "This is demo iao alert message."});`<br />

## Customization
### 4 type of alerts can be made:<br />
- 'success'<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success"
	});`
- 'error'<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "error"
	});`
- 'warning'<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "warning"
	});`
- 'notification'<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "notification"
	});`

_NOTE: The Default alert type is "notification"_

### 2 modes of designs in iao alerts:<br />
- 'dark'<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark"
	});`
- 'light'<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "light"
	});`

_NOTE: The Default alert mode is "light"_

### Disable auto hide:<br />
By default iao alert hide automatically after a few seconds to disable that use autoHide : false -<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: false
	});`

### Change alert display time:<br />
By defalt iao alert display time is '3 seconds(3000 milliseconds)', it can be changed with 'alertTime' -<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000"
	});`

### Change alert fade out time:<br />
By defalt iao alert fade out time is '500 milliseconds', it can be changed with 'fadeTime' -<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000",
		fadeTime: "1000"
	});`

_NOTE: If fadeTime is set to 0 then it fadeout effect will not be visible._

### Remove Close button:<br />
iao alert has close button in right to hide alert message on click, it can be disabled with 'closeButton: false'-<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000",
		fadeTime: "1000",
		closeButton: false
	});`

### Close alert on click:<br />
iao alert can be closed when clicked on it using 'closeOnClick: true', by default it is set to false-<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000",
		fadeTime: "1000",
		closeButton: false,
		closeOnClick: true
	});`

### Fade alert message on hover:<br />
It appears nice to have a hover effect, it can be used in iao alert with 'fadeOnHover: true'-<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000",
		fadeTime: "1000",
		closeButton: false,
		closeOnClick: true,
		fadeOnHover: true
	});`

### Positioning
BY default iao alert message display on the top right corner of screen, it can be shown in 4 positions on screen<br />
- 'top-right'<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000",
		fadeTime: "1000",
		closeButton: false,
		closeOnClick: true,
		fadeOnHover: true,
		position: "top-right"
	});`
- 'top-left'<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000",
		fadeTime: "1000",
		closeButton: false,
		closeOnClick: true,
		fadeOnHover: true,
		position: "top-left"
	});`
- 'bottom-right'<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000",
		fadeTime: "1000",
		closeButton: false,
		closeOnClick: true,
		fadeOnHover: true,
		position: "bottom-right"
	});`
- 'bottom-left'<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000",
		fadeTime: "1000",
		closeButton: false,
		closeOnClick: true,
		fadeOnHover: true,
		position: "bottom-left"
	});`
### Layering (z-index)
BY default iao alert message has the z-index value 999 i.e. standard to bring it to top, still if doesn't come on the top layer of screen custom z-index can be passed using zIndex<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000",
		fadeTime: "1000",
		closeButton: false,
		closeOnClick: true,
		fadeOnHover: true,
		position: "top-right",
		zIndex: "1000"
	});`
### Rounded Corners
BY default iao alert message has sharp corners, it can be made to have rounded corners by setting 'roundedCorners' to true<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000",
		fadeTime: "1000",
		closeButton: false,
		closeOnClick: true,
		fadeOnHover: true,
		position: "top-right",
		zIndex: "1000"
	});`
### Rounded Corners
BY default iao alert message don't use class attribute, a class can be added by setting 'alertClass' to any custom class<br />
_SYNTAX_ -<br />
	`$.iaoAlert({
		msg: "This is demo iao alert message.",
		type: "success",
		mode: "dark",
		autoHide: true,
		alertTime: "5000",
		fadeTime: "1000",
		closeButton: false,
		closeOnClick: true,
		fadeOnHover: true,
		position: "top-right",
		zIndex: "1000",
		alertClass: "alert-class"
	});`
