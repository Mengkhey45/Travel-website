import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = '/img/favicon.png';  // Directly reference the path relative to the public folder
document.head.appendChild(link);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
