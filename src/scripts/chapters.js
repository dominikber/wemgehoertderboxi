let positions = {
  'ownershiptoday': {
    duration: 1000,
    bearing: 0,
    center: [13.460, 52.511],
    zoom: 16.5,
    pitch: 0
  },
  'boxifern': {
    duration: 1000,
    center: [13.455374, 52.510885],
    bearing: 0,
    zoom: 16,
    pitch: 10
  },
  'berlin': {
    duration: 1000,
    center: [13.445701, 52.508792],
    bearing: 0,
    zoom: 13,
    pitch: 0
  },
  'ddr-map': {
    duration: 1000,
    bearing: 0,
    center: [13.460, 52.511],
    zoom: 16.08,
    speed: 0.2,
    pitch: 0
  },
  'berlin1937': {
    duration: 1000,
    bearing: 0,
    center: [13.461, 52.512],
    zoom: 14.03,
    speed: 0.2,
    pitch: 0
  },
  'vorwerk-boxhagen': {
    duration: 1000,
    center: [13.468, 52.507],
    speed: 0.2,
    bearing: 0,
    zoom: 13.91,
    pitch: 0
  },
  'straubemap': {
    duration: 1000,
    center: [13.460, 52.511],
    bearing: 0,
    speed: 0.2,
    zoom: 16,
    pitch: 0
  },
  '1990': {
    duration: 1000,
    bearing: 0,
    center: [13.463, 52.511],
    zoom: 14,
    speed: 0.2,
    pitch: 0
  },
  'world': {
    duration: 1000,
    center: [34.827, 38.050],
    bearing: 0,
    zoom: 1.38,
    pitch: 0
  },
  'grueni': {
    duration: 1000,
    center: [13.460, 52.511],
    bearing: 0,
    zoom: 16.91,
    pitch: 0
  },
  'geartner': {
    duration: 1000,
    center: [13.461, 52.511],
    bearing: 0,
    zoom: 17.59,
    pitch: 0
  }

};


import mapboxgl from 'mapbox-gl';

// Mapping function
const mapValues = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

function generateSourceData(day, hour) {
  const popularTimesData = require('../static/data/data_file.json');

  console.log(hour, "stunde");

  let placeList = [];

  for (let place of popularTimesData) {

    let radius = mapValues(place.populartimes[5].data[hour], 0, 100, 5, 50);

    placeList.push({
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [place.coordinates.lng, place.coordinates.lat],
      },
      "properties": {
        "title": place.name,
        "icon": "cafe",
        "visitors": radius
      }
    });
  }

  let compiledSourceData = {
    "type": "FeatureCollection",
    "features": placeList
  };

  return compiledSourceData;
};

function addPopularTimesLayer(map) {

  map.on('load', function() {

    map.addSource('popularTimes', {
      "type": "geojson",
      "data": generateSourceData(2, 3)
    });
    map.addLayer({
      "id": "popularTimes",
      "source": "popularTimes",
      "type": "circle",
      "paint": {
        "circle-radius": ['get', 'visitors'],
        "circle-color": "#007cbf"
      }
    });

  });

}

function updatePopularTimesMarkers(map, stepProgress) {

  let convertedHour = Math.round(mapValues(stepProgress, 0, 1, 0, 23));
  let convertedDay = 'Monday';

  map.getSource('popularTimes').setData(generateSourceData(convertedDay, convertedHour));
  //  map.getSource('popularTimes').setData(generateSourceData(convertedDay, convertedHour));

}

function removePopularTimesMarkers(map) {

  map.getSource('popularTimes').setData(generateSourceData(convertedDay, convertedHour));
  //  map.getSource('popularTimes').setData(generateSourceData(convertedDay, convertedHour));

}

export {
  updatePopularTimesMarkers,
  addPopularTimesLayer,
  positions,
  removePopularTimesLayer
};