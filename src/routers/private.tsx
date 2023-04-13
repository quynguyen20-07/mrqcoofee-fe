import React, { lazy } from 'react';

const PrivateLayout = lazy(
  () => import('../components/templates/PrivateLayout/index')
);
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));

const Cashier = lazy(() => import('../pages/Cashier/index'));

const RoleList = lazy(() => import('../pages/Role/RoleList/RoleList'));
const RoleCreate = lazy(() => import('../pages/Role/RoleCreate/RoleCreate'));

const routes = [
  {
    element: <PrivateLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'cashiers',
        element: <Cashier />,
      },
      {
        path: 'roles',
        children: [
          {
            path: '',
            element: <RoleList />,
          },
          {
            path: 'create',
            element: <RoleCreate />,
          },
        ],
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            element: <RoleList />,
          },
          {
            path: 'create',
            element: <RoleCreate />,
          },
        ],
      },
    ],
  },
];

export default routes;
