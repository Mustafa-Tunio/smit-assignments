function addpost(){
	var title = document.getElementById("title");
	var discription = document.getElementById("discription");

	if (title.value.trim() && discription.value.trim()) {

	var posts = document.getElementById("posts")

	posts.innerHTML += `<div style="background-image: url(${backGround})" class="card-body">
		<div class="cntent-title">
			<h4>${title.value}</h4>
		</div>
		<div class="content-discription">
			<p>${discription.value}</p>
		</div>
	</div>`	

	title.value = "";
	discription.value = "";
	
	}else{
		Swal.fire({
			title: 'Oops...! Please Enter title & discription',
			showClass: {
				popup: ''
			},
			hideClass: {
				popup: 'Ook'
			}
		})
	}

}

var backGround; 

function selectImage(src){
	backGround = src; 	

	var bgImage = document.getElementsByClassName('bg-image');
	for (var i = 0; i < bgImage.length; i++){
		bgImage[i].className = "bg-image"
	}

	event.target.className += " border-img"
}





  
