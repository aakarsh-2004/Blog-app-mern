import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserContextProvider } from './Context.jsx';



createRoot(document.getElementById('root')).render(
        <UserContextProvider>
                <App />
        </UserContextProvider>
)
