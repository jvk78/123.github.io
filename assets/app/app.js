const scrWraper = document.getElementById('scr__wrapper');
const mapWraper = document.getElementById('map__wrapper');
const openMap = document.getElementById('open__map');
const openMapSm = document.getElementById('open__map-small');
const video = document.getElementById('media__video');
const play = document.getElementById('play__video');


// let tag = document.createElement('script'),
//     firstScriptTag = document.getElementsByTagName('script')[0],
//     player;




/* -=Create Video=- */
// tag.src = "https://www.youtube.com/iframe_api";
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('video', {
//     width: '560',
//     height: '315',
//     videoId: 'owvzQaJN1N8',
//     events: {'onReady': onPlayerReady}
//   });
// }
// const onPlayerReady = (event) => {
  unction playVideo() {
  play.onclick = function() {
       play.style.opacity = '0';
    }
}
// }













//const playVideo = () => {
//  play.addEventListener('click', () => {
//       play.style.opacity = '0';
//    }
//)}
//   
//playVideo();
    
    
    
    
//    var tag = document.createElement('script'),
//    firstScriptTag = document.getElementsByTagName('script')[0],
//    player;
//
//tag.src = "https://www.youtube.com/iframe_api";
//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);





/* -=Create Map=- */
var map;

function createMap() {
DG.then(function () {
  map = DG.map('map', {
    center: [43.25806, 76.94946],
    fullscreenControl: false,
    zoom: 15
  });
  myIcon = DG.icon({
    iconUrl: 'assets/img/mareven_checkin.png',
    iconSize: [35, 35]
  });
  DG.marker([43.25806, 76.94946], {
    icon: myIcon}).addTo(map)
    .bindLabel('Маревен Фуд Тянь-Шань', {
    
  })
    .bindPopup('<b>Маревен Фуд Тянь-Шань</b><br>050000,&nbsp;Республика&nbsp;Казахстан, г.&nbsp;Алматы,&nbsp;ул.&nbsp;Кунаева,&nbsp;д.77,<br>Бизнес&nbsp;центр&nbsp;«Parkview&nbsp;Office&nbsp;Tower», 6&nbsp;этаж,&nbsp;офис&nbsp;№13<br>+7&nbsp;(727)&nbsp;321-11-19')
  });
}

function showMap(btn) {
  btn.onclick = function() {
    mapWraper.innerHTML = '<div class="map" id="map"><div class="cls__btn" id="cls__btn"></div></div>';
    createMap();
    mapWraper.style.transform = 'scale(1)';
    mapWraper.style.opacity = '1';
    document.getElementById('cls__btn').onclick = function() {
      mapWraper.style.transform = 'scale(0)';
      mapWraper.style.opacity = '0';
      setTimeout(function(){
      mapWraper.innerHTML = '';
      }, 500)
    }
  }
} 

showMap(openMap);
showMap(openMapSm);


//var tag = document.createElement('script'),
//    firstScriptTag = document.getElementsByTagName('script')[0],
//    player;
//
//tag.src = "https://www.youtube.com/iframe_api";
//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//function onYouTubeIframeAPIReady() {
//  player = new YT.Player('video', {
//    width: '560',
//    height: '315',
//    videoId: 'owvzQaJN1N8',
//    events: {
//      'onReady': onPlayerReady
//    }
//  });
//}
//function onPlayerReady(event) {
//    event.target.playVideo();
//  }











