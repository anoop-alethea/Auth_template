import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './presentation/styles/tailwind.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from './presentation/design/ThemeProvider'; 

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      {/* Toast gets theme context too */}
      <ToastContainer
        position="top-right"
        newestOnTop
        pauseOnFocusLoss={false}
      />
    </ThemeProvider>
  </React.StrictMode>
);
