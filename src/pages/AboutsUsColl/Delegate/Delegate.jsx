import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NavSidebar from '../../../components/NavSidebar/NavSidebar';
import { delegateDb } from '../../../data/DelegateDb';
import { NavLink } from 'react-router-dom';
import Paginated from '../../../components/Paginated/Paginated';

const Card = ({ currentItems }) => {
  return (
    <ul className="delegate__list">
      {currentItems &&
        currentItems.map((value) => {
          return (
            <li className="delegate__item" key={value.id}>
              <NavLink className="delegate__title" to={value.path}>
                <h3>{value.breadcrumb}</h3>
              </NavLink>

              <div className="delegate__box">
                <a
                  className="delegate__link-phone"
                  href={'tel:' + value.phoneHref}
                >
                  {value.phone}
                </a>
                {value.email && (
                  <a
                    className="delegate__link-email"
                    href={'mailto:' + value.email}
                  >
                    {value.email}
                  </a>
                )}
              </div>
            </li>
          );
        })}
    </ul>
  );
};

const Delegate = () => {
  return (
    <>
      <Helmet>
        <title>Представители по доверенности</title>
      </Helmet>
      <main className="main">
        <PageHeader pageHeaderDb={'Представители по доверенности'} />
        <section className="abouts-us-coll width-adaptiv">
          <div className="abouts-us-coll__nav">
            <NavSidebar />
          </div>
          <div className="abouts-us-coll__content delegate">
            <Paginated itemsPerPage={5} items={delegateDb}>
              {(value) => <Card currentItems={value} />}
            </Paginated>
          </div>
        </section>
      </main>
    </>
  );
};

export default Delegate;
