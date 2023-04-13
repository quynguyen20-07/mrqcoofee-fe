import { theme } from 'antd';
import React, { FC } from 'react';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import './LayoutTopbar.scss';

type Props = {
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  collapsed: boolean;
};
const LayoutTopbar: FC<Props> = ({ setCollapsed, collapsed }: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header className="top-bar" style={{ background: colorBgContainer }}>
      {collapsed ? (
        <MenuUnfoldOutlined
          className="trigger"
          onClick={() => setCollapsed(false)}
        />
      ) : (
        <MenuFoldOutlined
          className="trigger"
          onClick={() => setCollapsed(true)}
        />
      )}
    </Header>
  );
};

export default LayoutTopbar;
