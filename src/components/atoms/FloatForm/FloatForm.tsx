import { Form } from 'antd';
import React from 'react';

import './FloatForm.scss';

type Props = {
  label: string;
  isRequire: boolean;
  children?: React.ReactNode;
};

const FloatForm = (props: Props) => {
  return (
    <>
      <Form.Item
        className="float-form"
        label={props.label}
        required={props.isRequire}
      >
        {props.children}
      </Form.Item>
    </>
  );
};

export default FloatForm;
