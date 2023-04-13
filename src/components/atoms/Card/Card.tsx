import React from 'react';
import { Card as CardAntd } from 'antd';

import './Card.scss';

type Props = {
  title?: string;
  extra?: React.ReactNode;
  children?: React.ReactNode;
};

const Card = ({ title, extra, children }: Props) => {
  return (
    <CardAntd className="card-container" title={title} extra={extra}>
      {children}
    </CardAntd>
  );
};

export default Card;
