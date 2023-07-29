import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import Conditions from '../../components/Conditions/Conditions';
import RegistrationProcess from '../../components/RegistrationProcess/RegistrationProcess';
import {
  conditionsArr,
  RegistrationProcessArr,
  bannerArr,
  questionAnswer,
  advantagesDb,
} from '../../data/ZaymMaterinDb';
import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import ReviewsMain from '../../components/Reviews/ReviewsMain';
import StaticApplication from '../../components/ApplicationForm/StaticApplication/StaticApplication';
import Advantages from '../../components/Advantages/Advantages';
import imgMathD from '../../img/zaym/mathD.jpg';
import imgMathT from '../../img/zaym/mathT.jpg';
import imgMathP from '../../img/zaym/mathP.jpg';
import InformationBlock from '../../components/InformationBlock/InformationBlock';

const Zaym = () => {
  return (
    <>
      <Helmet>
        <title>Заём с использованием материнского капитала</title>
      </Helmet>
      <main className="main">
        <Banner
          bannerImg={{ desc: imgMathD, tab: imgMathT, phone: imgMathP }}
          bannerArr={bannerArr}
        />
        <InformationBlock />
        <RegistrationProcess dataElement={RegistrationProcessArr} />
        <Advantages advantagesDb={advantagesDb} />
        <ReviewsMain />
        <QuestionAnswer questionAnswer={questionAnswer} />
        <Conditions dataElement={conditionsArr} />
        <StaticApplication />
      </main>
    </>
  );
};

export default Zaym;
