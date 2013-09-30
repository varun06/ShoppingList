$(document).ready(function() {

	getItem();

	/* Get user input and call addItem function*/
	function getItem(){
    $('input#add').keydown(function(event){
        if(event.keyCode==13){
        	var val = $('#add').val();
        	if (val){ //Add only if we have a value
        		addItem();
        	}
        }
    });
  }

  // This function add the items to list
	function addItem(){

		if(!$.trim($('#add').val())){
			$('input#add').val('Item');
		}

		$('li#base').clone(true).appendTo('#item_list').removeAttr('id').removeClass('hidden');
		$('ul#item_list>li:last>form>span').text($('input#add').val());
		$('input#add').val(""); //set the text field to blank
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
			$('ul#item_list li').each(function(){
				if($(this).find('.item').hasClass('strike')){
					$(this).remove();
				}
			});
		});
	}
}); // end here