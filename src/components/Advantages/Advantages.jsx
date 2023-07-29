import React from 'react';

const Advantages = ({ advantagesDb }) => {
  return (
    <section className="advantages width-adaptiv">
      <h2 className="advantages__title">{advantagesDb.title}</h2>
      <ul className="advantages__list">
        {advantagesDb.collection.map((value, id) => {
          return (
            <li className="advantages__item" key={id}>
              <span className="advantages__item-title">{value.title}</span>
              <p className="advantages__item-text">{value.text}</p>
              <img className="advantages__item-img" src={value.img} alt="" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Advantages;
