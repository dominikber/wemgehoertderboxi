mapboxgl.accessToken = 'pk.eyJ1IjoiaGFuc21laWVyMTIzIiwiYSI6ImNqcHR5MzVobDBiMG80MmxnNzdma2QyOHcifQ.JKBv5J8QEWsFP-dJpouBkQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/hansmeier123/cjr6fhtb85mfj2sjxxrjd06um',
  center: [13.459574, 52.510934],
  zoom: 17,
  bearing: 0,
  pitch: 30
});

var chapters = {
  'boxi': {
    bearing: 0,
    center: [13.459474, 52.510534],
    zoom: 17,
    pitch: 30
  },
  'boxifern': {
    duration: 6000,
    center: [13.455374, 52.510885],
    bearing: 0,
    zoom: 16,
    pitch: 10
  },
  'berlin': {
    duration: 6000,
    center: [13.445701, 52.508792],
    bearing: 0,
    zoom: 13,
    pitch: 0
  }
};

// On every scroll event, check which element is on screen
window.onscroll = function() {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    }
  }
};

var activeChapterName = 'boxi';

function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}