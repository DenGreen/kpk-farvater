import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import {
  banner,
  questionAnswer,
  registrationProcess,
  doc,
  partners,
} from '../../data/CooperationDb';
import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';
import RegistrationProcess from '../../components/RegistrationProcess/RegistrationProcess';
import ReviewsMain from '../../components/Reviews/ReviewsMain';
import DocConsideration from '../../components/DocConsideration/DocConsideration';
import Partners from '../../components/Partners/Partners';
import StaticApplication from '../../components/ApplicationForm/StaticApplication/StaticApplication';
import imgCooperationD from '../../img/zaym/cooperationD.jpg';
import imgCooperationT from '../../img/zaym/cooperationT.jpg';
import imgCooperationP from '../../img/zaym/cooperationP.jpg';

const Cooperation = () => {
  return (
    <>
      <Helmet>
        <title>Сотрудничество в сфере материнского капитала</title>
      </Helmet>
      <main className="main cooperation">
        <Banner
          bannerImg={{
            desc: imgCooperationD,
            tab: imgCooperationT,
            phone: imgCooperationP,
          }}
          bannerArr={banner}
        />
        <RegistrationProcess dataElement={registrationProcess} />
        <DocConsideration docArr={doc} />
        <Partners partnersDb={partners} />
        <ReviewsMain />
        <QuestionAnswer questionAnswer={questionAnswer} />
        <StaticApplication />
      </main>
    </>
  );
};

export default Cooperation;
