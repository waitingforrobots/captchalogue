var adimage= ['ads/zarabanner.jpg', 'ads/becomebaby.jpg', 'ads/nq.gif'];
var adlink= ['https://ko-fi.com/zaranerd', 'https://www.youtube.com/watch?v=gfiwU2f-ts4', 'https://mspfa.com/?s=48025&p=1;']
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}
var randomIdx = getRandomInt(0, adimage.length);  // assume adimage and adlink are same length
document.write('<a href=' + adlink[randomIdx] + '><img id="ad" src=' + adimage[randomIdx] + ' width=728 height=90></a>');
//document.getElementById('ad').innerHTML = adrandom;
