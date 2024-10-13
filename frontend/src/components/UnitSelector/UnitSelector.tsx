import type React from "react";

interface UnitSelectorProps {
	temperatureUnit: "celsius" | "fahrenheit";
	speedUnit: "kmh" | "mph";
	onTemperatureUnitChange: (unit: "celsius" | "fahrenheit") => void;
	onSpeedUnitChange: (unit: "kmh" | "mph") => void;
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
				onChange={(e) => onSpeedUnitChange(e.target.value as "kmh" | "mph")}
				className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			>
				<option value="kmh">km/h</option>
				<option value="mph">mph</option>
			</select>
		</div>
	);
};
