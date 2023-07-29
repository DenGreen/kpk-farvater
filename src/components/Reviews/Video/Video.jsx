import React, { useState } from 'react';
import {RevievsVideoDb} from '../../../data/RevievsVideoDb';

const playSvg = (
  <svg
    width="65"
    height="65"
    className='revievs-video__svg-box'
    viewBox="0 0 65 65"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_278_2409)">
      <path
        d="M40.9952 24.8988C44.007 26.355 44.007 30.645 40.9952 32.1012L21.0478 41.7457C18.3916 43.0299 15.3066 41.0948 15.3066 38.1445L15.3066 18.8555C15.3066 15.9052 18.3916 13.9701 21.0478 15.2544L40.9952 24.8988Z"
        className="revievs-video__svg"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_278_2409"
        x="0.306641"
        y="0.850586"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_278_2409"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_278_2409"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const RevievsVideo = () => {
  const [active, setActive] = useState(false);
  const [url, setUrl] = useState(null);

  const modalState = (element) => {
    setActive(active ? false : true);
    !active && setUrl(element.target.closest('.revievs-video__box').dataset.url);
  };

  const modal = () => {
    return (
      <section className="modal" onClick={modalState}>
        <div className="modal__frame">
          {/* <span className="modal__frame-btn" onClick={modalState}></span> */}
          <iframe
            className="modal__frame-box"
            height="315"
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    );
  };

  return (
    <>
      <h3 className="revievs-video__title">Видео-отзывы</h3>
      <div className="revievs-video">
        {RevievsVideoDb.map((value, id) => {
          return <div key={id}
          className="revievs-video__box"
          onClick={modalState}
          data-url={value.url}
        >
          <img
            src={value.img}
            className="revievs-video__img"
            alt="клиет с отзывом"
          />
          {playSvg}
        </div>
        })}
        {active && modal()}
      </div>
    </>
  );
};

export default RevievsVideo;
