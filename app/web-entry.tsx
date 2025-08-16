import React from 'react';
import { createRoot } from 'react-dom/client';

import './global.css';
import WebLayout from './web-layout';

// Create root element
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}

const root = createRoot(rootElement);

// Render the app
root.render(
    <React.StrictMode>
        <WebLayout />
    </React.StrictMode>
);
