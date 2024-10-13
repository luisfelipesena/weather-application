import { useQuery } from "@tanstack/react-query";
import { getCity } from "./service";

export const useCity = (search: string) => {
	return useQuery({
		queryKey: ["city", search],
		enabled: !!search,
		queryFn: async () => {
			const response = await getCity(search);
			if (response.error) {
				throw new Error(response.error);
			}
			return response.data;
		},
	});
};
