import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main/Main';
import ZaymCar from './pages/ZaymCar/ZaymCar';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ZaymMaterin from './pages/ZaymMaterin/ZaymMaterin';
import ZaymPotreb from './pages/ZaymPotreb/ZaymPotreb';
import ZaymEstate from './pages/ZaymEstate/ZaymEstate';
import Contacts from './pages/Contacts/Contacts';
import AboutUs from './pages/AboutsUsColl/AboutUs/AboutUs';
import Revievs from './pages/AboutsUsColl/Revievs/Revievs';
import NewsList from './pages/AboutsUsColl/NewsList/NewsList';
import News from './pages/AboutsUsColl/News/News';
import Staff from './pages/AboutsUsColl/Staff/Staff';
import Requisites from './pages/AboutsUsColl/Requisites/Requisites';
import Docs from './pages/AboutsUsColl/Docs/Docs';
import Laws from './pages/AboutsUsColl/Laws/Laws';
import Regulatory from './pages/AboutsUsColl/Regulatory/Regulatory';
import Delegate from './pages/AboutsUsColl/Delegate/Delegate';
import Agent from './pages/AboutsUsColl/Agent/Agent';
import Cooperation from './pages/Cooperation/Cooperation';
import ForSavers from './pages/ForSavers/ForSavers';
import NotFound from './pages/Not/NotFound';

const basUrl = "/kpk-farvater/"
const UseRoutes = () => {
  return (
    <Routes>
      <Route path={`${basUrl}`} element={<Main />} exact />
      <Route path={`${basUrl}services`} element={<ServicesPage />} exact />
      <Route path={`${basUrl}services/zaym-car`} element={<ZaymCar />} exact />
      <Route path={`${basUrl}services/zaym-mat`} element={<ZaymMaterin />} exact />
      <Route path={`${basUrl}services/zaym-potreb`} element={<ZaymPotreb />} exact />
      <Route path={`${basUrl}services/zaym-estate`} element={<ZaymEstate />} exact />
      <Route path={`${basUrl}services/for-savers`} element={<ForSavers />} exact />
      <Route path={`${basUrl}contacts`} element={<Contacts />} exact />
      <Route
        path={`${basUrl}about-us`}
        element={<Navigate to={`${basUrl}about-us/base`} />}
        exact
      />
      <Route path={`${basUrl}about-us/base`} element={<AboutUs />} exact />
      <Route path={`${basUrl}about-us/reviews`} element={<Revievs />} exact />
      <Route path={`${basUrl}about-us/news-report`} element={<NewsList />} exact />
      <Route path={`${basUrl}about-us/news-report/:id`} element={<News />} exact />
      <Route path={`${basUrl}about-us/staff`} element={<Staff />} exact />
      <Route path={`${basUrl}about-us/requisites`} element={<Requisites />} exact />
      <Route path={`${basUrl}about-us/docs`} element={<Docs />} exact />
      <Route path={`${basUrl}about-us/laws`} element={<Laws />} exact />
      <Route path={`${basUrl}about-us/regulatory`} element={<Regulatory />} exact />
      <Route path={`${basUrl}about-us/delegate`} element={<Delegate />} exact />
      <Route path={`${basUrl}about-us/delegate/:id`} element={<Agent />} exact />
      <Route path={`${basUrl}cooperation`} element={<Cooperation />} exact />
     {/*  <Route path={`${basUrl}*`} element={<NotFound />} /> */}
    </Routes>
  );
};

export default UseRoutes;