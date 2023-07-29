import React from 'react';

const Partners = ({ partnersDb }) => {
  return (
    <section className="partners width-adaptiv">
      <h2 className="partners__title">Наши партнёры</h2>
      <p className="partners__desc">
      С нами сотрудничают более 50 агентств недвижимости из Саратовской и Ульяновской областей. Некоторые из них представлены ниже:
      </p>
      <ul className="partners__list">
        {partnersDb.map((value, id) => {
          return (
            <li className="partners__item" key={id} >
              <img src={value.img} alt="" className="partners__img" />
              <span className="partners__city">{value.city}</span>
            </li>
          )
        })}
      </ul>
    </section>
  );
};

export default Partners;