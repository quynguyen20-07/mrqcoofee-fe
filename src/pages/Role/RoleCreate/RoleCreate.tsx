import React from 'react';
import Breadcrums from '../../../components/molecules/Breadcrum/Breadcrum';
import Card from '../../../components/atoms/Card/Card';

type Props = {};

const RoleCreate = (props: Props) => {
  const breadcrumItems = [
    { href: '/roles', title: 'Role List' },
    { title: 'Create' },
  ];
  return (
    <>
      <Breadcrums items={breadcrumItems} />
      <Card title={'Role Create'}>
        <h1>Hihi</h1>
      </Card>
    </>
  );
};

export default RoleCreate;
