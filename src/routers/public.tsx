import React from 'react';
import SignIn from '../pages/Auth/SignIn';
import PublicLayout from '../components/templates/PublicLayout';

const routes = [
  {
    element: <PublicLayout />,
    children: [{ path: 'signin', element: <SignIn /> }],
  },
];

export default routes;
