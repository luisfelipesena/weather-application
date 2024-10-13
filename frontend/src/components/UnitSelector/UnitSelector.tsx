import type React from "react";

export type TemperatureUnit = "celsius" | "fahrenheit";
export type DistanceUnit = "km" | "mi";

type Unit = TemperatureUnit | DistanceUnit;

interface UnitSelectorProps {
	unit: Unit;
	options: { value: string; label: string }[];
	onUnitChange: (unit: Unit) => void;
	label?: string;
}

export const UnitSelector: React.FC<UnitSelectorProps> = ({
	unit,
	options,
	onUnitChange,
	label,
}) => {
	return (
		<div className="flex justify-center items-center space-x-2 mb-4">
			{label && (
				<label htmlFor="unit-selector" className="text-gray-700 mr-2">
					{label}
				</label>
			)}
			<select
				id="unit-selector"
				value={unit}
				onChange={(e) => onUnitChange(e.target.value as Unit)}
				className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};
