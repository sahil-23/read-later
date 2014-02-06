
	var feed_item = document.getElementsByClassName("feed_item");

	var count = feed_item.length;
	for(var i=0;i<count;i++)
	{
		var url=feed_item[i].getElementsByClassName("timestamp")[0].getElementsByTagName('a')[0].getAttribute("href");
		if(feed_item[i].getElementsByClassName("link_text").length!=0) {
			var question=feed_item[i].getElementsByClassName("link_text")[0].lastChild.nodeValue;
			var tag=feed_item[i].getElementsByClassName("row item_action_bar")[0];
		}
		else {
			var question = feed_item[i].getElementsByClassName("board_item_title")[0].getElementsByTagName("strong")[0].firstChild.nodeValue;
			var tag=feed_item[i].getElementsByClassName("blog_item_actions")[0];
		}
		var bullet=document.createElement("span");
		bullet.setAttribute("class","bullet"); bullet.innerHTML=" • ";
		var read_later=document.createElement("a"); 
		read_later.setAttribute("class","share_link"); read_later.setAttribute("q",question); read_later.setAttribute("url",url); 
		read_later.setAttribute("href","#"); 
		read_later.innerHTML = "Read Later";
		tag.appendChild(bullet); tag.appendChild(read_later); 
		read_later.addEventListener('click',addToList,false);
	}


function addToList(e){
	var element=e.target; var key=element.getAttribute("url");
	var val=[element.getAttribute("q"),key];
	var pair={}; pair[key]=val; 
	chrome.storage.sync.set(pair,function (){element.firstChild.nodeValue='Added To List'; element.removeAttribute('href');});
	e.preventDefault(); element.removeEventListener('click',addToList,false); 
}