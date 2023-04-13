import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb as BreadcrumbAntd, Space, Typography } from 'antd';
import { BreadcrumbItemType, ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface IBreadcrumbItem {
  href?: string;
  title?: React.ReactNode;
}

interface Props {
  items: IBreadcrumbItem[];
}

const Breadcrums: React.FC<Props> = ({ items }: Props) => {
  const navigate = useNavigate();

  return (
    <Space style={{ paddingBottom: '16px' }}>
      <HomeOutlined
        onClick={() => navigate('/')}
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
        }}
      />
      |
      <BreadcrumbAntd
        items={items.map((item) => {
          return {
            href: item.href,
            title: (
              <Typography.Text
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                {item.title}
              </Typography.Text>
            ),
          };
        })}
      />
    </Space>
  );
};

export default Breadcrums;
