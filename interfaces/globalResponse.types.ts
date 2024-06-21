export type GlobalResponseTypes<T> = {
	data: T | [];
	ok: boolean;
	error?: {
		message: string;
		name: string;
		stack: string;
	};
};
