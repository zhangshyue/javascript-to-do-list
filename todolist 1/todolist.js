var input = document.getElementById("userInput");
var itemList = document.querySelector("ul");
var enterButton = document.getElementById("enter");
var itemType = document.querySelector("select");
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
input.addEventListener("keypress",addItemByEnter);
enterButton.addEventListener("click",addItemByClick);


function addItemByClick(event){
	if(input.value.length>0){
		addItem();
	}
}
function addItemByEnter(event){
	if(event.keyCode===13 && input.value.length>0){
		addItem();
	}
}
function addItem(){
	var li = document.createElement("li");
	var label = document.createElement("label");
	label.appendChild(document.createTextNode(input.value));
	li.appendChild(label);
	var input1 = document.createElement("input");
	input1.type="text";
	li.appendChild(input1);

	if(itemType.value=="school"){
		li.classList.add("school");
	}else if(itemType.value=="work"){
		li.classList.add("work");
	}else if(itemType.value=="food"){
		li.classList.add("food");
	}else if(itemType.value=="sport"){
		li.classList.add("sport");
	}else if(itemType.value=="movie"){
		li.classList.add("movie");
	}else if(itemType.value=="other"){
		li.classList.add("other");
	}
	input.value = "";

	if(hour.value!="none" && minute.value!="none"){
		li.classList.add("time");
		var timelabel = document.createElement("label");
		var hourspan = document.createElement("span");
		hourspan.appendChild(document.createTextNode(hour.value));
		timelabel.appendChild(hourspan);
		timelabel.innerHTML += ":";
		var minspan = document.createElement("span");
		minspan.appendChild(document.createTextNode(minute.value));
		timelabel.appendChild(minspan);
		timelabel.classList.add("time");
		li.appendChild(timelabel);
		
		var filter = {
			acceptNode: function(node){
				return node.classList.contains("time") ?
				NodeFilter.FILTER_ACCEPT :
				NodeFilter.FILTER_SKIP;			}
		}
		var iterator = document.createNodeIterator(itemList,NodeFilter.SHOW_ELEMENT,filter,false);
		var node = iterator.nextNode();
		while (true){
			if(node==null){
				console.log("&&");
				itemList.insertBefore(li,node);
				break;
			}
			console.log(node.childNodes[2].childNodes[0].innerHTML);
			if((hour.value-0) < (node.childNodes[2].childNodes[0].innerHTML-0)){
				console.log(node.childNodes[2].innerHTML);
				itemList.insertBefore(li,node);
				break;
			}
			if((hour.value-0) == (node.childNodes[2].childNodes[0].innerHTML-0) && (minute.value-0) <= (0+node.childNodes[2].childNodes[2].innerHTML)){
				itemList.insertBefore(li,node);
				break;
				
			}
			var node = iterator.nextNode();	
		}
		
	}else {
		itemList.insertBefore(li,itemList.childNodes[0]);
	}
	hour.value = "none";
	minute.value = "none";
	itemType.value = "school";

	var btn1 = document.createElement("button");
	btn1.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn1);
	btn1.classList.add("delete");
	btn1.addEventListener("click", deleteItem);

	var btn2 = document.createElement("button");
	btn2.appendChild(document.createTextNode("Finished"));
	li.appendChild(btn2);
	btn2.addEventListener("click", finishItem);

	var btn3 = document.createElement("button");
	btn3.appendChild(document.createTextNode("Edit"));
	li.appendChild(btn3);
	btn3.addEventListener("click", editItem);


	function deleteItem(event){
		itemList.removeChild(li);
	}
	function finishItem(event){
		li.classList.add("finish");
	}
	function editItem(event){
		li.classList.add("editMode");
		input1.addEventListener("keypress",editItemByEnter);

		function editItemByEnter(event){
		if(event.keyCode===13 && input1.value.length>0){
			var newlabel = document.createElement("label");
			newlabel.appendChild(document.createTextNode(input1.value));
			li.replaceChild(newlabel,label);
			li.classList.remove("editMode");
		}
	}
	}

}