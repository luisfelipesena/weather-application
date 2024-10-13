import { AutocompleteInput } from "../../ui/autocomplete-input";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useCity } from "../../../api/city/hook";
import { toast } from "react-toastify";

interface City {
	name: string;
	country: string;
}

export interface CitySearchBarProps {
	handleSearch: (searchInput: string) => void;
}

export const CitySearchBar: React.FC<CitySearchBarProps> = ({
	handleSearch,
}) => {
	const [input, setInput] = useState("");

	const debouncedInput = useDebounce(input, 300);
	const { data: cities, isLoading, error } = useCity(debouncedInput);

	const handleInputChange = (value: string) => {
		setInput(value);
	};

	const handleSelectCity = (city: City) => {
		setInput(`${city.name}, ${city.country}`);
		handleSearch(`${city.name}, ${city.country}`);
	};

	useEffect(() => {
		if (error) {
			toast.error(error?.message || "Error fetching cities");
		}
	}, [error]);

	return (
		<div className="flex flex-col gap-4 items-center">
			<div className="w-full max-w-96 flex gap-2">
				<AutocompleteInput
					value={input}
					options={cities || []}
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
		</div>
	);
};
