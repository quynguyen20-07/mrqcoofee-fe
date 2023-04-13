import { Col, Image, Layout, Menu, MenuProps, Space, Typography } from 'antd';
import React, { Suspense, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import SpinLoading from '../../atoms/SpinLoading/SpinLoading';
import Breadcrum from '../../molecules/Breadcrum/Breadcrum';
import LayoutTopbar from '../LayoutTopbar/LayoutTopbar';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './PrivateLayout.scss';
import Siderbar from '../../molecules/Siderbar/Siderbar';

const { Content } = Layout;

const PrivateLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout>
      <Siderbar collapsed={collapsed} />

      <Layout className="site-layout">
        <LayoutTopbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            padding: 16,
          }}
        >
          <Suspense fallback={<SpinLoading />}>
            <ProtectedRoute>
              <Col className="outlet-layout">
                <Outlet />
              </Col>
            </ProtectedRoute>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
