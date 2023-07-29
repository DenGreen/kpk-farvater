import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Такой страницы не существует</title>
      </Helmet>
      <section className="not">
        <div className="not__mainbox width-adaptiv">
          <div className="not__err">404</div>
          <div className="not__msg">Такой страницы не существует</div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
