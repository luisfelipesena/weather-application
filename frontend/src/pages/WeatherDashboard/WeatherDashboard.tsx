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
import {
	getTemperature,
	getVisibility,
	getSpeedLabel,
	getDirectionLabel,
} from "../../utils";
import {
	type DistanceUnit,
	type TemperatureUnit,
	UnitSelector,
} from "../../components/UnitSelector/UnitSelector";
import { useLocalStorage } from "@uidotdev/usehooks";

export const WeatherDashboard = () => {
	const [city, setCity] = useState("");
	const [lat, setLat] = useState("");
	const [lon, setLon] = useState("");
	const [temperatureUnit, setTemperatureUnit] =
		useLocalStorage<TemperatureUnit>("temperatureUnit", "fahrenheit");
	const [distanceUnit, setDistanceUnit] = useLocalStorage<DistanceUnit>(
		"distanceUnit",
		"mi",
	);
	const [geolocationError, setGeolocationError] =
		useState<GeolocationPositionError | null>(null);

	const {
		data: weather,
		isLoading: weatherLoading,
		error: weatherError,
	} = useWeather({ city, lat, lon });
	const bgColor = useWeatherBackground(weather?.condition);

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLat(position.coords.latitude.toString());
					setLon(position.coords.longitude.toString());
					setGeolocationError(null);
				},
				(error) => {
					setGeolocationError(error);
					setLat("");
					setLon("");
				},
			);
		} else {
			setGeolocationError({
				code: 0,
				message: "Geolocation is not supported by this browser.",
				PERMISSION_DENIED: 1,
				POSITION_UNAVAILABLE: 2,
				TIMEOUT: 3,
			});
		}
	}, []);

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
								<WeatherHeading
									handleOnUnitChange={(unit) =>
										setTemperatureUnit(unit as TemperatureUnit)
									}
									weather={{
										...weather,
										temperature: Number(
											getTemperature(
												weather.temperature.toString(),
												temperatureUnit,
											),
										),
									}}
									unit={temperatureUnit}
								/>
								<UnitSelector
									label="Distance Unit"
									unit={distanceUnit}
									options={[
										{ value: "km", label: "km" },
										{ value: "mi", label: "mi" },
									]}
									onUnitChange={(unit) => setDistanceUnit(unit as DistanceUnit)}
								/>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<WeatherInfoCard
										icon={<Droplets className="w-6 h-6" />}
										title="Humidity"
										value={`${weather.humidity}%`}
									/>
									<WeatherInfoCard
										icon={<Wind className="w-6 h-6" />}
										title="Wind"
										value={` ${getSpeedLabel(
											weather.windSpeed.toString(),
											distanceUnit,
										)} - ${getDirectionLabel(weather.windDirection)}`}
									/>
									<WeatherInfoCard
										icon={<Eye className="w-6 h-6" />}
										title="Visibility"
										value={`${getVisibility(
											weather.visibility.toString(),
											distanceUnit,
										)} ${distanceUnit}/hr`}
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
