export type ApiResponse<T> = {
	data: T;
	message: string;
	success: boolean;
	error?: string;
};
