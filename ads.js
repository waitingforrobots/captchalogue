const adimage= ['./ads/zarabanner.jpg', './ads/becomebaby.jpg', './ads/nq.gif'];
const adlink= ['https://ko-fi.com/zaranerd', 'https://www.youtube.com/watch?v=gfiwU2f-ts4', 'https://mspfa.com/?s=48025&p=1;']

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

const randomIdx = getRandomInt(0, adimage.length);  // assume adimage and adlink are same length

const bannerHtml = '<a id="ad" href=' + adlink[randomIdx] + '><img src=' + adimage[randomIdx] + '></a>'
document.getElementById('banner').innerHTML = bannerHtml;
