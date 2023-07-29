import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import Conditions from '../../components/Conditions/Conditions';
/* import RegistrationProcess from '../../components/RegistrationProcess/RegistrationProcess'; */
import {
  conditionsArr,
  /* RegistrationProcessArr */ bannerArr,
  docArr,
  questionAnswer,
} from '../../data/ZaymCarDb';
import DocConsideration from '../../components/DocConsideration/DocConsideration';
import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import ReviewsMain from '../../components/Reviews/ReviewsMain';
import StaticApplication from '../../components/ApplicationForm/StaticApplication/StaticApplication';
import imgCarD from '../../img/zaym/carD.jpg';
import imgCarT from '../../img/zaym/carT.jpg';
import imgCarP from '../../img/zaym/carP.jpg';

const Zaym = () => {
  return (
    <>
      <Helmet>
        <title>Заём под залог автомобиля</title>
      </Helmet>
      <main className="main">
        <Banner
          bannerImg={{ desc: imgCarD, tab: imgCarT, phone: imgCarP }}
          bannerArr={bannerArr}
        />
        <Conditions dataElement={conditionsArr} />
        {/* <RegistrationProcess dataElement={RegistrationProcessArr}/> */}
        <DocConsideration docArr={docArr} />
        <QuestionAnswer questionAnswer={questionAnswer} />
        <ReviewsMain />
        <StaticApplication />
      </main>
    </>
  );
};

export default Zaym;
