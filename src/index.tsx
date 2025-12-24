import './index.css';
import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./App";
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root');
if (!container) {
	throw new Error('Root element #root not found');
}

createRoot(container).render(<React.StrictMode>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</React.StrictMode>);