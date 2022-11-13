import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { Header } from 'components/Header';
import { Title } from 'components/Title';
import { Layout } from 'components/Layout';
import { routes } from './routes';

import './App.scss';

export const App = () => {
  return (
    <>
      <Header />
      <Title title='Аренда' />
      <Layout>
        <RouterProvider router={routes} />
      </Layout>
    </>
  );
};
