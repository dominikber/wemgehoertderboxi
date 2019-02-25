function addTable(fassade) {

  const trueFalsConverter = object => {
    if (object) {
      return '<div class="true"></div>'
    } else {
      return '<div class="false"></div>'
    }
  }

  return `<div class="slide"><div class="row">
    <div class="col fassadenCol">
      <h4>2008</h4>
      <img class="owl-lazy" data-src="static/images/fassaden/fassade1.jpg" /></div>
    <div class="col fassadenCol">
      <h4>2019</h4>
      <img class="owl-lazy" data-src="static/images/fassaden/fassade2.jpg" /></div>
  </div> <table class="table table-striped text-center fassadenTable mt-2">
    <tbody>
      <tr>
        <td scope="row">${fassade.owner_2008}</td>
        <td><strong>Besitzerart</strong></td>
        <td>${fassade.owner_2019}</td>
      </tr>
      <tr>
        <td scope="row">${trueFalsConverter(fassade.dach_2008)}</td>
        <td><strong>Dachausbau</strong></td>
      <td>${trueFalsConverter(fassade.dach_2019)}</td>
      </tr>
      <tr>
        <td scope="row">${trueFalsConverter(fassade.sanierung_2008)}</td>
        <td><strong>Sanierung</strong></td>
      <td>${trueFalsConverter(fassade.sanierung_2019)}</td>
      </tr>
      <tr>
        <td scope="row">${fassade.gewerbeart_2008}</td>
        <td><strong>Gewerbeart</strong></td>
        <td>${fassade.gewerbeart_2019}</td>
      </tr>
    </tbody>
  </table></div>`;
};

function renderSlides(fassadenData) {

  console.log(fassadenData);
  let slides = '';
  for (let fassade of fassadenData) {
    let table = addTable(fassade);
    slides += table;
  }
return `${slides}`;
}



function renderFassadenSlides() {
  const fassadenData = require('../static/data/fassaden.json');
  document.getElementById('fassadenSlider').innerHTML = renderSlides(fassadenData);
}

export {
  renderFassadenSlides
};
