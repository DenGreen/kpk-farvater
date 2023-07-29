import React, { useState, useEffect } from 'react';
import ModalApplication from '../ApplicationForm/ModalApplication/ModalApplication';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';

const Banner = ({ bannerImg, bannerArr }) => {
  const [activeModalApp, setActiveModalApp] = useState(false);
  const [widtActual, setWidthActual] = useState(window.innerWidth);
  const [actualImg, setActualImg] = useState(bannerImg.desc);
  const region = useSelector((state) => state.region.value);

  const formSubmit = () => {
    setActiveModalApp(activeModalApp ? false : true);
  };

  useEffect(() => {
    window.addEventListener('resize', () => setWidthActual(window.innerWidth));
    if (widtActual >= 1050) setActualImg(bannerImg.desc);
    if (widtActual < 1049 && widtActual > 600) setActualImg(bannerImg.tab);
    if (widtActual < 599) setActualImg(bannerImg.phone);
    return () =>
      window.addEventListener('resize', () =>
        setWidthActual(window.innerWidth)
      );
  }, [widtActual, bannerImg]);

  const style = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${actualImg})`,
  };

  return (
    <section className="banner section-box" style={style}>
      <div className="width-adaptiv">
        <Breadcrumbs />
        <div className="banner__content">
          <h1 className="banner__title">
            {region && bannerArr.titleRegion ? bannerArr.titleRegion[region] : bannerArr.title}
          </h1>
          <p className="banner__text">{bannerArr.text}</p>
          {activeModalApp && (
            <ModalApplication
              setActiveModalAppProps={() => setActiveModalApp()}
            />
          )}
          <Button
            text="Заказать звонок"
            classProps={'banner__btn'}
            call={formSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
