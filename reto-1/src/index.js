import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import { NavBarStyled } from './style/StyleGlobal';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBarStyled>
      <AppRoutes/>
    </NavBarStyled>
  </React.StrictMode>
);

