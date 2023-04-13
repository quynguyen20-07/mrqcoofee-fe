import React from 'react';
import Breadcrums from '../../components/molecules/Breadcrum/Breadcrum';
import Card from '../../components/atoms/Card/Card';

type Props = {};

const Cashier = (props: Props) => (
  <>
    <Breadcrums items={[]} />
    <Card title="Cashier"></Card>
  </>
);

export default Cashier;
