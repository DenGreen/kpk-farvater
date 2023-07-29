import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NavSidebar from '../../../components/NavSidebar/NavSidebar';
import { newsDb } from '../../../data/NewsDb';
import { NavLink } from 'react-router-dom';
import zagluhkaImg from '../../../img/news/zagluhka.png';
import Paginated from '../../../components/Paginated/Paginated';

const Card = ({ currentItems }) => {
  return (
    <>
      <Helmet>
        <title>Новости</title>
      </Helmet>
      <ul className="news-list__list">
        {currentItems &&
          currentItems.map((value) => {
            return (
              <li className="news-list__item" key={value.id}>
                <img
                  src={value.img ? value.img : zagluhkaImg}
                  alt=""
                  className="news-list__img"
                />

                <span className="news-list__date">{value.date}</span>
                <NavLink className="news-list__title" to={value.path}>
                  {value.breadcrumb}
                </NavLink>
                <NavLink className="news-list__link" to={value.path}>
                  <span className="news-list__link-text">Перейти</span>
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 12 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="test"
                      d="M1 1L10 9.5L1 18"
                      stroke="#5D5FBA"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};

const NewsList = () => {
  return (
    <main className="main">
      <PageHeader pageHeaderDb={'Новости'} />
      <section className="abouts-us-coll width-adaptiv">
        <div className="abouts-us-coll__nav">
          <NavSidebar />
        </div>
        <div className="abouts-us-coll__content news-list">
          <Paginated itemsPerPage={5} items={newsDb}>
            {(value) => <Card currentItems={value} />}
          </Paginated>
        </div>
      </section>
    </main>
  );
};

export default NewsList;
