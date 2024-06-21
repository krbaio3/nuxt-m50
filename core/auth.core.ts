class AuthCore {
	private static instance: AuthCore;
	private token: string | null = null;

	private constructor() {}

	public static getInstance(): AuthCore {
		if (!AuthCore.instance) {
			AuthCore.instance = new AuthCore();
		}
		return AuthCore.instance;
	}

	public async login(): Promise<void> {
		const config = useRuntimeConfig();
		const url = `${config.api_url}/${config.auth_token_url}`;
		const options = {
			method: 'GET',
		};

		const response: Response = await fetch(url, options);

		if (!response.ok) {
			throw new Error('Login failed');
		}

		const { data } = await response.json();
		this.token = data;
	}

	public getToken(): string | null {
		return this.token;
	}
}

export const AuthCoreInstance: AuthCore = AuthCore.getInstance();
