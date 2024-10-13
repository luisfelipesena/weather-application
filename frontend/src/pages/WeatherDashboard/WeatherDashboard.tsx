import { useState } from "react";
import { Cloud, Droplets, Eye, Wind } from "lucide-react";
import { useWeather } from "../../api/weather/hook";
import { Card, CardContent } from "../../components/ui/card";
import { useQueryParam } from "../../hooks/use-query-param/useQueryParam";
import { WeatherInfoCard } from "../../components/Weather/WeatherInfoCard/WeatherInfoCard";
import { CitySearchBar } from "../../components/City/CitySearchBar/CitySearchBar";
import { WeatherHeading } from "../../components/Weather/WeatherHeading/WeatherHeading";
import { WeatherSkeleton } from "../../components/Weather/WeatherSkeleton/WeatherSkeleton";

export const WeatherDashboard = () => {
	const [city, setCity] = useQueryParam("city", "");
	const [lat, setLat] = useQueryParam("lat", "");
	const [lon, setLon] = useQueryParam("lon", "");
	const [searchInput, setSearchInput] = useState(city);

	const { data, isLoading } = useWeather({ city, lat, lon });
	const weather = data?.data;

	const handleSearch = () => {
		setCity(searchInput);
		setLat("");
		setLon("");
	};

	const handleUseLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			setCity("");
			setLat(position.coords.latitude.toString());
			setLon(position.coords.longitude.toString());
		});
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 p-8 flex items-center justify-center">
			<Card className="w-full max-w-4xl bg-white/90 backdrop-blur-md shadow-xl rounded-xl">
				<CardContent className="p-6">
					<h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
						Weather Dashboard
					</h1>
					<div className="flex flex-col gap-6">
						<CitySearchBar
							searchInput={searchInput}
							setSearchInput={setSearchInput}
							handleSearch={handleSearch}
							handleUseLocation={handleUseLocation}
						/>
						{isLoading ? (
							<WeatherSkeleton />
						) : weather ? (
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
						) : (
							<div className="flex items-center justify-center text-gray-500">
								Enter a city name or use your location to get weather
								information.
							</div>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
