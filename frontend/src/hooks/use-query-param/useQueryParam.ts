import { useSearchParams } from "react-router-dom";

export const useQueryParam = (
	key: string,
	defaultVal: string,
): [string, (val: string) => void] => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get(key) || defaultVal;

	const updateUrl = (newVal: string) => {
		if (!newVal.trim()) {
			setSearchParams((prev) => {
				prev.delete(key);
				return prev;
			});

			return;
		}

		setSearchParams((prev) => {
			prev.set(key, newVal);
			return prev;
		});
	};

	return [query, updateUrl];
};
