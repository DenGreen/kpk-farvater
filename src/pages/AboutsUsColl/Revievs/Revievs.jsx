import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeader/PageHeader';
//import { } from '../../data/AboutUsDb';
import NavSidebar from '../../../components/NavSidebar/NavSidebar';
import ReviewsMain from '../../../components/Reviews/ReviewsMain';

const Revievs = () => {
  document.title = 'Отзывы';
  return (
    <>
      <Helmet>
        <title>Отзывы</title>
      </Helmet>
      <main className="main">
        <PageHeader pageHeaderDb={'Отзывы'} />
        <section className="abouts-us-coll width-adaptiv">
          <div className="abouts-us-coll__nav">
            <NavSidebar />
          </div>
          <div className="abouts-us-coll__content revievs-page">
            <ReviewsMain />
          </div>
        </section>
      </main>
    </>
  );
};

export default Revievs;
