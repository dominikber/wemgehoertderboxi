let positions = {
  'boxi': {
    duration: 3000,
    bearing: 0,
    center: [13.459474, 52.510534],
    zoom: 17,
    pitch: 30
  },
  'boxifern': {
    duration: 3000,
    center: [13.455374, 52.510885],
    bearing: 0,
    zoom: 16,
    pitch: 10
  },
  'berlin': {
    duration: 3000,
    center: [13.445701, 52.508792],
    bearing: 0,
    zoom: 13,
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