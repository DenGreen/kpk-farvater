import React from 'react';
import ApplicationForm from '../ApplicationForm';

const ModalApplication = ({ setActiveModalAppProps }) => {
  const changeModal = (e) => {
    if (e.target.querySelector('.modal-app__box')) setActiveModalAppProps(false);
  };

  return (
    <section className="modal modal-app" onClick={changeModal}>
      <div className="modal-app__box">
        <h2 className="modal-app__title">
        Мы перезвоним в течение 10 минут!
        </h2>
        <div className="modal-app__connection"></div>
        <ApplicationForm setActiveModalAppProps={() => setActiveModalAppProps()} text={'Заказать звонок'}/>
      </div>
    </section>
  );
};

export default ModalApplication;
