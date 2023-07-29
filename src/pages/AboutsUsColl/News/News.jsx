import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NavSidebar from '../../../components/NavSidebar/NavSidebar';
import { newsDb } from '../../../data/NewsDb';
import zagluhkaImg from '../../../img/news/zagluhka.png';
import { useNavigate } from 'react-router-dom';

const News = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();

  const searchNews = () => {
    const news = newsDb.find((value) => {
      return value.path === path && value;
    });

    return news;
  };

  const news = searchNews();

  return (
    <>
      <Helmet>
        <title>Новости</title>
      </Helmet>
      <main className="main">
        <PageHeader pageHeaderDb={'Новости'} />
        <section className="abouts-us-coll width-adaptiv">
          <div className="abouts-us-coll__nav">
            <NavSidebar />
          </div>
          <div className="abouts-us-coll__content news-page">
            <div className="news__card">
              <h2 className="news__title">{news.breadcrumb}</h2>
              <span className="news__date">{news.date}</span>
              <div className="news__box">
                <img
                  align="left"
                  src={news.img ? news.img : zagluhkaImg}
                  alt=""
                  className="news__img"
                />
                <p
                  className="news__text"
                  dangerouslySetInnerHTML={{ __html: news.text }}
                ></p>
              </div>
            </div>
            <button className="news__btn" onClick={() => navigate(-1)}>
              <svg
                width="12"
                height="19"
                viewBox="0 0 12 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L2 9.5L11 18"
                  stroke="#5D5FBA"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              Вернуться к списку
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default News;
