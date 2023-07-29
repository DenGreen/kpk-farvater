import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import {
  banner,
  cardUniversalAbout,
  cardUniversalCooperation,
} from '../../data/MainDb';
import StaticApplication from '../../components/ApplicationForm/StaticApplication/StaticApplication';
import { servicesListDb } from '../../data/ServicesListDb.js';
import imgMathD from '../../img/zaym/mathD.jpg';
import imgMathT from '../../img/zaym/mathT.jpg';
import imgMathP from '../../img/zaym/mathP.jpg';
import ServicesList from '../../components/ServicesList/ServicesList';
import UniversalContainer from '../../components/UniversalContainer/UniversalContainer';

const Main = () => {
  return (
    <>
      <Helmet>
        <title>Фарватер - Заём под материнский капитал</title>
      </Helmet>
      <main className="main">
        <Banner
          bannerImg={{ desc: imgMathD, tab: imgMathT, phone: imgMathP }}
          bannerArr={banner}
        />
        <ServicesList servicesListDB={servicesListDb} titleActive={true} />
        <UniversalContainer
          titleActive={false}
          direction={'normal'}
          cardUniversal={cardUniversalAbout}
        />
        <UniversalContainer
          titleActive={true}
          direction={'revers'}
          cardUniversal={cardUniversalCooperation}
        />
        <StaticApplication />
      </main>
    </>
  );
};

export default Main;
