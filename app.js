$(document).ready(function() {
	/* Get user input */
	getItem();

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

	function addItem(){

		if(!$.trim($('#add').val())){
			$('input#add').val('Item');
		}

		$('li#base').clone(true).appendTo('#item_list').removeAttr('id').removeClass('hidden');
		$('ul#item_list>li:last>form>span').text($('input#add').val());
		$('input#add').val("");
		addDeleteButton();
	}

	function addDeleteButton(){
			$('input.check').change(function () {
	    	$(this).siblings('.item').toggleClass('strike', this.checked);
	    	$(this).closest('li').find('.delete_item').toggleClass('hidden', !this.checked);
			});
			removeItem();
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
});
