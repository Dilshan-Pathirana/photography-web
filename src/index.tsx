import './index.css';
import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./App";
import { HelmetProvider } from 'react-helmet-async';

// Some browser extensions inject a `polyfill.js` and occasionally throw
// "Could not establish connection. Receiving end does not exist." as an
// unhandled promise rejection on arbitrary sites. This isn't actionable for the
// app, but it can confuse production console monitoring.
if (import.meta.env.PROD) {
	window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
		const reason = event.reason as unknown;
		const message =
			typeof reason === 'string'
				? reason
				: typeof reason === 'object' && reason !== null && 'message' in reason
					? String((reason as { message?: unknown }).message)
					: '';

		const stack =
			typeof reason === 'object' && reason !== null && 'stack' in reason
				? String((reason as { stack?: unknown }).stack ?? '')
				: '';

		if (
			message === 'Could not establish connection. Receiving end does not exist.' &&
			(stack === '' || stack.includes('polyfill.js'))
		) {
			event.preventDefault();
		}
	});
}

const container = document.getElementById('root');
if (!container) {
	throw new Error('Root element #root not found');
}

createRoot(container).render(<React.StrictMode>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</React.StrictMode>);