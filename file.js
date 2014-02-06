chrome.storage.sync.get(null,function(items){
	var ol = document.getElementById("list") ;
	for (var k in items)
	{
		var q=items[k][0],url=items[k][1];
		var li=document.createElement("li");
		li.innerHTML="<a href='http://www.quora.com"+url+"' target='_blank' url='"+url+"' >"+q+"</a> <button>Remove</button>";
		ol.appendChild(li); 
		li.childNodes[0].addEventListener('click',delete1,false);
		li.childNodes[2].addEventListener('click',remove,false);
	}
});

function delete1(e)
{
	var element=e.target ;
	chrome.storage.sync.remove(element.getAttribute("url"));
	element.parentNode.parentNode.removeChild(element.parentNode);
}

function remove(e) {
	var element = e.target ;
	chrome.storage.sync.remove(element.parentNode.childNodes[0].getAttribute("url"));
	element.parentNode.setAttribute("style", "max-height: 0;");
}
