let light1=document.querySelector("#lightMode")
console.log(light1)
let dark1=document.querySelector("#darkMode")
console.log(dark1)
let body=document.querySelector("body")

light1.addEventListener("click", function(event){
	body.style.backgroundColor="white",
	body.style.color="black"
})
dark1.addEventListener("click", function(event){
	body.style.backgroundColor="black",
	body.style.color="white"
})
 let img1= document.querySelector("#crime101")
console.log(img1)

img1.addEventListener("mouseover", function(event){
	img1.src= "random/image1111.jpg";
})
img1.addEventListener("mouseout", function(event){
	img1.src="info/img1.jpg";
})

 let img2= document.querySelector("#crime1010")
console.log(img2) 
img2.addEventListener("mouseover", function(event){
	img2.src= "random/image22.jpg";
})
img2.addEventListener("mouseout", function(event){
	img2.src="info/img2.jpg"
})


let img3= document.querySelector("#crime10101")
console.log(img3)
img3.addEventListener("mouseover", function(event){
	img3.src= "random/image33.jpg";
})
img3.addEventListener("mouseout", function(event){
	img3.src="info/img3.jpg"
})

