/* This script allows to add only digits in text field and adds comma after every 3 digits*/
jQuery('#comp').keyup(function(){
	// Remove any non digit number and add comma after every 3 digits
	jQuery(this).val(jQuery(this).val().replace(/[^0-9]+/igm,'').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
});
