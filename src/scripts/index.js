import 'gasparesganga-jquery-loading-overlay';
$.LoadingOverlay("show");
import scrollama from 'scrollama';
import 'intersection-observer';
import '../styles/index.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'jquery';
import './carousel.js';
import 'bootstrap';
import 'bootstrap-autohidingnavbar';
import mapboxgl from 'mapbox-gl';
import {
  map
} from './mapboxConfig.js';
import {
  positions
} from './chapters.js';
import {
  renderFassadenSlides
} from './fassaden.js';
console.log('Wem gehört der Boxi!');

const container = document.querySelector('#scroll');
const text = container.querySelector('.scroll__text');
const steps = text.querySelectorAll('.step');

// initialize the scrollama
const scroller = scrollama();

let fotoLayers = ["straubemap", "vorwerk-boxhagen", "berlin1802", "berlin1937", "berlin1966", "ddr-map", "rueckuebertragung"];
let mapLayers = ["world", "verschiedene", "landberlin", "gbr", "Gmbh", "privatbesitzer", "padoamboxi", "geartner", "grueni"];
let circleLayers = ["padovicz"];
let initLayer = "vorwerk-boxhagen";

// addPopularTimesLayer(map);

function toggleLayerTo(layerName, opacity) {
  if (mapLayers.includes(layerName)) {
    map.setPaintProperty(layerName, 'fill-opacity', opacity);
  } else if (fotoLayers.includes(layerName)) {
    map.setPaintProperty(layerName, 'raster-opacity', opacity);
  } else if (circleLayers.includes(layerName)) {
    map.setPaintProperty(layerName, 'circle-opacity', opacity);
  }
};

function handleStepEnter(response) {
  response.element.classList.add('is-active');
  // fly to position
  if (response.element.hasAttribute('map-position')) {
    let dataStep = response.element.getAttribute('map-position');
    map.flyTo(positions[dataStep]);
  }
  // show map layers
  if (response.element.hasAttribute('map-layer')) {
    let mapLayer = response.element.getAttribute('map-layer');
    toggleLayerTo(mapLayer, 1);
  }

  if (response.element.hasAttribute('besitzer')) {
    let besitzerlayer = ["verschiedene", "landberlin", "gbr", "Gmbh", "privatbesitzer"];
    for (let types of besitzerlayer) {
      toggleLayerTo(types, 1);
    }
  }

}

function handleStepProgress(progress) {
  // let stepProgress = progress.progress;
}

function handleStepExit(response) {
  // response = { element, direction, index }
  response.element.classList.remove('is-active');
  if (response.element.hasAttribute('map-layer')) {
    let mapLayer = response.element.getAttribute('map-layer');
    toggleLayerTo(mapLayer, 0);
  }


  if (response.element.hasAttribute('besitzer')) {
    let besitzerlayer = ["verschiedene", "landberlin", "gbr", "Gmbh", "privatbesitzer"];
    for (let types of besitzerlayer) {
      toggleLayerTo(types, 0);
    }
  }
}

function init() {
  scroller.setup({
      step: '.scroll__text .step',
      offset: '0.6',
      debug: false,
      progress: false
    })
    .onStepEnter(handleStepEnter)
    .onStepProgress(handleStepProgress)
    .onStepExit(handleStepExit);

  // setup resize event
  window.addEventListener('resize', scroller.resize);
}
// kick things off
init();

renderFassadenSlides();

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
  toggleLayerTo("vorwerg-boxhagen", 1);
});