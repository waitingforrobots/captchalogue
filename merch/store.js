let pageItems
// lightbox stuff 
const lightbox = document.getElementById("lightbox");
lightbox.style.display = "none";
const lightboxName = document.getElementById("prodName");
const lightboxArtist = document.getElementById("prodArtist");
const lightboxInfo = document.getElementById("infoBox");
const lightboxTiny = document.getElementById("tinyInd");
const lightboxClose = document.getElementById("lbClose");
const lightboxImg = document.getElementById("prodImage");
const lbNext = document.getElementById("lbarrowRight");
const lbPrev = document.getElementById("lbarrowLeft");
const caroSmall = document.getElementById("carousel");
const lbAnth = document.getElementById ("anthArtist")
lightboxClose.onclick = () => lightbox.style.display = "none";
// unlightbox
let species = false;
async function getData() {
  const response = await fetch('merch.json');

  return response.json();
}

const merchItems = await getData();
let pageNumber = 0; //change

//button stuff

let displayMode
const fineryButt = document.getElementById('finery');
const parchButt = document.getElementById('parchments');
const toyButt = document.getElementById('toys');
const trinkButt = document.getElementById('trinkets');
const nextButt = document.getElementById('next');
const prevButt = document.getElementById('previous');
const resetButt = document.getElementById('reset')

fineryButt.onclick = () => {
	displayMode = 'finery';
	pageNumber = 0;
	species = false;
	generate()};
parchButt.onclick = () => {
	displayMode = 'parchment';
	pageNumber = 0;
	species = false;
	generate()};
toyButt.onclick = () => {
	displayMode = 'toys';
	pageNumber = 0;
	species = false;
	generate()};
trinkButt.onclick = () => {
	displayMode = 'trinket';
	pageNumber = 0;
	species = false;
	generate()};
nextButt.onclick = () => {
	pageNumber += 1;
	generate()
}
prevButt.onclick = () => {
	pageNumber -= 1;
	generate()
}
resetButt.onclick = () => {
	pageNumber = 0;
	displayMode = 0;
	generate()
}
//more lightbox
const carouselGen = (currClick) => {
	let pagenum = 0
	let imgArray = currClick["imgLink"]
	let anthArray = currClick["anthPage"]
	if (currClick["anthology"] === true) {
		imgArray = []
		anthArray.forEach((value) => {
			let imgCurr = value["imgLink"];
			imgArray.push(imgCurr)
		})
	}
	const mainGen = () => {
		lbAnth.innerHTML =""
		if (currClick["anthology"] === true) {
			let anthName = document.createElement('div')
			anthName.id = "anthName"
			anthName.innerHTML = `<h1>${anthArray[pagenum]["name"]} by&nbsp;</h1><h1><a href="${anthArray[pagenum]["artistLink"]}">${anthArray[pagenum]["artist"]}</a></h1>`
			lbAnth.appendChild(anthName)
		}
		prodImg.src = `assets/merchimg/${imgArray[pagenum]}`
	};
	lbPrev.onclick = () => {
		if (pagenum === 0) {
			return
		} else {
			pagenum -= 1
			mainGen()
			};
		};
	lbNext.onclick = () => {
		if (pagenum === imgArray.length - 1 ) {
			return
		} else {
			pagenum += 1
			mainGen()
			};
		};
	mainGen()
	imgArray.forEach((imgLinky, index) => {
		let newCaro = document.createElement('img')
		newCaro.src = `assets/merchimg/${imgLinky}`
		newCaro.onclick = () => {
			pagenum = index
			mainGen()
		}
		caroSmall.appendChild(newCaro)
	})
}


const lightboxGen = (index) => {
	lightbox.style.display = "flex";
	caroSmall.innerHTML = ""
	let currClick = pageItems[index];
	prodName.innerHTML = currClick["name"] + " by&nbsp;";
	prodArtist.innerHTML = currClick["artist"];
	prodArtist.href = currClick["artistLink"];
	let imgArray
	if (currClick["hires"] === true) {
		lightboxTiny.style.display = "none";
		}else {
		lightboxTiny.style.display = "flex";
	};
	if (currClick["info"]) {
		lightboxInfo.style.display="flex";
		lightboxInfo.innerHTML = `<p class="fancytext">${currClick["info"]}</p>`
		}else {
		lightboxInfo.style.display = "none";
		};
	carouselGen(currClick)

};

//unlightbox again
let displayItems
const itemZone = document.getElementById("products");
const displayGen = (value, index) => {let newDiv = document.createElement('div')
newDiv.classList.add("item");
newDiv.innerHTML = `<div class="name"> ${value["name"]}</div> <img src="./assets/merchimg/${value["imgLink"][0]}"> <div class ="btn">View Now</div>`;
newDiv.onclick = () => {lightboxGen(index)};
itemZone.appendChild(newDiv)}

const generate = () => {
itemZone.innerHTML = ''
resetButt.hidden = true;
const pageCalc = (pageNumber + 1) * 16; 	
if (displayMode && species) {
	displayItems = merchItems.filter(item => item["species"] === displayMode);
	resetButt.hidden = false;
} else if (displayMode) {
	displayItems = merchItems.filter(item => item["genus"] === displayMode);
	resetButt.hidden = false;
} else { 
	displayItems = merchItems;
}
pageItems = displayItems.slice(pageCalc - 16, pageCalc);
if (pageNumber === 0) {
	prevButt.hidden = true;
}else {
	prevButt.hidden = false;
}
if (displayItems.slice(pageCalc -1, pageCalc).length === 1) {
	nextButt.hidden = false;
}else {
	nextButt.hidden = true;
}
pageItems.forEach(displayGen)
};

generate();
//more lightbox stuff

