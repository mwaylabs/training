cordova.define("org.apache.cordova.plugins.WaitingDialog", function(require, exports, module) {

var exec = require('cordova/exec')
	
function WaitingDialog() {
}

WaitingDialog.prototype.show = function(text) {
	var t = text || "default text";
	alert('function called');
	exec(null, null, "WaitingDialog", "show", [t]);
}

WaitingDialog.prototype.hide = function() {
	exec(null, null, "WaitingDialog", "hide", []);
}
var wd = new WaitingDialog()
module.exports = wd;
});