import React from 'react';

const RegistrationProcess = ({ dataElement }) => {
  return (
    <section className="registration-process width-adaptiv">
      <h2 className="registration-process__title">Процесс оформления заёма</h2>
      <ul className="registration-process__list">
        {dataElement.map((value, id) => {
          return (
            <li className="registration-process__item" data-item={id + 1} key={id} >
              {value}
            </li>
          )
        })}
      </ul>
    </section>
  );
};

export default RegistrationProcess;
