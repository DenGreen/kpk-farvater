import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import Conditions from '../../components/Conditions/Conditions';
import {
  conditionsArr,
  bannerArr /* , questionAnswer  */,
} from '../../data/ZaymPotrebDb';
/* import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer'; */
import ReviewsMain from '../../components/Reviews/ReviewsMain';
import StaticApplication from '../../components/ApplicationForm/StaticApplication/StaticApplication';
import imgPotrebD from '../../img/zaym/potrebD.jpg';
import imgPotrebT from '../../img/zaym/potrebT.jpg';
import imgPotrebP from '../../img/zaym/potrebP.jpg';

const Zaym = () => {
  return (
    <>
      <Helmet>
        <title>Потребительский заём без обеспечения</title>
      </Helmet>
      <main className="main">
        <Banner
          bannerImg={{ desc: imgPotrebD, tab: imgPotrebT, phone: imgPotrebP }}
          bannerArr={bannerArr}
        />
        <Conditions dataElement={conditionsArr} />
        {/* <QuestionAnswer questionAnswer={questionAnswer}/> */}
        <ReviewsMain />
        <StaticApplication />
      </main>
    </>
  );
};

export default Zaym;
