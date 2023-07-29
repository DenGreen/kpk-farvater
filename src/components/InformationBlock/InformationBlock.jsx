import React, { useState } from 'react';

const InformationBlock = () => {
  const [descActive, setDescActive] = useState(false);
  return (
    <section className="information-block width-adaptiv">
      <div className="information-block__content">
        <p className="information-block__text">
          Займы с использованием материнского капитала – это займы, которые
          предоставляются на улучшение жилищных условий (покупка или
          строительство жилья) и погашаются за счет средств материнского
          капитала
        </p>
        <div>
          <button
            className="information-block__btn"
            onClick={() => setDescActive(descActive ? false : true)}
          >
            <span>Подробнее</span>
            <div className={`arrow-4 ${descActive && 'open'}`}>
              <span className="arrow-4-left"></span>
              <span className="arrow-4-right"></span>
            </div>
          </button>
          <ul
            className={`information-block__desc ${
              descActive && 'information-block__desc_active'
            }`}
          >
            <li>
              В соответствии с 256-ФЗ РФ предоставлять займы, которые погашаются
              за счет средств материнского капитала, могут кредитные
              потребительские кооперативы (КПК), с момента регистрации которых
              прошло не менее 3-х лет{' '}
            </li>
            <li>
              Объект недвижимости, приобретаемый за счет средств материнского
              капитала должен быть пригоден для проживания семьи с детьми
            </li>
            <li>
              Приобретенное за счет средств сертификата имущество должно быть
              оформлено в собственность всех членов семьи заемщика
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InformationBlock;
