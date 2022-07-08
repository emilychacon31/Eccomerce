import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import './Components/index.scss';
import { UsuarioProvider } from './contexts/usuarios.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UsuarioProvider>
            <App />
        </UsuarioProvider>
    </BrowserRouter>
);
