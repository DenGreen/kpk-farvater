import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NavSidebar from '../../../components/NavSidebar/NavSidebar';
import { delegateDb } from '../../../data/DelegateDb';

const Agent = () => {
  const path = window.location.pathname;

  const searchNews = () => {
    const agent = delegateDb.find((value) => {
      return value.path === path && value;
    });

    return agent;
  };

  const agent = searchNews();
  
  return (
    <>
      <Helmet>
        <title>{agent.breadcrumb}</title>
      </Helmet>
      <main className="main">
        <PageHeader pageHeaderDb={'Представители по доверенности'} />
        <section className="abouts-us-coll width-adaptiv">
          <div className="abouts-us-coll__nav">
            <NavSidebar />
          </div>
          <div className="abouts-us-coll__content agent">
            <div className="agent__card">
              <h3 className="agent__title">{agent.breadcrumb}</h3>
              <div className="agent__box">
                <a href={'tel:' + agent.phone} className="agent__link-phone">
                  {agent.phone}
                </a>
                {agent.email && (
                  <a
                    href={'mailto:' + agent.email}
                    className="agent__link-email"
                  >
                    {agent.email}
                  </a>
                )}
              </div>
              <p
                className="agent__desc"
                dangerouslySetInnerHTML={{ __html: agent.desc }}
              ></p>
              {agent.img && (
                <ul className="agent__list">
                  {agent.img.map((value, id) => {
                    return (
                      <li className="agent__item" key={id}>
                        <a href={value.img} target="_blank" rel="noreferrer">
                          <img
                            src={value.img}
                            className="agent__img"
                            alt={value.alt}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Agent;
