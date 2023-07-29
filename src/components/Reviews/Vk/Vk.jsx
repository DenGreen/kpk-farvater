import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VKImg from '../../../img/VK.png';

const finallRevievsVK = (arrayVK) => {
  const revievsVK = arrayVK.revievs.response;
  const avatarsVK = arrayVK.avatars.response;
  const request = [];

  const searchAvatar = (from_id) => {
    let avatarFull = {};
    const groups = revievsVK.groups;

    if (groups[0].id === Math.abs(from_id)) {
      return groups[0];
    }

    for (let link of revievsVK.profiles) {
      if (link.id === Math.abs(from_id))
        avatarFull.screen_name = link.screen_name;
    }

    for (let avatar of avatarsVK) {
      if (avatar.id === Math.abs(from_id))
        avatarFull = { ...avatarFull, ...avatar };
    }

    return avatarFull;
  };

  const filterInvestment = (arr) => {
    let investment = { type: 'text', photo: [] };
    const newArrAttachments = new Array(arr.attachments);

    if (newArrAttachments[0]) {
      if (newArrAttachments[0][0].type === 'video') {
        investment.type = 'video';
      }

      if (newArrAttachments[0][0].photo) {
        newArrAttachments[0].forEach((value) => {
          investment.type = 'photo';
          investment.photo.push(value.photo.sizes[4].url);
        });
      }
    }
    return investment;
  };

  const decodingDate = (codingDate) => {
    const date = new Date(codingDate * 1000);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let years = date.getFullYear();
    day = day + '';
    month = month + '';
    years = years + '';

    if (day.length < 2) day = '0' + day;

    if (month.length < 2) month = '0' + month;

    return `${day}.${month}.${years}`;
  };

  const formateText = (text) => {
    const simvolOne = text.indexOf('[');
    const simvolTwo = text.indexOf('|');

    if (simvolOne !== -1) {
      const slice = text.slice(simvolOne, simvolTwo + 1);
      const repl = text.replace(slice, '');
      const replThree = repl.replace(']', '');
      return replThree;
    }

    return text;
  };

  revievsVK.items.forEach((value) => {
    const avatar = searchAvatar(value.from_id);
    const investment = filterInvestment(value);
    const text = formateText(value.text);
    const revievsNew = { ...value, date: decodingDate(value.date) };
    request.push({ ...avatar, ...investment, ...revievsNew, text: text });
  });

  return request.reverse();
};





const ReviewsVk = () => {
  const [revievsVK, setRevievsVK] = useState(null);

  useEffect(() => {
    axios
      .get('/php/vk-api.php')
      .then(function (response) {
        setRevievsVK(finallRevievsVK(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="revievs-vk">
      <img
        className="revievs-vk__logo"
        src={VKImg}
        alt="Логотип Вконтакте"
      />
      <ul className="revievs-vk__list">
      {revievsVK && (revievsVK.map((value) => {
          return (
            !(value.type === 'video') && (
              <li className="revievs-vk__item" key={value.id}>
                <div className="revievs-vk__header">
                  <a
                    href={`https://vk.com/${value.screen_name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="revievs-vk__link-img"
                  >
                    <img
                      src={value.photo_200}
                      alt=""
                      className="revievs-vk__img"
                    />
                  </a>
                  <a
                    href={`https://vk.com/${value.screen_name}`}
                    className="revievs-vk__name"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {(value.first_name &&
                      value.first_name + ' ' + value.last_name) ||
                      'ФАРВАТЕР | Материнский капитал до 3 лет'}
                  </a>
                  <span className="revievs-vk__date">{value.date}</span>
                </div>
                {value.text && (
                  <p className="revievs-vk__main-text">{value.text}</p>
                )}
                {value.photo && (
                  <div className="revievs-vk__main-img-box">
                    {value.photo.map((photo, id) => {
                      return (
                        <a
                          href={photo}
                          key={id}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={photo}
                            alt=""
                            className="revievs-vk__main-img"
                          />
                        </a>
                      );
                    })}
                  </div>
                )}
              </li>
            )
          );
        }))}
      </ul>
    </div>
  );
};

export default ReviewsVk;
