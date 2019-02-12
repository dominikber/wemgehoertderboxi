import 'bootstrap';
import mapboxgl from 'mapbox-gl';
import 'intersection-observer';
import scrollama from 'scrollama';
import '../styles/index.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'gasparesganga-jquery-loading-overlay';
import 'jquery';

console.log('Wem gehört der Boxi!');

$.LoadingOverlay("show");

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

var chapters = require('./chapters.js');

var container = document.querySelector('#scroll');
var text = container.querySelector('.scroll__text');
var steps = text.querySelectorAll('.step');

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  // add to color to current step
  response.element.classList.add('is-active');
  var stepData = response.element.getAttribute('data-step');
  map.flyTo(chapters[stepData]);
}

function handleStepExit(response) {
  // response = { element, direction, index }
  // console.log(response);
  // remove color from current step
  response.element.classList.remove('is-active');
}

function init() {
  // set random padding for different step heights (not required)
  // 1. setup the scroller with the bare-bones options
  // this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller.setup({
      step: '.scroll__text .step',
      offset: '0.5',
      debug: false,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

  // setup resize event
  window.addEventListener('resize', scroller.resize);
}
// kick things off
init();

$(window).on("resize", function() {

  // padding of steps on resizing

  steps.forEach(function(step) {
    var v = window.innerHeight / 4;
    step.style.padding = v + 'px 0px';
  });
}).resize();

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 3,
    lazyLoad: true,
    nav: true,
    margin: 10
  });
});

$(window).on("load", function() {
  // executes when complete page is fully loaded, including all frames, objects and images
  $.LoadingOverlay("hide");
});