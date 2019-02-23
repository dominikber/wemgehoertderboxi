function addFassade(house_id) {
  // static/images/fassade1.jpg
  // static/images/fassade2.jpg
}

function addTable(fassade) {

  console.log(fassade, 'fassade from top')

  return `<div class="slide"><div class="row">
    <div class="col fassadenCol">
      <h4>2008</h4>
      <img class="owl-lazy" data-src="static/images/fassaden/fassade1.jpg" /></div>
    <div class="col fassadenCol">
      <h4>2019</h4>
      <img class="owl-lazy" data-src="static/images/fassaden/fassade2.jpg" /></div>
  </div> <table class="table table-striped text-center fassadenTable pt-2">
    <tbody>
      <tr>
        <th scope="row">${fassade.owner_2008}</th>
        <td>Besitzerart</td>
        <td>${fassade.owner_2019}</td>
      </tr>
      <tr>
        <th scope="row">${fassade.dach_2008}</th>
        <th>Dachausbau</th>
        <th>${fassade.dach_2019}</th>
      </tr>
      <tr>
        <th scope="row">${fassade.sanierung_2008}</th>
        <td>Sanierung</td>
        <td>${fassade.sanierung_2019}</td>
      </tr>
      <tr>
        <th scope="row">${fassade.gewerbeart_2008}</th>
        <td>Gewerbeart</td>
        <td>${fassade.gewerbeart_2019}</td>
      </tr>
    </tbody>
  </table></div>`;
}


function renderSlides(fassadenData) {

  console.log(fassadenData)
  let slides = '';
  for(let fassade in fassadenData) {
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