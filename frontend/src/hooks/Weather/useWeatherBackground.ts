import { useState, useEffect } from "react";

export const useWeatherBackground = (condition: string | undefined) => {
	const [bgColor, setBgColor] = useState("from-purple-400 to-indigo-600");

	useEffect(() => {
		if (condition) {
			switch (condition.toLowerCase()) {
				case "clear":
					setBgColor("from-blue-300 to-yellow-300");
					break;
				case "sunny":
					setBgColor("from-yellow-200 to-orange-300");
					break;
				case "clouds":
					setBgColor("from-gray-300 to-gray-500");
					break;
				case "overcast":
					setBgColor("from-gray-400 to-gray-600");
					break;
				case "partly cloudy":
					setBgColor("from-blue-200 to-gray-400");
					break;
				case "rain":
					setBgColor("from-blue-400 to-gray-600");
					break;
				case "snow":
					setBgColor("from-blue-100 to-gray-200");
					break;
				case "thunderstorm":
					setBgColor("from-gray-600 to-purple-700");
					break;
				case "mist":
					setBgColor("from-gray-300 to-blue-200");
					break;
				default:
					setBgColor("from-purple-400 to-indigo-600");
			}
		}
	}, [condition]);

	return bgColor;
};
