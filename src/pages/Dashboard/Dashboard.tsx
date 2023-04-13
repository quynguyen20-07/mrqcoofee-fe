import React from 'react';

import Breadcrumb from '../../components/molecules/Breadcrum/Breadcrum';
import Card from '../../components/atoms/Card/Card';

type Props = {};

const Dashboard = (props: Props) => {
  const breadcrumItems = [{ href: '/dashboard', title: 'dashboard' }];
  return (
    <>
      <Breadcrumb items={breadcrumItems} />
      <Card title="Dashboard"></Card>
    </>
  );
};

export default Dashboard;
