const scrollBtn = document.querySelector("#bttop");
scrollBtn.addEventListener("click", () => {
	document.body.scrollTop  = 0;
	document.documentElement.scrollTop = 0;
});
document.addEventListener("scroll",(e) => {
	if (document.documentElement.scrollTop <= 400) {
		scrollBtn.style.display = "none";
	}
	else
	{
    scrollBtn.style.display = "block";

	}
});



var data = JSON.parse(localStorage.getItem("cart"));
 var len = data.length;
    console.log(len);
    document.querySelector("#countercart").innerText = len;



	// var Redboxdata = [{
	// 	imgUrl:"https://fundamental.in/wp-content/uploads/2022/01/Short-Bannerc-3.1.1.png"
	// },{
	// 	imgUrl:"https://fundamental.in/wp-content/uploads/2022/01/Short-Bannerc-4.1.png"
	// },{
	// 	imgUrl:"https://fundamental.in/wp-content/uploads/2022/01/Short-Bannerc-5.1.png"
	// },{
	// 	imgUrl:"https://fundamental.in/wp-content/uploads/2022/01/Short-Bannerc-1.1.png"
	// },{
	// 	imgUrl:"https://fundamental.in/wp-content/uploads/2022/01/Short-Bannerc-2.1.png"
	// },{
	// 	imgUrl:"https://fundamental.in/wp-content/uploads/2022/01/Short-Bannerc-6.png"
	// }
	// ];
	
	// Redboxdata.forEach(function(el){
	// 	var div = document.createElement("div");
	// 	div.setAttribute("id","innerDiv");
		
	
	// 	var img = document.createElement("img");
	// 	img.src = el.imgUrl;
	
	// 	div.append(img);
	// 	document.querySelector("#container_shivam").append(div);
	// });