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

let displayItems
const itemZone = document.getElementById("products");
const displayGen = (displayedItem) => {let newDiv = document.createElement('div')
newDiv.classList.add("item");
newDiv.innerHTML = `<a href=""> <div class="name"> ${displayedItem["name"]}</div> <img src="./assets/merchimg/${displayedItem["imgLink"]}"> <div class ="btn">View Now</div> </a>`

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
let pageItems = displayItems.slice(pageCalc - 16, pageCalc);
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


pageItems.forEach(displayedItem => displayGen(displayedItem))
}
generate()
