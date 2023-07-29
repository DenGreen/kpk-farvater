import React from 'react';
import { NavLink } from 'react-router-dom';

const UniversalContainer = ({ titleActive, direction, cardUniversal }) => {
  return (
    <section className="universal-container__about section-box">
      <div className="width-adaptiv">
        <h2 className="universal-container__about-title">
          {cardUniversal.mainTitle}
        </h2>
        <div
          className={`universal-container__about-box universal-container__about-box_${direction}`}
        >
          <div className="universal-container__about-text">
            {titleActive && <h3>{cardUniversal.title}</h3>}
            <p
              dangerouslySetInnerHTML={{ __html: cardUniversal.text }}
            ></p>{' '}
          </div>
          <NavLink to={cardUniversal.link} className="universal-container__link">
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
          </NavLink>
          <ul className="universal-container__about-list">
            {cardUniversal.list.map((value, id) => {
              return (
                <li className="universal-container__about-item" key={id}>
                  <span>{value.desc}</span>
                  <p>{value.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UniversalContainer;
