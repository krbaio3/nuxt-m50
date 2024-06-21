// import '../public/styles/styles.scss';
// import './core/router.core';
import { AuthCoreInstance } from '~/core/auth.core';
// import './core/i18n.core.ts';

(async () => {
	debugger
	await AuthCoreInstance.login();
	await import('./interceptors/fetch.interceptor');
})();
