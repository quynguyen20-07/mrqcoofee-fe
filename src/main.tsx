import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import SpinLoading from './components/atoms/SpinLoading/SpinLoading';
import router from './router';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<SpinLoading />}>
    <RouterProvider router={router} />
  </Suspense>
);
