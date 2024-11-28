import React from 'react';
import { createRoot } from 'react-dom/client';

import { EmployeesPage } from './pages/EmployeesPage/EmployeesPage';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <EmployeesPage />
    </React.StrictMode>
);
