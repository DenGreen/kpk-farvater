import React from 'react';
import ApplicationForm from '../ApplicationForm';

const ApplicationCooperation = ({ dataElement }) => {
  return (
    <section className="application-cooperation width-adaptiv">
      <h2 className="application-cooperation__title">
        {dataElement.title}
      </h2>
      <div className="application-cooperation__box">
        <div className="application-cooperation__inner-img">
            <img src={dataElement.img} alt="Фотография менеджера по работе с партнерами" className="application-cooperation__img" />
            <span className="application-cooperation__full-name">{dataElement.fullName}</span>
        </div>
        <div className="application-cooperation__inner-form">
            <a className="application-cooperation__phone" href={`tel:${dataElement.phoneLink}`}>{dataElement.phone}</a>
            <ApplicationForm />
        </div>
      </div>
    </section>
  );
};

export default ApplicationCooperation;
