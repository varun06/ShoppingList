$(document).ready(function() {
	$('.delete_item').hide();
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

			$('li#base').clone(true).appendTo('#item_list').removeAttr('id').removeClass('hidden');
			$('ul#item_list>li:last>form>span').text($('input#add').val());
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
		// $('.delete_item').show();
		$('.delete_item').css('display', 'block');
	});

// Remove list item when button is clicked
	$('.delete_item').on('click', function(){
			$('ul#item_list li').each(function(){
			if($(this).find('.item').hasClass('strike')){
				$(this).remove();
			}
		});
	});

/* Removing Checked Items */
	// $('form#remove-item').submit(function(event){
	// 	event.preventDefault();
	// 	$('ul#item_list li').each(function(){
	// 		if($(this).find('.item').hasClass('strike')){
	// 			$(this).remove();
	// 		}
	// 	});
	// });
});