import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFuc21laWVyMTIzIiwiYSI6ImNqcHR5MzVobDBiMG80MmxnNzdma2QyOHcifQ.JKBv5J8QEWsFP-dJpouBkQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/hansmeier123/cjr6fhtb85mfj2sjxxrjd06um',
  center: [13.459574, 52.510934],
  zoom: 17,
  bearing: 0,
  pitch: 30,
  attributionControl: false
});

export {
  map
};