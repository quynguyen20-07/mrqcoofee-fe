import React from 'react';
import Breadcrums from '../../../components/molecules/Breadcrum/Breadcrum';
import Card from '../../../components/atoms/Card/Card';
import FloatForm from '../../../components/atoms/FloatForm/FloatForm';
import { Button, Col, Form, Input, Row } from 'antd';

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
        <Form>
          <Row gutter={16} style={{ width: '100%' }}>
            <Col>
              <FloatForm label={'Name'} isRequire={true}>
                <Input placeholder="Enter role Name" />
              </FloatForm>
              <FloatForm label={'Description'} isRequire={false}>
                <Input placeholder="Enter role Description" />
              </FloatForm>
            </Col>
            <Col>
              <FloatForm label={'Code'} isRequire={false}>
                <Input placeholder="Enter role code" />
              </FloatForm>
            </Col>
          </Row>

          <FloatForm label={''} isRequire={false}>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </FloatForm>
        </Form>
      </Card>
    </>
  );
};

export default RoleCreate;
