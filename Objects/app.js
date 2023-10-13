

// Obeject is collection of data
// var student ={} => how create a obejct
// name : "Mustafa", => properties and its value

// var student = {
// 	name: "Ghulam Mustafa",
// 	email: "gmustafa@gmail.com",
// 	phone: 3313408302,
// 	enrolled: true
// }


// show all object data
//* console.log(student);

// show only property value
//* console.log(student.name);
//* console.log(student.email);


// in bject how to add new property 
// student is obeject name and .class is peroperty and = "WAM", is its perperty value. 
// in object add new perperty but in last 
// ager obect empty he to b add ho ho jae ga 
// agr obecjt mn phile se he peroperty add he to use peroperty k value change kar k new value update kar dega.

// student.class = "WAM",
// console.log(student);

// object mn se peroperty delete karna delete ka keyword use kar k object name or .peroperty.

// delete student.name
// delete student.email

// console.log(student);


// obeject k under ek or object add karna
// ye kaise hoga main object-name ab kis property name ya new obejct name us k baat us k under object k peroperty and us k values

// student.clas ={
// 	name: "WAM",
// 	time: "9 - 11"
// }
// student.clas.subject = {
// 	subName: "Math",
// 	time: "5-5"
// }

// console.log(student);


// how to add arry in objects 

// student.subject = ["HTNL", "CSS", "JS"];

// console.log(student); => print only obeject
// console.log(student.subject); => print only object peroperty and its value
// console.log(student.subject[2]) => print objects propertyand its ary value on index no


// In object under the array ho to add in new value in object array
// object name array peropertyname and push(""); 

// student.subject = ["HTNL", "CSS", "JS"];
// student.subject.push("React")
// console.log(student);


// check property  in object method is in 

// console.log("school" in student);


// get data form obejcts in peropeerty values
 
// var carBrand ={
// 	honda:{
// 		civic:{
// 			reborn:{
// 				image:"",
// 				name: "reborn",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			}
// 		},
// 		city:{
// 			city2007:{
// 				image:"",
// 				name: "city2007",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			}
// 		}

// 	},
// 	toyota:{
// 		carola:{
// 			gli:{
// 				image:"",
// 				name: "glic",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			},
// 			Xli:{
// 				image:"",
// 				name: "Xlic",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			}
// 		},
// 		induscarola:{
// 			indusone:{
// 				image:"",
// 				name: "glic",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			},
// 			industwo:{
// 				image:"",
// 				name: "glic",
// 				model: 2020,
// 				gets: 4,
// 				wheels: 5,
// 				colors: ["black", "red", "blue", "White"],
// 				price: 450000,
// 			}
// 		}
// 	}
	
// }

// var user = "honda"
// var model = "civic"

// for(var company in carBrand){
// 	for(var model in carBrand[company]){
// 		for(variant in carBrand[company][model]){
// 			console.log(carBrand[company][model][variant]);
// 		}
// 	}
	
// }

// var user = "honda"
// var model = "civic"

// console.log(carBrand[user][model]) 

// get all data form objects 
// in javascript object ka ek loop hota he or ye jub tak chale jitne objects k under jitne key pari he tab tak chale ga
// key means property name 

// for(var company in carBrand){
// 	for(var model in carBrand[company]){
// 		for(var variant in carBrand[company][model]){
// 			console.log(carBrand[company][model][variant].name);
// 		}
// 	}
// }





var carVariants ={
	honda:{
		civic:{
			civic:{
				image:"",
				name: "civic",
				model: 2020,
				gets: 4,
				wheels: 5,
				colors: ["black", "red", "White"],
				price: 450000,
			}
		},
		city:{
			city:{
				image:"",
				name: "city",
				model: 2020,
				gets: 4,
				wheels: 5,
				colors: ["black", "red", "White"],
				price: 450000,
			}
		}

	},
	toyota:{
		carola:{
			gli:{
				image:"",
				name: "glic",
				model: 2020,
				gets: 4,
				wheels: 5,
				colors: ["black", "red", "White"],
				price: 450000,
			},
			Xli:{
				image:"",
				name: "Xlic",
				model: 2020,
				gets: 4,
				wheels: 5,
				colors: ["black", "red", "White"],
				price: 450000,
			}
		},
		Yaris:{
			yaris:{
				image:"",
				name: "Yaris",
				model: 2020,
				gets: 4,
				wheels: 5,
				colors: ["black", "red", "White"],
				price: 450000,
			},
			yariscross:{
				image:"",
				name: "Yaris Cross",
				model: 2020,
				gets: 4,
				wheels: 5,
				colors: ["black", "red", "White"],
				price: 450000,
			}
		}
	}
	
}


var company = document.getElementById("company");
var brand = document.getElementById("brand");
var allCars = document.getElementById("allCars");

company.innerHTML = `<option value="">Select Company</option>`
brand.innerHTML = `<option value="">Select Brand</option>`

for(var key in carVariants){
	company.innerHTML +=`
	<option value="${key}">${key.toUpperCase()}</option>
	`
	for(var key1 in carVariants[key]){
		for(var key2 in carVariants[key][key1])

		allCars.innerHTML += `
		<div class="col-md-4">
			<div class="result-box">
				<h3>${carVariants[key][key1][key2].name}</h3>
				<h4>${carVariants[key][key1][key2].model}</h4>
				<p>${carVariants[key][key1][key2].gets}</p>
				<p>${carVariants[key][key1][key2].wheels}</p>
				<h5>${carVariants[key][key1][key2].colors}</h5>
				<h6>${carVariants[key][key1][key2].price}</h6>
			</div>
		</div>`
	}
}

function onCompanyChange(){
	brand.innerHTML = ""
	brand.innerHTML = `<option value="">Select Brand</option>`
	for(var key in carVariants[company.value]){
		brand.innerHTML +=`
		<option value="${key}">${key.toUpperCase()}</option>
		`
	}
}


function filterCars(){

	var carData = carVariants[company.value][brand.value]

	allCars.innerHTML = `
		<div class="col-md-4">
			<div class="result-box">
				<h3>${carData.name}</h3>
				<h4>${carData.model}</h4>
				<p>${carData.gets}</p>
				<p>${carData.wheels}</p>
				<h5>${carData.colors}</h5>
				<h6>${carData.price}</h6>
			</div>
		</div>
		`

console.log(carData)
}

