$(document).ready(function() {
  getItem();


	/* Get user input and call addItem function*/
	function getItem(){
    var add = "#add";
    $(add).keydown(function(event){
        if(event.keyCode==13){
        	var val = $.trim($(add).val());
        	if (val){ //Add only if we have a value
        		addItem();
        	}
        }
    });
  }

  // This function add the items to list
	function addItem(){
		var color = ["#b00b00", "#de1e7e", "#e1e100", "#BADA55", "#F0FEAF", "#ac1d1c", "#facade", "#c0ffee", "#defec8", "#deface", "#a55"];

		$('li#base').clone(true).appendTo('#item_list').removeAttr('id').removeClass('hidden');
		$('ul#item_list>li:last>span').text($(add).val());
		$('ul#item_list>li:last').css('background', color[Math.round((Math.random()) * 10)]);
		$(add).val(""); //set the text field to blank
		addDeleteButton(); //Call addDeleteButton
	}

	// This function adds a delete button when user check the checkbox
	function addDeleteButton(){
			$('input.check').change(function () {
	   	$(this).siblings('.item').toggleClass('strike', this.checked);
	   	$(this).closest('li').find('.delete_item').toggleClass('hidden', !this.checked);
		});
		removeItem(); //Call removeItem function
	}

	// Remove list item when button is clicked
	function removeItem(){
		$('.delete_item').on('click', function(){
			$(this).closest('li').fadeOut('slow');
		});
	}
}); // end here