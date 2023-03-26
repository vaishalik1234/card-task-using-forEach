

let cl = console.log;



let users = [
  {
	  userId: 1,
      it: 1,
      title: "Lorem ipsum",
	  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
	  userId: 2,
      it: 2,
      title: "Where does it come from?",
	  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
	  userId: 3,
      it: 3,
      title: "Why do we use it?",
	  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  
]

let info = document.getElementById("info");


 let result = ``;
 
 users.forEach(function(user){
	 
	 result+= `
	 
					<div class="col-4">
					<div class="card-header bg-primary text-white text-center text-uppercase"> ${user.title} </div>
					
					<div class="card-body"> ${user.body} </div>
					
					<div class="card-footer bg-danger text-center">userId: ${user.userId} , it: ${user.it} </div>
					</div>
			 `
})




info.innerHTML = result;