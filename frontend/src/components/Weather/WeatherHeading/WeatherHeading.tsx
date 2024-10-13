import {
	Cloud,
	Droplets,
	Sun,
	Snowflake,
	CloudLightning,
	CloudFog,
} from "lucide-react";
import type { Weather } from "../../../api/weather/types";
import { UnitSelector } from "../../UnitSelector/UnitSelector";
import type { TemperatureUnit } from "../../UnitSelector/UnitSelector";

interface WeatherHeadingProps {
	weather: Weather;
	unit: "celsius" | "fahrenheit";
	handleOnUnitChange: (unit: TemperatureUnit) => void;
}

export const WeatherHeading = ({
	weather,
	unit,
	handleOnUnitChange,
}: WeatherHeadingProps) => {
	const getWeatherIcon = (condition: string) => {
		const lowerCondition = condition.toLowerCase();
		if (lowerCondition.includes("clear") || lowerCondition.includes("sunny"))
			return <Sun className="w-24 h-24 text-yellow-400" />;
		if (
			lowerCondition.includes("clouds") ||
			lowerCondition.includes("overcast") ||
			lowerCondition.includes("partly cloudy")
		)
			return <Cloud className="w-24 h-24 text-gray-400" />;
		if (lowerCondition.includes("rain"))
			return <Droplets className="w-24 h-24 text-blue-400" />;
		if (lowerCondition.includes("snow"))
			return <Snowflake className="w-24 h-24 text-blue-100" />;
		if (lowerCondition.includes("thunderstorm"))
			return <CloudLightning className="w-24 h-24 text-purple-700" />;
		if (lowerCondition.includes("mist"))
			return <CloudFog className="w-24 h-24 text-gray-300" />;
		return <Sun className="w-24 h-24 text-purple-400" />;
	};

	return (
		<div className="text-center">
			<UnitSelector
				label="Temperature Unit"
				unit={unit}
				options={[
					{ value: "celsius", label: "°C" },
					{ value: "fahrenheit", label: "°F" },
				]}
				onUnitChange={(unit) => handleOnUnitChange(unit as TemperatureUnit)}
			/>
			<h2 className="text-2xl font-semibold text-gray-800">
				{weather.name}, {weather.region}, {weather.country}
			</h2>
			<div className="flex items-center justify-center mt-4">
				{getWeatherIcon(weather.condition)}
				<div className="ml-4">
					<div className="text-5xl font-bold text-gray-900">
						{weather.temperature}°{unit === "celsius" ? "C" : "F"}
					</div>
					<div className="text-xl text-gray-600">{weather.condition}</div>
				</div>
			</div>
		</div>
	);
};
