import { useEffect, useState } from "react";
import { Cloud, Droplets, Eye, Wind } from "lucide-react";
import { useWeather } from "../../api/weather/hook";
import { Card, CardContent } from "../../components/ui/card";
import { WeatherInfoCard } from "../../components/Weather/WeatherInfoCard/WeatherInfoCard";
import { CitySearchBar } from "../../components/City/CitySearchBar/CitySearchBar";
import { WeatherHeading } from "../../components/Weather/WeatherHeading/WeatherHeading";
import { WeatherSkeleton } from "../../components/Weather/WeatherSkeleton/WeatherSkeleton";
import { toast } from "react-toastify";
import { useWeatherBackground } from "../../hooks/Weather/useWeatherBackground";
import { useGeolocation } from "@uidotdev/usehooks";

export const WeatherDashboard = () => {
	const [city, setCity] = useState("");
	const [lat, setLat] = useState("");
	const [lon, setLon] = useState("");

	const {
		data: weather,
		isLoading: weatherLoading,
		error: weatherError,
	} = useWeather({ city, lat, lon });
	const bgColor = useWeatherBackground(weather?.condition);
	const { latitude, longitude, error: geolocationError } = useGeolocation();

	const handleSearch = (searchInput: string) => {
		setCity(searchInput);
		setLat("");
		setLon("");
	};

	useEffect(() => {
		if (weatherError) {
			toast.error(weatherError?.message || "Error fetching weather");
		}

		if (geolocationError) {
			if (geolocationError?.message === "User denied Geolocation")
				toast.error(
					"Location access denied. Please enable location services to use your current position.",
				);
			else
				toast.error(geolocationError?.message || "Error fetching geolocation");
		}
	}, [weatherError, geolocationError]);

	useEffect(() => {
		if (latitude && longitude) {
			setLat(latitude.toString());
			setLon(longitude.toString());
		}
	}, [latitude, longitude]);

	return (
		<div
			className={`min-h-screen bg-gradient-to-br ${bgColor} p-8 flex items-center justify-center`}
		>
			<Card className="w-full max-w-4xl bg-white/90 backdrop-blur-md shadow-xl rounded-xl">
				<CardContent className="p-6">
					<h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
						Weather Dashboard
					</h1>
					<div className="flex flex-col gap-6">
						<CitySearchBar handleSearch={handleSearch} />

						{weatherLoading || !weather ? (
							<>
								{!weather && !weatherLoading && (
									<div className="flex items-center justify-center text-gray-500">
										Enter a city name or use your location to get weather
										information.
									</div>
								)}
								<WeatherSkeleton />
							</>
						) : (
							<div className="flex flex-col gap-6">
								<WeatherHeading weather={weather} />
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<WeatherInfoCard
										icon={<Droplets className="w-6 h-6" />}
										title="Humidity"
										value={`${weather.humidity}%`}
									/>
									<WeatherInfoCard
										icon={<Wind className="w-6 h-6" />}
										title="Wind"
										value={`${weather.windSpeed} km/h ${weather.windDirection}`}
									/>
									<WeatherInfoCard
										icon={<Eye className="w-6 h-6" />}
										title="Visibility"
										value={`${weather.visibility} km`}
									/>
									<WeatherInfoCard
										icon={<Cloud className="w-6 h-6" />}
										title="Cloud Cover"
										value={`${weather.cloudCover}%`}
									/>
								</div>
							</div>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
