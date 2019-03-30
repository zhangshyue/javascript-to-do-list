$(document).ready(
	function(){
	var index = 0;
	$('.add-btn').click(function(){
		var item_value = $('#itemValue').val();
		var item_type = $('.itemType').val();
		html = ''
		if (item_value!=''){
			var html = `<li class="">
		      <div class="row">
		      	<div class="type col-md-1"></div>
		        <div class="col-md-6 unindex">
		          <label>
		          	${item_value}
		          </label>
		        </div>
		        <div class="btn-group col-md-4" role="group">
		          <button type="button" class="btn btn-secondary finished-btn"><span>Finished</span></button>
		          <button type="button" class="btn btn-secondary delete-btn">Delete</button>
		          <button type="button" class="btn btn-secondary modify-btn">Modify</button>
		        </div>
		      </div>
		     </li>`
		     $(html).hide().appendTo('#itemList').fadeIn(600);
			if (item_type ==='school'){;
				$('li .row .unindex').addClass(index.toString());
				$('.'+index.toString()).removeClass('unindex');
				$('.'+index.toString()).parent().children(':first').css("background-color", "#e5f4fc");	
			}
			if (item_type ==='work'){;
				$('li .row .unindex').addClass(index.toString());
				$('.'+index.toString()).removeClass('unindex');
				$('.'+index.toString()).parent().children(':first').css("background-color", "#e6f7d4");			
			}
			if (item_type ==='food'){;
				$('li .row .unindex').addClass(index.toString());
				$('.'+index.toString()).removeClass('unindex');
				$('.'+index.toString()).parent().children(':first').css("background-color", "#f9f4db");	
			}
			if (item_type ==='sport'){;
				$('li .row .unindex').addClass(index.toString());
				$('.'+index.toString()).removeClass('unindex');
				$('.'+index.toString()).parent().children(':first').css("background-color", "#fff0ea");	
			}
			if (item_type ==='leisure'){;
				$('li .row .unindex').addClass(index.toString());
				$('.'+index.toString()).removeClass('unindex');
				$('.'+index.toString()).parent().children(':first').css("background-color", "#edeaff");	
			}
			if (item_type ==='other'){;
				$('li .row .unindex').addClass(index.toString());
				$('.'+index.toString()).removeClass('unindex');
				$('.'+index.toString()).parent().children(':first').css("background-color", "#ffeafe");	
			}
			$('#itemValue').val('').attr('placeholder', 'Add item...');
			$('.itemType').val('school');
			$('.clear-btn').removeClass('hidden');
			$('.clear-btn').click(function(){
				$('#itemList').children().fadeOut(600);
			})
			$('.delete-btn').click(function(){
				$(this).parent().parent().fadeOut(600);
			})
			$('.finished-btn').click(function(){
				$(this).parent().parent().children(":nth-child(2)").addClass('finished');
				$(this).parent().parent().children("first").css('background-color','transparent');
				
			})
			$('.modify-btn').off().on('click',function(){
				console.log('click');
				$(this).parent().parent().children(":nth-child(2)").empty();
				$(this).parent().parent().children(":nth-child(2)").append(`
					<input class=" modify" type="text" placeholder="Modify here and after modification press Enter">
					`)
				$(this).parent().parent().children(":nth-child(2)").on('keypress',function(e) {
				    if(e.which == 13) {
				    	
				        var modified_item = $(this).children(':first').val();
				        console.log(modified_item);
				        $(this).empty();
				        $(this).append(`
				        	<label>`+modified_item+`</label>
				        	`)
				        console.log(modified_item+ '%');
				    }
				});
			});
			index += 1;

		}
	})
	$('#itemList').sortable();
});