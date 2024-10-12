import { useDebounce } from "@uidotdev/usehooks";
import type React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCity } from "../../api/city/hook";
import type { City } from "../../api/city/types";
import { AutocompleteInput } from "../../components/ui/autocomplete-input";
import { Button } from "../../components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";

export const CityDashboard: React.FC = () => {
	const navigate = useNavigate();
	const [input, setInput] = useState("");
	const [cities, setCities] = useState<City[]>([]);
	const [isGeolocating, setIsGeolocating] = useState(false);

	const debouncedInput = useDebounce(input, 300);
	const { data, isLoading } = useCity(debouncedInput);

	useEffect(() => {
		if (data?.data) {
			setCities(data.data);
		}
	}, [data]);

	const handleGetWeather = () => {
		if (input.trim()) {
			navigate(`/weather?city=${encodeURIComponent(input)}`);
		}
	};

	const handleInputChange = (value: string) => {
		setInput(value);
	};

	const handleSelectCity = (city: City) => {
		setInput(`${city.name}, ${city.country}`);
	};

	const handleGeolocation = () => {
		setIsGeolocating(true);
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					navigate(`/weather?lat=${latitude}&lon=${longitude}`);
				},
				(error) => {
					console.error("Error getting location:", error);
					setIsGeolocating(false);
				},
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
			setIsGeolocating(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-8">
			<Card className="max-w-md mx-auto bg-white/90">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">
						City Search
					</CardTitle>
				</CardHeader>
				<CardContent>
					<AutocompleteInput
						value={input}
						options={cities}
						onSelect={handleSelectCity}
						onChange={handleInputChange}
						getOptionLabel={(city: City) => `${city.name}, ${city.country}`}
						renderOption={(city: City) => (
							<div className="flex items-center">
								<span className="mr-2">{city.name}</span>
								<span className="text-gray-500">{city.country}</span>
							</div>
						)}
					/>

					<Button
						className="w-full mt-4"
						disabled={isLoading}
						onClick={handleGetWeather}
					>
						{isLoading ? "Searching..." : "Get Weather"}
					</Button>

					<Button
						className="w-full mt-2"
						disabled={isGeolocating}
						onClick={handleGeolocation}
					>
						{isGeolocating ? "Detecting Location..." : "Use My Location"}
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};
