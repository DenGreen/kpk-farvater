import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import { bannerArr, docArr } from '../../data/ForSaversDb';
import ReviewsMain from '../../components/Reviews/ReviewsMain';
import StaticApplication from '../../components/ApplicationForm/StaticApplication/StaticApplication';
import imgD from '../../img/zaym/forD.jpg';
import imgT from '../../img/zaym/forT.jpg';
import imgP from '../../img/zaym/forP.jpg';
import DocConsideration from '../../components/DocConsideration/DocConsideration';

const ForSavers = () => {
  return (
    <>
      <Helmet>
        <title>Сбережения</title>
      </Helmet>
      <main className="main for-savers">
        <Banner
          bannerImg={{ desc: imgD, tab: imgT, phone: imgP }}
          bannerArr={bannerArr}
        />

        <section className="conditions-savers width-adaptiv">
          <h2 className="conditions-savers__title">Программа «Стартовая»</h2>
          <div className="conditions-savers__box">
            <ul className="conditions-savers__list">
              <li className="conditions-savers__item-header">
                <span></span>
                <span>от 3 до 12 месяцев</span>
                <span>от 13 до 24 месяцев</span>
                <span>от 25 до 36 месяцев</span>
              </li>
              <li className="conditions-savers__item-td4">
                <span className="conditions-savers__item-tr1">
                  Процентная ставка:
                </span>
                <span>8.25%</span>
                <span>8.625%</span>
                <span>9%</span>
              </li>
              <li className="conditions-savers__item-td2">
                <span className="conditions-savers__item-tr1">
                  Срок действия договора:
                </span>
                <span>от 3 (трех) месяцев до 36 (тридцать шесть) месяцев</span>
              </li>
              <li className="conditions-savers__item-td2">
                <span className="conditions-savers__item-tr1">
                  Минимальная сумма договора:
                </span>
                <span>10 000 (Десять тысяч) рублей</span>
              </li>
              <li className="conditions-savers__item-td2">
                <span className="conditions-savers__item-tr1">
                  Выплата компенсации:
                </span>
                <span>возможна ежемесячно, в конце срока</span>
              </li>
              <li className="conditions-savers__item-td2">
                <span className="conditions-savers__item-tr1">
                  Ставка досрочного расторжения:
                </span>
                <span>2% (два) процента годовых</span>
              </li>
              <li className="conditions-savers__item-td2">
                <span className="conditions-savers__item-tr1">Пополнения:</span>
                <span>
                  возможны, минимальная сумма пополнения 10 000 (Десять тысяч)
                  рублей
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="promising conditions-savers width-adaptiv">
          <h2 className="conditions-savers__title">
            Программа «Перспективная»
          </h2>
          <div className="conditions-savers__box">
            <ul className="conditions-savers__list">
              <li className="conditions-savers__item-header">
                <span></span>
                <span>от 12 до 24 месяцев</span>
                <span>36 месяцев</span>
              </li>
              <li className="conditions-savers__item-td3">
                <span className="conditions-savers__item-tr1">
                  Процентная ставка:
                </span>
                <span>9.375%</span>
                <span>10.125%</span>
              </li>
              <li className="conditions-savers__item-td2">
                <span className="conditions-savers__item-tr1">
                  Срок действия договора:
                </span>
                <span>от 12 (двенадцати) до 36 (тридцати шести) месяцев</span>
              </li>
              <li className="conditions-savers__item-td2">
                <span className="conditions-savers__item-tr1">
                  Минимальная сумма договора:
                </span>
                <span>50 000 (пятьдесят тысяч) рублей</span>
              </li>
              <li className="conditions-savers__item-td2">
                <span className="conditions-savers__item-tr1">
                  Выплата компенсации:
                </span>
                <span>ежегодная, в конце срока</span>
              </li>
              <li className="conditions-savers__item-td2">
                <span className="conditions-savers__item-tr1">
                  Ставка досрочного расторжения:
                </span>
                <span>2% (два) процента годовых</span>
              </li>
              <li className="conditions-savers__item-td2">
                <span className="conditions-savers__item-tr1">Пополнения:</span>
                <span>
                  возможны, минимальная сумма пополнения 10 000 (Десять тысяч)
                  рублей
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="for-savers-requirements width-adaptiv">
          <h2 className="for-savers-requirements__title">
            Требования к сберегателю
          </h2>
          <div className="for-savers-requirements__box">
            <ul className="for-savers-requirements__list">
              <li className="for-savers-requirements__item">
                Быть членом кредитного потребительского кооператива «Фарватер»
              </li>
              <li className="for-savers-requirements__item">
                Соблюдать требования Устава КПК «Фарватер»
              </li>
            </ul>
            <div className="for-savers-requirements__doc">
              <h3>Необходимые документы</h3>
              <span data-item={1}>Паспорт</span>
              <span data-item={2}>СНИЛС</span>
            </div>
          </div>
        </section>
        <DocConsideration
          docArr={docArr}
          title={'Порядок оформления'}
          descActive={false}
        />
        <ReviewsMain />
        <StaticApplication />
      </main>
    </>
  );
};

export default ForSavers;
