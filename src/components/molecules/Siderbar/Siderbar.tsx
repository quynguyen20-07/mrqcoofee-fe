import {
  DesktopOutlined,
  FundOutlined,
  UserOutlined,
  CloudServerOutlined,
  LockOutlined,
} from '@ant-design/icons';
import { Image, Layout, Menu, Space, Typography, MenuProps } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { logo } from '../../../assets/images';

type Props = { collapsed: boolean };
const { Sider } = Layout;

const Siderbar = ({ collapsed }: Props) => {
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      label: 'Dashboard',
      key: 'dashboard',
      icon: <FundOutlined />,
    },
    {
      label: 'Casher',
      key: 'cashiers',
      icon: <DesktopOutlined />,
    },
    {
      key: 'data',
      label: 'Data',
      icon: <CloudServerOutlined />,
      children: [
        {
          label: 'User',
          key: 'users',
          icon: <UserOutlined />,
        },
        {
          label: 'Role',
          key: 'roles',
          icon: <LockOutlined />,
        },
      ],
    },
  ];

  const handleClickSubMenu = (item: any) => {
    navigate(`/${item.key}`);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" onClick={() => navigate('/')}>
        {collapsed ? (
          <img
            src={logo}
            alt=""
            style={{ objectFit: 'cover', width: '100%' }}
          />
        ) : (
          <Space size={18}>
            <Image width={54} src={logo} preview={false} />
            <Typography.Text
              style={{ flex: 6, fontSize: '14px', color: '#fff' }}
            >
              MRQ COFFEE
            </Typography.Text>
          </Space>
        )}
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
        onClick={handleClickSubMenu}
      />
    </Sider>
  );
};

export default Siderbar;
