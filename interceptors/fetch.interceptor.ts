import { AuthCoreInstance } from '~/core/auth.core';

const originalFetch = window.fetch;
window.fetch = async (input: URL | RequestInfo, init?: RequestInit): Promise<Response> => {
	const token = AuthCoreInstance.getToken();

	if (token) {
		init = init || {};
		init.headers = init.headers || {};
		(init.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
	}
	return originalFetch(input, init);
};
