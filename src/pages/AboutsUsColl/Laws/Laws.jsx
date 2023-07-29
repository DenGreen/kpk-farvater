import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NavSidebar from '../../../components/NavSidebar/NavSidebar';
import { lawsDb } from '../../../data/LawsDb';
import Conditions from '../../../components/Conditions/Conditions';

const Laws = () => {
  return (
    <>
      <Helmet>
        <title>Законы и нормативные акты</title>
      </Helmet>
      <main className="main">
        <PageHeader pageHeaderDb={'Законы и нормативные акты'} />
        <section className="abouts-us-coll width-adaptiv">
          <div className="abouts-us-coll__nav">
            <NavSidebar />
          </div>
          <div className="abouts-us-coll__content laws">
            <Conditions dataElement={lawsDb} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Laws;
