import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NavSidebar from '../../../components/NavSidebar/NavSidebar';
import { regulatoryDb } from '../../../data/RegulatoryDb';
import Conditions from '../../../components/Conditions/Conditions';

const Regulatory = () => {
  return (
    <>
      <Helmet>
        <title>Регулирующие органы</title>
      </Helmet>
      <main className="main">
        <PageHeader pageHeaderDb={'Регулирующие органы'} />
        <section className="abouts-us-coll width-adaptiv">
          <div className="abouts-us-coll__nav">
            <NavSidebar />
          </div>
          <div className="abouts-us-coll__content regulatory">
            <Conditions dataElement={regulatoryDb} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Regulatory;
