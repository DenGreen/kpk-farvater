import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesListDb } from '../../data/ServicesListDb.js';
import ServicesList from '../../components/ServicesList/ServicesList';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Услуги</title>
      </Helmet>
      <main className="main services-page">
        <div className="width-adaptiv">
          <Breadcrumbs />
          <ServicesList servicesListDB={servicesListDb} titleActive={false} />
        </div>
      </main>
    </>
  );
};

export default ServicesPage;
