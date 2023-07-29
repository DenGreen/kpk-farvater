import React from 'react';

const Location = ({ locationDb }) => {
  return (
    <section className="location width-adaptiv">
      <div className="location__box">
        <ul className="location__list">
          {locationDb.map((value, id) => {
            return (
              <li className="location__item" key={id}>
                <h3 className="location__title">{value.title}</h3>
                <span className="location__adres">{value.adres}</span>
                <span className="location__mode">{value.mode}</span>

                <div className="location__info">
                  <a
                    href={`tel:${value.phone.link}`}
                    className="location__phone"
                  >
                    {value.phone.publ}
                  </a>
                  <a href={`mailto:${value.email}`} className="location__email">
                    {value.email}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="location__map">
          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/-/CCUbvDsPxD"
            width="100%"
            height="100%"
            frameBorder="1"
            allowFullScreen={true}
            style={{ position: 'relative', minHeight: '480px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
