import { axiosInstance } from "../common/axios-instance";
import type { ApiResponse } from "../common/types";
import type { City } from "./types";

export const getCity = async (query: string): Promise<ApiResponse<City[]>> => {
    const response = await axiosInstance.get(`/cities?query=${query}`);
	return response.data as ApiResponse<City[]>;
};
