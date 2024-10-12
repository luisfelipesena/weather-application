import { Cloud, Droplets, Eye, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { useWeather } from "../../api/weather/hook";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";
import { useQueryParam } from "../../hooks/use-query-param/useQueryParam";

export const WeatherDashboard = () => {
	const [city] = useQueryParam("city", "");
	const [lat] = useQueryParam("lat", "");
	const [lon] = useQueryParam("lon", "");

	const { data, isLoading } = useWeather({ city, lat, lon });
	const weather = data?.data;

	const getBackgroundClass = (condition: string) => {
		const lowerCondition = condition.toLowerCase();
		if (lowerCondition.includes("sun") || lowerCondition.includes("clear"))
			return "bg-gradient-to-br from-yellow-300 to-orange-500";
		if (lowerCondition.includes("cloud"))
			return "bg-gradient-to-br from-gray-300 to-gray-500";
		if (lowerCondition.includes("rain"))
			return "bg-gradient-to-br from-blue-300 to-blue-500";
		return "bg-gradient-to-br from-purple-300 to-purple-500";
	};

	if (isLoading)
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);

	if (!weather)
		return (
			<div className="flex justify-center items-center h-screen">
				No weather data
			</div>
		);

	return (
		<div
			className={`min-h-screen ${getBackgroundClass(weather.condition)} p-8`}
		>
			<Card className="max-w-md mx-auto bg-white/80">
				<CardHeader>
					<div className="flex justify-start mb-4">
						<Link
							to="/city"
							className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
						>
							Back to City Search
						</Link>
					</div>
					<CardTitle className="text-2xl font-bold text-center">
						Weather Dashboard
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="text-center mb-6">
						<h2 className="text-xl font-semibold mb-2">
							{weather.name}, {weather.region}, {weather.country}
						</h2>
						<div className="text-6xl font-bold mb-2">
							{weather.temperature}°C
						</div>
						<div className="text-xl">{weather.condition}</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<Card>
							<CardContent className="flex items-center p-4">
								<Droplets className="w-6 h-6 mr-2" />
								<div>
									<div className="text-sm text-gray-500">Humidity</div>
									<div className="font-semibold">{weather.humidity}%</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex items-center p-4">
								<Wind className="w-6 h-6 mr-2" />
								<div>
									<div className="text-sm text-gray-500">Wind</div>
									<div className="font-semibold">
										{weather.windSpeed} km/h {weather.windDirection}
									</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex items-center p-4">
								<Eye className="w-6 h-6 mr-2" />
								<div>
									<div className="text-sm text-gray-500">Visibility</div>
									<div className="font-semibold">{weather.visibility} km</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex items-center p-4">
								<Cloud className="w-6 h-6 mr-2" />
								<div>
									<div className="text-sm text-gray-500">Cloud Cover</div>
									<div className="font-semibold">{weather.cloudCover}%</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
