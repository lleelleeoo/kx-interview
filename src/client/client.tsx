import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => 
<h1>hello</h1>

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
