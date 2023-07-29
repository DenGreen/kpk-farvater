import React from 'react';
import { NavLink } from 'react-router-dom';

const ServicesList = ({ servicesListDB, titleActive }) => {
  return (
    <section className="services-list width-adaptiv">
      {titleActive && (
        <h2 className="services-list__title">Финансовые услуги</h2>
      )}
      <div className="services-list__list">
        {servicesListDB.map((value, id) => {
          return (
            <NavLink to={value.link} className="services-list__item" key={id}>
             <div className="services-list__img-box">
             <img
                src={value.img}
                alt="Картинки для услуг"
                className="services-list__img"
              />
             </div>
              <div className="services-list__box">
                <h3 className="services-list__item-title">{value.title}</h3>
                <p className="services-list__desc">{value.desc}</p>
                <div className="services-list__link">
                  <span>Подробнее</span> 
                  <svg
                    width="12"
                    height="17"
                    viewBox="0 0 12 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6.5L1 12"
                      stroke="#5D5FBA"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};
export default ServicesList;
