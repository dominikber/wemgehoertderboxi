import 'gasparesganga-jquery-loading-overlay';
$.LoadingOverlay("show");

import 'bootstrap';
import mapboxgl from 'mapbox-gl';
import 'intersection-observer';
import scrollama from 'scrollama';
import '../styles/index.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'jquery';
import './carousel.js';
import 'bootstrap-autohidingnavbar';
import {
  map
} from './mapboxConfig.js';
import {
  positions,
  addPopularTimesLayer,
  updatePopularTimesMarkers,
  removePopularTimesLayer
} from './chapters.js';
console.log('Wem gehört der Boxi!');




var container = document.querySelector('#scroll');
var text = container.querySelector('.scroll__text');
var steps = text.querySelectorAll('.step');

// initialize the scrollama
var scroller = scrollama();


// addPopularTimesLayer(map);

// Layer toggler



// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  // add to color to current step
  response.element.classList.add('is-active');
  var stepData = response.element.getAttribute('data-step');
  map.flyTo(positions[stepData]);

  // if (response.element.id === 'boxi') {
  //
  //   map.setLayoutProperty('popularTimes', 'visibility', 'visible');
  //
  // } else {
  //   map.setLayoutProperty('popularTimes', 'visibility', 'none');
  // }


  map.setLayoutProperty(stepData, 'visibility', 'visible');

}




function handleStepProgress(progress) {
  let stepProgress = progress.progress;
  // updatePopularTimesMarkers(map, stepProgress);
}

function handleStepExit(response) {
  // response = { element, direction, index }
  response.element.classList.remove('is-active');

  map.setLayoutProperty(response.element.getAttribute('data-step'), 'visibility', 'none');
}

function init() {
  scroller.setup({
      step: '.scroll__text .step',
      offset: '0.5',
      debug: false,
      progress: true
    })
    .onStepEnter(handleStepEnter)
    .onStepProgress(handleStepProgress)
    .onStepExit(handleStepExit);

  // setup resize event
  window.addEventListener('resize', scroller.resize);
}
// kick things off
init();

// $(window).on("load", function() {
//
//   // padding of steps on resizing
//   steps.forEach(function(step) {
//     var v = window.innerHeight / 6;
//     step.style.padding = v + 'px 0px';
//   });
// }).resize();

$.LoadingOverlay("hide");
$("#mainnav").autoHidingNavbar({
  // see next for specifications
});

$(window).on("load", function() {
  // executes when complete page is fully loaded, including all frames, objects and images
});