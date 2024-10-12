import { axiosInstance } from "../common/axios-instance";
import type { ApiResponse } from "../common/types";
import type { WeatherProps, Wheather } from "./types";

export const getWeather = async ({
	city,
	lat,
	lon,
}: WeatherProps): Promise<ApiResponse<Wheather>> => {
	if (city) {
		const response = await axiosInstance.get(`/wheather?city=${city}`);
		return response.data as ApiResponse<Wheather>;
	}

	const response = await axiosInstance.get(`/wheather?lat=${lat}&lon=${lon}`);
	return response.data as ApiResponse<Wheather>;
};
