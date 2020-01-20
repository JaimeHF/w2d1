function paintColorScale(nItems) {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  for (let i = 0; i < 255; i += Math.round(255 / nItems)) {
    // part I => in-memory DOM element creation
    let DIVDOMEl = document.createElement("div");

    // part II => operate with the in-memory object
    // DIVDOMEl.style.background = `rgb(${i}, 0, ${randomInt(0, 255)})`;
    DIVDOMEl.className = "cesar";
    DIVDOMEl.style.transform = `rotate(${randomInt(0, 360)}deg)`
    //   DIVDOMEl.innerHTML = "click me";
    DIVDOMEl.onclick = function() {
      //...implementation goes here
    };

    // part III => DOM element addition to chosen target
    let bodyDOMEl = document.body;
    bodyDOMEl.appendChild(DIVDOMEl);
  }
}
