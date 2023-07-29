import React, { useState } from 'react';
import Button from '../Button/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import politic from '../../Doc/test.pdf';

const optionMessage = {
  position: 'top-right',
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

const ApplicationForm = ({ setActiveModalAppProps = null, text = null }) => {
  const [checked, setChecked] = useState(false);

  const [form, setForm] = useState({
    tel: '',
    name: '',
  });

  const handleClick = () => setChecked(!checked);

  const changeHandler = (event) => {
    if (event.target.name === 'tel') {
      if (event.target.value.length < 15) {
        setForm({ ...form, [event.target.name]: event.target.value });
      }
    }

    if (event.target.name === 'name') {
      event.target.value.length < 50 &&
        setForm({ ...form, [event.target.name]: event.target.value });
    }
  };

  const buttonDisabledMessage = () => {};

  const validationForm = () => {
    if (form.name.length < 1) {
      toast.warn('Введите своё имя', optionMessage);
      return false;
    }

    if (form.tel.length < 1) {
      toast.warn('Введите свой номер телефона', optionMessage);
      return false;
    }
    return true;
  };

  const formSubmit = () => {
    let validationStatus = validationForm();
    if (validationStatus) {
      if (setActiveModalAppProps) setActiveModalAppProps(false);
      setForm({ tel: '', name: '' });

      axios
        .post('/php/form-call.php', form)
        .then(function (response) {
          toast.success('Сообщение успешно доставленно!', optionMessage);
        })
        .catch(function () {
          toast.error('Произошла ошибка, попробуйте позже!', optionMessage);
        });
    }
  };

  return (
    <>
      <form className="application-form__form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ваше имя"
          className="application-form__name"
          value={form.name}
          onChange={changeHandler}
        />
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Номер телефона"
          className="application-form__tel"
          value={form.tel}
          onChange={changeHandler}
        />
        <Button
          text={text ? text : 'Заказать звонок'}
          classProps={`application-form__btn ${!checked && 'btn_disabled'}`}
          call={!checked ? buttonDisabledMessage : formSubmit}
        />
      </form>
      <div className="application-form__disc">
        <input
          id="polit"
          name="polit"
          className="application-form__checkbox custom-checkbox"
          type="checkbox"
          onChange={handleClick}
          checked={checked}
        />
        <label className="application-form__label" htmlFor="polit"></label>
        <div className="application-form__text">
          Нажимая на сайте кнопку «{text ? text : 'Заказать звонок'}», я даю свое согласие на
          обработку моих персональных данных в соответствии с Федеральным
          законом от 27.07.2006 № 152-ФЗ «О персональных данных», на условиях и
          в целях, определенных в {' '}
          <a
            className="application-form__link"
            target="_blank"
            rel="noreferrer"
            href={politic}
          >
            Согласии на обработку персональных данных
          пользователей сайта.
          </a>
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;
