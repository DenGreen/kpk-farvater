import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NavSidebar from '../../../components/NavSidebar/NavSidebar';
import { requisitesDb } from '../../../data/RequisitesDb';
import Conditions from '../../../components/Conditions/Conditions';

const Requisites = () => {
  return (
    <>
      <Helmet>
        <title>Реквизиты</title>
      </Helmet>
      <main className="main">
        <PageHeader pageHeaderDb={'Реквизиты'} />
        <section className="abouts-us-coll width-adaptiv">
          <div className="abouts-us-coll__nav">
            <NavSidebar />
          </div>
          <div className="abouts-us-coll__content requisites-page">
            <Conditions dataElement={requisitesDb} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Requisites;
