const temp = parseFloat(document.querySelector('#temp').textContent);
const wind = parseFloat(document.querySelector('#wind').textContent);
const windchill = document.querySelector('#windchill');

if (temp <= 50 && wind >= 3) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16)));
    windchill.innerHTML = chill.toFixed(0);

}

console.log(temp);