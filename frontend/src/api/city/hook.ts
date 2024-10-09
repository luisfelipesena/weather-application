import { useQuery } from "@tanstack/react-query";
import { getCity } from "./service";

export const useCity = (search: string) => {
    return useQuery({
        queryKey: ['city', search],
        queryFn: () => getCity(search)
    })
}