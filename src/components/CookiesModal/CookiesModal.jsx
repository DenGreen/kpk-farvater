import { useState } from 'react';
import Button from '../Button/Button';
const doc = require('../../Doc/test.pdf');

const CookiesModal = () => {
  const [cookiesModalActive, setCookiesModalActive] = useState(true);

  const buttonSubmit = () => {
    setCookiesModalActive(false);
  };

  return (
    <section
      className={`cookies-modal ${
        !cookiesModalActive && 'cookies-modal_disabled'
      }`}
    >
      <p className="cookies-modal__desc">
        Для повышения удобства сайта мы используем cookie (куки). Это позволяет
        нам анализировать взаимодействие посетителей с сайтом и делать его
        лучше. Продолжая пользоваться сайтом, вы
        <a
          href={doc}
          className="cookies-modal__link"
          target="_blank"
          rel="noreferrer"
        >
          {' '}соглашаетесь с использованием файлов cookie
        </a>
        . Запретить обработку cookie можно в настройках безопасности вашего
        браузера.
      </p>
      <Button
        text={'СОГЛАСЕН'}
        classProps={`cookies-modal__btn`}
        call={buttonSubmit}
      />
    </section>
  );
};

export default CookiesModal;
