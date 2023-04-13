import React from 'react';
import { Card, Image } from 'antd';
import { notFound } from '../../assets/images';

const NotFound = () => {
  return (
    <Card
      style={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Image width={500} src={notFound} preview={false} />
    </Card>
  );
};

export default NotFound;
