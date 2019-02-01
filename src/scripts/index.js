import 'bootstrap';
import mapboxgl from 'mapbox-gl';
import 'intersection-observer';
import scrollama from 'scrollama';

import '../styles/index.scss';

import 'intersection-observer';
import scrollama from 'scrollama';

console.log('start index.js');

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

var container = document.querySelector('#scroll');
var text = container.querySelector('.scroll__text');
var steps = text.querySelectorAll('.step');

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  // console.log(response);
  // add to color to current step
  response.element.classList.add('is-active');
  var stepData = response.element.getAttribute('data-step');
  console.log(stepData);
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
  steps.forEach(function(step) {
    var v = 100 + Math.floor(Math.random() * window.innerHeight / 4);
    step.style.padding = v + 'px 0px';
  });

  // 1. setup the scroller with the bare-bones options
  // this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller.setup({
      step: '.scroll__text .step',
      offset: '0.5',
      debug: true,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

  // setup resize event
  window.addEventListener('resize', scroller.resize);
}

// kick things off
init();