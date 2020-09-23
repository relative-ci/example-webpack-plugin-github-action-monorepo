import React from 'react';
import { PageHeader } from 'antd'

import css from './layout.module.css';

export const Layout = (props) => {
  const { children, title } = props;

  return (
    <div className={css.root}>
      <PageHeader title={title} />
      <main className={css.main}>
        {children}
      </main>
    </div>
  );
};
