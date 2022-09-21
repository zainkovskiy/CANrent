import React from 'react';

import { Header } from 'components/Header';
import { Title } from 'components/Title';
import { Layout } from 'components/Layout';
import { FormTemplate } from 'components/FormTemplate';

import './App.scss';

export const App = () => {
  return (
    <>
      <Header />
      <Title title='Аренда' />
      <Layout>
        <FormTemplate />
      </Layout>
    </>
  );
};
