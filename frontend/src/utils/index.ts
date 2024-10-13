import type { DistanceUnit } from "../components/UnitSelector/UnitSelector";

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

const getSpeed = (speed: string, distanceUnit: DistanceUnit) => {
	const kmh = Number.parseFloat(speed);
	return distanceUnit === "km" ? kmh.toFixed(1) : kmhToMph(kmh);
};

export const getSpeedLabel = (speed: string, distanceUnit: DistanceUnit) => {
	const speedValue = getSpeed(speed, distanceUnit);
	return distanceUnit === "km" ? `${speedValue} kph` : `${speedValue} mph`;
};

export const getDirectionLabel = (direction: string) => {
	switch (direction) {
		case "N":
			return "North";
		case "S":
			return "South";
		case "E":
			return "East";
		case "W":
			return "West";
		case "NE":
			return "Northeast";
		case "NW":
			return "Northwest";
		case "SE":
			return "Southeast";
		case "SW":
			return "Southwest";
		case "NNE":
			return "North-Northeast";
		case "ENE":
			return "East-Northeast";
		case "ESE":
			return "East-Southeast";
		case "SSE":
			return "South-Southeast";
		case "SSW":
			return "South-Southwest";
		case "WSW":
			return "West-Southwest";
		case "WNW":
			return "West-Northwest";
		case "NNW":
			return "North-Northwest";
		case "NbE":
			return "North by East";
		case "NEbN":
			return "Northeast by North";
		case "NEbE":
			return "Northeast by East";
		case "EbN":
			return "East by North";
		case "EbS":
			return "East by South";
		case "SEbE":
			return "Southeast by East";
		case "SEbS":
			return "Southeast by South";
		case "SbE":
			return "South by East";
		case "SbW":
			return "South by West";
		case "SWbS":
			return "Southwest by South";
		case "SWbW":
			return "Southwest by West";
		case "WbS":
			return "West by South";
		case "WbN":
			return "West by North";
		case "NWbW":
			return "Northwest by West";
		case "NWbN":
			return "Northwest by North";
		case "NbW":
			return "North by West";
		default:
			return direction;
	}
};

export const getVisibility = (
	visibility: string,
	distanceUnit: DistanceUnit,
) => {
	const km = Number.parseFloat(visibility);
	return distanceUnit === "km" ? km.toFixed(1) : (km * 0.621371).toFixed(1);
};
