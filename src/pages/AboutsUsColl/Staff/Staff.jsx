import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NavSidebar from '../../../components/NavSidebar/NavSidebar';
import { staffDb } from '../../../data/StaffDb';

const Staff = () => {
  return (
    <>
      <Helmet>
        <title>Сотрудники</title>
      </Helmet>
      <main className="main">
        <PageHeader pageHeaderDb={'Сотрудники'} />
        <section className="abouts-us-coll width-adaptiv">
          <div className="abouts-us-coll__nav">
            <NavSidebar />
          </div>
          <div className="abouts-us-coll__content staff">
            <ul className="staff__list">
              {staffDb.map((value, id) => {
                return (
                  <li className="staff__item" key={id}>
                    <picture>
                      <source srcSet={value.imgWebp} type="image/webp" />{' '}
                      <img
                        src={value.imgJpg}
                        className="staff__img"
                        alt="alt изображения"
                      />
                    </picture>
                    <div className="staff__box">
                      <span className="staff__full-name">{value.fullName}</span>
                      <span className="staff__post">{value.post}</span>
                    </div>
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

export default Staff;
