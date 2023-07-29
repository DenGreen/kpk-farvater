import React from 'react';

const Conditions = ({dataElement}) => {
  return (
    <section className="conditions width-adaptiv">
      <h2 className="conditions__titel">Условия предоставления заёма</h2>
      <ul className="conditions__list">
        {dataElement.map((value, id) => {
          return (
            <li className="conditions__item" key={id}>
              <span className="conditions__option" dangerouslySetInnerHTML={{ __html: value.option }}>
              </span>
              <span className="conditions__text" dangerouslySetInnerHTML={{ __html: value.text }}>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Conditions;
