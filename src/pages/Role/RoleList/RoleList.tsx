import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Breadcrums from '../../../components/molecules/Breadcrum/Breadcrum';
import Card from '../../../components/atoms/Card/Card';

type Props = {};

const RoleList = (props: Props) => {
  const navigate = useNavigate();
  const breadcrumItems = [{ href: '/roles', title: 'Role List' }];

  return (
    <>
      <Breadcrums items={breadcrumItems} />
      <Card
        title={'Role List'}
        extra={
          <Button type="primary" onClick={() => navigate('/roles/create')}>
            Create Role
          </Button>
        }
      ></Card>
    </>
  );
};

export default RoleList;
