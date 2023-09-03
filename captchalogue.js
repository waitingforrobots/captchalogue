
// == Add space ==

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