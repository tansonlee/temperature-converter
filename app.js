const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNum(num) {
	return Math.round(num * 100) / 100;
}

function fromCelcius() {
	const cTemp = parseFloat(celciusInput.value);
	const fTemp = cTemp * (9 / 5) + 32;
	const kTemp = cTemp + 273.15;

	fahrenheitInput.value = roundNum(fTemp);
	kelvinInput.value = roundNum(kTemp);
}

function fromFahrenheit() {
	const fTemp = parseFloat(fahrenheitInput.value);
	const cTemp = (fTemp - 32) * (5 / 9);
	const kTemp = cTemp + 273.15;

	celciusInput.value = roundNum(cTemp);
	kelvinInput.value = roundNum(kTemp);
}

function fromKelvin() {
	const kTemp = parseFloat(kelvinInput.value);
	const cTemp = kTemp - 273.15;
	const fTemp = cTemp * (9 / 5) + 32;

	fahrenheitInput.value = roundNum(fTemp);
	celciusInput.value = roundNum(cTemp);
}

celciusInput.addEventListener("input", fromCelcius);
fahrenheitInput.addEventListener("input", fromFahrenheit);
kelvinInput.addEventListener("input", fromKelvin);
