import React from 'react';
import { NavLink } from 'react-router-dom';
import RevievsYandex from './Yandex/Yandex';
import RevievsVideo from './Video/Video';
import RevievsVk from './Vk/Vk';

const ReviewsMain = () => {
  return (
    <section className="reviews-main width-adaptiv">
      <h2 className="reviews-main__title">Отзывы</h2>
      <div className="reviews-main__box">
        <div className="reviews-main__ya-vk">
          <RevievsVk />
          <RevievsYandex />
        </div>
        <div className="reviews-main__video">
          <RevievsVideo />
        </div>
      </div>
      <NavLink className="reviews-main__link" to="/about-us/reviews">
        Смотреть все отзывы
      </NavLink>
    </section>
  );
};

export default ReviewsMain;
