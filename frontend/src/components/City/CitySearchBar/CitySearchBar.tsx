import { MapPin } from "lucide-react";
import { Button } from "../../ui/button";
import { AutocompleteInput } from "../../ui/autocomplete-input";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useCity } from "../../../api/city/hook";

interface City {
	name: string;
	country: string;
}

export interface CitySearchBarProps {
	searchInput: string;
	setSearchInput: (value: string) => void;
	handleSearch: () => void;
	handleUseLocation: () => void;
}

export const CitySearchBar: React.FC<CitySearchBarProps> = ({
	searchInput,
	setSearchInput,
	handleSearch,
	handleUseLocation,
}) => {
	const [input, setInput] = useState(searchInput);

	const debouncedInput = useDebounce(input, 300);
	const { data: cities, isLoading } = useCity(debouncedInput);

	const handleInputChange = (value: string) => {
		setInput(value);
		setSearchInput(value);
	};

	const handleSelectCity = (city: City) => {
		setInput(`${city.name}, ${city.country}`);
		setSearchInput(`${city.name}, ${city.country}`);
		handleSearch();
	};

	return (
		<div className="flex flex-col gap-4 items-center">
			<div className="w-full max-w-96 flex gap-2">
				<AutocompleteInput
					value={input}
					options={cities?.data || []}
					onSelect={handleSelectCity}
					onChange={handleInputChange}
					isLoading={isLoading}
					placeholder="Search for a city"
					getOptionLabel={(city: City) => `${city.name}, ${city.country}`}
					renderOption={(city: City) => (
						<div className="flex items-center">
							<span className="mr-2">{city.name}</span>
							<span className="text-gray-500">{city.country}</span>
						</div>
					)}
					className="flex-grow"
				/>
			</div>
			<Button
				onClick={handleUseLocation}
				variant="outline"
				className="w-full max-w-96"
			>
				<MapPin className="w-4 h-4 mr-2" /> Use My Location
			</Button>
		</div>
	);
};
