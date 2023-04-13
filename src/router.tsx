import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import privateRoutes from './routers/private';
import publicRoutes from './routers/public';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [...publicRoutes, ...privateRoutes],
  },
]);

export default router;
