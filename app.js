// https://calculator.swiftutors.com/effective-gear-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const effectiveGearRatioRadio = document.getElementById('effectiveGearRatioRadio');
const oldTireDiameterRadio = document.getElementById('oldTireDiameterRadio');
const newTireDiameterRadio = document.getElementById('newTireDiameterRadio');
const gearRatioRadio = document.getElementById('gearRatioRadio');

let effectiveGearRatio;
let oldTireDiameter = v1;
let newTireDiameter = v2;
let gearRatio = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

effectiveGearRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Old Tire Diameter';
  variable2.textContent = 'New Tire Diameter';
  variable3.textContent = 'Gear Ratio';
  oldTireDiameter = v1;
  newTireDiameter = v2;
  gearRatio = v3;
  result.textContent = '';
});

oldTireDiameterRadio.addEventListener('click', function() {
  variable1.textContent = 'Effective Gear Ratio';
  variable2.textContent = 'New Tire Diameter';
  variable3.textContent = 'Gear Ratio';
  effectiveGearRatio = v1;
  newTireDiameter = v2;
  gearRatio = v3;
  result.textContent = '';
});

newTireDiameterRadio.addEventListener('click', function() {
  variable1.textContent = 'Effective Gear Ratio';
  variable2.textContent = 'Old Tire Diameter';
  variable3.textContent = 'Gear Ratio';
  effectiveGearRatio = v1;
  oldTireDiameter = v2;
  gearRatio = v3;
  result.textContent = '';
});

gearRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Effective Gear Ratio';
  variable2.textContent = 'Old Tire Diameter';
  variable3.textContent = 'New Tire Diameter';
  effectiveGearRatio = v1;
  oldTireDiameter = v2;
  newTireDiameter = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(effectiveGearRatioRadio.checked)
    result.textContent = `Effective Gear Ratio = ${computeEffectiveGearRatio().toFixed(2)}`;

  else if(oldTireDiameterRadio.checked)
    result.textContent = `Old Tire Diameter = ${computeOldTireDiameter().toFixed(2)}`;

  else if(newTireDiameterRadio.checked)
    result.textContent = `New Tire Diameter = ${computeNewTireDiameter().toFixed(2)}`;

  else if(gearRatioRadio.checked)
    result.textContent = `Gear Ratio = ${computeGearRatio().toFixed(2)}`;
})

// calculation

function computeEffectiveGearRatio() {
  return (Number(oldTireDiameter.value) / Number(newTireDiameter.value)) * Number(gearRatio.value);
}

function computeOldTireDiameter() {
  return (Number(effectiveGearRatio.value) * Number(newTireDiameter.value)) / Number(gearRatio.value);
}

function computeNewTireDiameter() {
  return (Number(oldTireDiameter.value) / Number(effectiveGearRatio.value)) * Number(gearRatio.value);
}

function computeGearRatio() {
  return (Number(effectiveGearRatio.value) / Number(oldTireDiameter.value)) * Number(newTireDiameter.value);
}