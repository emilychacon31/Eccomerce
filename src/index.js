import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import './Components/index.scss';
import { UsuarioProvider } from './contexts/usuarios.context';
import { ProductosProvider } from './contexts/productos.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UsuarioProvider>
            <ProductosProvider>
                <App />
            </ProductosProvider>
        </UsuarioProvider>
    </BrowserRouter>
);
