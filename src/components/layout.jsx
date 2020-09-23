import React from 'react';
import { PageHeader } from 'antd'

export const Layout = (props) => {
  const { children, title } = props;

  return (
    <>
      <PageHeader title={title} />
      {children}
    </>
  );
};
