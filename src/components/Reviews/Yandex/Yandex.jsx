import React from 'react';
import Iframe from 'react-iframe';
import yaImg from '../../../img/ya.png';

const RevievsYandex = () => {
  return (
    <div className="revievs-yandex">
      <img className="revievs-yandex__logo" src={yaImg} alt="логотип яндекса" />
      <Iframe
        styles={{ border: 'none', borderRadius: 8, height: 750 }}
        className="revievs-yandex__rev"
        src="https://yandex.ru/maps-reviews-widget/44994720779?comments"
        border={'none'}
        borderRadius={'8px'}
      ></Iframe>
      <a
        className="revievs-yandex__link"
        href="https://yandex.ru/maps/org/farvater/44994720779/"
      >{}</a>
    </div>
  );
};

export default RevievsYandex;
