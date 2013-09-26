$(document).ready(function() {

/* Adding Items */
    $('input#add').keydown(function(event){
        if(event.keyCode==13){
            $('input#btn').trigger('click');
        }
    });
    
	$('input#btn').on('click', function(){
			event.preventDefault();
			
			/* this tests if no text or whitespace was entered */
			if(!$.trim($(this).val())){
				$('input#add').val('Item');
			}
			
			$('li#base').clone(true).appendTo('#sortable').removeAttr('id').removeClass('hidden');
			$('ul#sortable>li:last>form>span').text($('input#add').val());
			$('input#add').val("");

			var doc_height = $(document).height();
			var win_height = $(window).height();
			
			if(doc_height > win_height){
				$('div#container').css('height', 'auto');
			}
	});

/*Checkbox Strikethrough Item Text */
	$('input.check').change(function(){
		$(this).siblings('.item').toggleClass('strike');
		
		/* This pushes checked items to the bottom of the list */
		/* --This feature was removed since users found it 
		jarring when the item they were looking at moved
		
		if($(this).siblings('.item').hasClass('strike')){
			$(this).closest('li').appendTo('ul#sortable');
		}
		*/
	});
	
/* Removing Checked Items */
	$('form#remove-check').submit(function(event){
		event.preventDefault();
		$('ul#sortable li').each(function(){
			if($(this).find('.item').hasClass('strike')){
				$(this).remove();
			}
		});
	});
});