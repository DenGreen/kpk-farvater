import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NavSidebar from '../../../components/NavSidebar/NavSidebar';
import { docsDb } from '../../../data/DocsDb';

const Docs = () => {
  return (
    <>
      <Helmet>
        <title>Документы</title>
      </Helmet>
      <main className="main">
        <PageHeader pageHeaderDb={'Документы'} />
        <section className="abouts-us-coll width-adaptiv">
          <div className="abouts-us-coll__nav">
            <NavSidebar />
          </div>
          <div className="abouts-us-coll__content docs">
            <ul className="docs__list">
              {docsDb.map((value, id) => {
                return (
                  <li className="docs__item" key={id}>
                    <a
                      href={value.link}
                      className="docs__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {value.doc}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Docs;
