import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import style from './index.module.scss';

function Layout(props: RouteConfigComponentProps<any>) {
  const Component = props.route?.component;
  return (
    <div className={`h-screen bg-green-300 ${style.global}`}>
      <Header />
      <Main>{Component ? <Component {...props} /> : null}</Main>
      <Footer />
    </div>
  );
}

const DefaultLayout = (props: RouteConfigComponentProps) => <Layout {...props} />;
export default DefaultLayout;
