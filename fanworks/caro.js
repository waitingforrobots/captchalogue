const caroContent = document.getElementById("caroContent");
const caroChildren = caroContent.getElementsByClassName('fancybox');
const leftArrow = document.getElementById('lbarrowLeft');
const rightArrow = document.getElementById("lbarrowRight");
let currCaro = 0;
let lastChild = caroChildren.item(0)
console.log(caroChildren.length);
leftArrow.onclick = () => {
	if (currCaro != 0) {
		console.log('sup');
		currCaro -= 1;
		generate();
	};
};
rightArrow.onclick = () => {
	if (currCaro + 1 != caroChildren.length) {
		console.log(currCaro);
		currCaro += 1;
		generate();
	}else {
		return
	}
}
function generate() {
	function getLastChild() {
		return caroChildren.item(currCaro)
	};
	lastChild.style.display = 'none'
	caroChildren.item(currCaro).style.display = 'flex';
	lastChild = getLastChild()
	console.log(lastChild)
}
leftArrow.style.color = 'red';
generate();


