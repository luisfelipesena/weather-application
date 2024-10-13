import { Cloud, Droplets, Sun } from "lucide-react";
import type { Weather } from "../../../api/weather/types";

interface WeatherHeadingProps {
	weather: Weather;
}

export const WeatherHeading = ({ weather }: WeatherHeadingProps) => {
	const getWeatherIcon = (condition: string) => {
		const lowerCondition = condition.toLowerCase();
		if (lowerCondition.includes("sun") || lowerCondition.includes("clear"))
			return <Sun className="w-24 h-24 text-yellow-400" />;
		if (lowerCondition.includes("cloud"))
			return <Cloud className="w-24 h-24 text-gray-400" />;
		if (lowerCondition.includes("rain"))
			return <Droplets className="w-24 h-24 text-blue-400" />;
		return <Sun className="w-24 h-24 text-purple-400" />;
	};

	return (
		<div className="text-center">
			<h2 className="text-2xl font-semibold text-gray-800">
				{weather.name}, {weather.region}, {weather.country}
			</h2>
			<div className="flex items-center justify-center mt-4">
				{getWeatherIcon(weather.condition)}
				<div className="ml-4">
					<div className="text-5xl font-bold text-gray-900">
						{weather.temperature}°C
					</div>
					<div className="text-xl text-gray-600">{weather.condition}</div>
				</div>
			</div>
		</div>
	);
};
