export const celsiusToFahrenheit = (celsius: number) => {
	return ((celsius * 9) / 5 + 32).toFixed(1);
};

export const kmhToMph = (kmh: number) => {
	return (kmh * 0.621371).toFixed(1);
};

export const getTemperature = (
	temp: string,
	temperatureUnit: "celsius" | "fahrenheit",
) => {
	const celsius = Number.parseFloat(temp);
	return temperatureUnit === "celsius"
		? celsius.toFixed(1)
		: celsiusToFahrenheit(celsius);
};

export const getSpeed = (speed: string, speedUnit: "kmh" | "mph") => {
	const kmh = Number.parseFloat(speed);
	return speedUnit === "kmh" ? kmh.toFixed(1) : kmhToMph(kmh);
};

export const getVisibility = (visibility: string, speedUnit: "kmh" | "mph") => {
	const km = Number.parseFloat(visibility);
	return speedUnit === "kmh" ? km.toFixed(1) : (km * 0.621371).toFixed(1);
};
