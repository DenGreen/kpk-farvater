import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import Conditions from '../../components/Conditions/Conditions';
/* import RegistrationProcess from '../../components/RegistrationProcess/RegistrationProcess'; */
import {
  conditionsArr,
  /* RegistrationProcessArr, */ bannerArr,
  docArr,
  questionAnswer,
} from '../../data/ZaymEstateDb';
import DocConsideration from '../../components/DocConsideration/DocConsideration';
import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import ReviewsMain from '../../components/Reviews/ReviewsMain';
import StaticApplication from '../../components/ApplicationForm/StaticApplication/StaticApplication';
import imgEstateD from '../../img/zaym/estateD.jpg';
import imgEestateT from '../../img/zaym/estateT.jpg';
import imgEstateP from '../../img/zaym/estateP.jpg';

const Zaym = () => {
  return (
    <>
      <Helmet>
        <title>Заём под залог недвижимости</title>
      </Helmet>
      <main className="main">
        <Banner
          bannerImg={{ desc: imgEstateD, tab: imgEestateT, phone: imgEstateP }}
          bannerArr={bannerArr}
        />
        <Conditions dataElement={conditionsArr} />
        {/*  <RegistrationProcess dataElement={RegistrationProcessArr}/> */}
        <DocConsideration docArr={docArr} />
        <QuestionAnswer questionAnswer={questionAnswer} />
        <ReviewsMain />
        <StaticApplication />
      </main>
    </>
  );
};

export default Zaym;
