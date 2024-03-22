// == Ad space ==

const adData = [
  ["zarabanner.jpg", "https://ko-fi.com/zaranerd"],
  ["becomebaby.jpg", "https://www.youtube.com/watch?v=gfiwU2f-ts4"],
  ["nq.gif", "https://mspfa.com/?s=48025&p=1"],
]

const adLink = document.getElementById("ad")
const adImg = document.getElementById("adImg")
const randomAd = adData[Math.floor(Math.random() * adData.length)]

adImg.src = "./ads/" + randomAd[0]
adLink.href = randomAd[1]

// == Page Body ==

//buttonnav
const readerButt = document.getElementById('readbutton');
const archButt = document.getElementById('archbutton');
const fanButt  = document.getElementById('fanbutton');
const beyondButt = document.getElementById('beyondbutton');
const newsButt = document.getElementById('newsbutton');

let currPage = window.location.href;

const redirect = (page) => {
	window.location.href = currPage + `${page}.html`
}

readerButt.addEventListener('click', () => redirect('newreader'));
archButt.addEventListener('click', () => redirect('archive'));
fanButt.addEventListener('click', () => redirect('fanwork'));
beyondButt.addEventListener('click', () => redirect('beyond'));
newsButt.addEventListener('click', () => redirect('news'));

