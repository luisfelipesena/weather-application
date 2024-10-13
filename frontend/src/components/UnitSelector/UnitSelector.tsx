import type React from "react";

interface UnitSelectorProps {
	temperatureUnit: "celsius" | "fahrenheit";
	speedUnit: "km" | "mi";
	onTemperatureUnitChange: (unit: "celsius" | "fahrenheit") => void;
	onSpeedUnitChange: (unit: "km" | "mi") => void;
}

export const UnitSelector: React.FC<UnitSelectorProps> = ({
	temperatureUnit,
	speedUnit,
	onTemperatureUnitChange,
	onSpeedUnitChange,
}) => {
	return (
		<div className="flex justify-center space-x-2 mb-4">
			<select
				value={temperatureUnit}
				onChange={(e) =>
					onTemperatureUnitChange(e.target.value as "celsius" | "fahrenheit")
				}
				className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			>
				<option value="celsius">°C</option>
				<option value="fahrenheit">°F</option>
			</select>

			<select
				value={speedUnit}
				onChange={(e) => onSpeedUnitChange(e.target.value as "km" | "mi")}
				className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			>
				<option value="km">km</option>
				<option value="mi">mi</option>
			</select>
		</div>
	);
};
