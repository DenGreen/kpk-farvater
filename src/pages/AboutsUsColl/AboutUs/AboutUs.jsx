import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../../components/PageHeader/PageHeader';
//import { } from '../../data/AboutUsDb';
import NavSidebar from '../../../components/NavSidebar/NavSidebar';

const AboutUs = () => {
  document.title = 'О нас';
  return (
    <>
      <Helmet>
        <title>О нас</title>
      </Helmet>
      <main className="main">
        <PageHeader pageHeaderDb={'О нас'} />
        <section className="abouts-us-coll about-us width-adaptiv">
          <div className="abouts-us-coll__nav">
            <NavSidebar />
          </div>
          <div className="abouts-us-coll__content">
            <p className="about-us__content-text">
              Кредитный потребительский кооператив «Фарватер» зарегистрирован в
              2012 году. Юридический адрес КПК
              <br />
              <br />
              Кредитный потребительский кооператив работает на основе 190-ФЗ,
              cостоит в реестре Центрального Банка РФ, является членом
              ассоциации "Саморегулируемая организация кредитных потребительских
              кооперативов "Кооперативные Финансы".
              <br />
              <br />
              Председатель правления — 
              <br />
              <br />
              Члены Правления:
              <br />
              <br />
              - 
              <br />
              <br />
              - 
              <br />
              <br />
              Кооператив занимается предоставлением заёмов по программам:
              «Потребительский заём без обеспечения» ,«Заём под залог
              автомобиля», «Заём под залог недвижимости», «Заём с использованием
              материнского капитала».
              <br />
              <br />
              Члены кредитного кооператива (пайщики) несут солидарную
              субсидиарную ответственность по своим обязательствам в пределах
              невнесенной части дополнительного взноса каждого из членов
              кредитного кооператива (пайщиков).{' '}
            </p>
            <div className="about-us__content-quantity quantity">
              <h2 className="quantity__title">Кооператив в цифрах</h2>
              <ul className="quantity__list">
                <li className="quantity__item">
                  <span className="quantity__value">1300+</span>
                  <span className="quantity__desc">заёмов выдано</span>
                </li>
                <li className="quantity__item">
                  <span className="quantity__value">10</span>
                  <span className="quantity__desc">лет успешной работы</span>
                </li>
              </ul>
            </div>
            <div className="history-kpk">
              <h2 className="history-kpk__title">
                История развития КПК «Фарватер»
              </h2>
              <ul className="history-kpk__list">
                <li className="history-kpk__item">
                  <span className="history-kpk__badge">2012 г.</span>
                  <span className="history-kpk__text">
                    Государственная регистрации кооператива, начало выдачи
                    потребительских заёмов
                  </span>
                </li>
                <li className="history-kpk__item">
                  <span className="history-kpk__badge">2016 г.</span>
                  <span className="history-kpk__text">
                    Кооператив стал предоставлять своим членам заёмы с
                    использованием материнского капитала, заёмы под залог
                    недвижимости
                  </span>
                </li>
                <li className="history-kpk__item">
                  <span className="history-kpk__badge">2017 г.</span>
                  <span className="history-kpk__text">
                    Старт предоставления заёмов под залог автомобиля
                  </span>
                </li>
                <li className="history-kpk__item">
                  <span className="history-kpk__badge">2019 г.</span>
                  <span className="history-kpk__text">
                    Открытие обособленного подразделения в г
                  </span>
                </li>
              </ul>
            </div>
            <p className="about-us__desc">
              Потребители финансовых услуг вправе обратиться в Службу
              финансового уполномоченного для судебного урегулирования споров
              имущественного характера между потребителями финансовых услуг и
              финансовыми организациями, если размер требования не превышает 500
              000 рублей.
              <br />
              <br />
              Официальный сайт:{' '}
              <a
                className="about-us__desc-link"
                href=" https://finombudsman.ru/"
              >
                https://finombudsman.ru/
              </a>
              <br />
              <br />
              Адрес : 119017, г. Москва, Старомонетный пер., дом 3
              <br />
              <br />
              Контактный центр : 8 (800) 200-00-10 Эл. почта :
              sudzapros@finombudsman.ru
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
