export const delegateDb = [
  {
    breadcrumb: 'Непряхин Сергей Викторович',
    desc: `<h4>Непряхин Сергей Викторович</h4>
      Сопровождение сделок КПК «Фарватер»`,
    img: [
      { img: '/kpk-farvater/img/Delegate/1.jpg', alt: 'Доверенность' },
      { img: '/kpk-farvater/img/Delegate/1.jpg', alt: 'Доверенность' },
    ],
    email: 'test@yandex.ru ',
    phone: '+7 (000) 000-00-00',
  },
  {
    breadcrumb: 'Непряхин Сергей Викторович',
    desc: `<h4>Непряхин Сергей Викторович</h4>
      Сопровождение сделок КПК «Фарватер»`,
    img: [
      { img: '/kpk-farvater/img/Delegate/1.jpg', alt: 'Доверенность' },
      { img: '/kpk-farvater/img/Delegate/1.jpg', alt: 'Доверенность' },
    ],
    email: 'test@yandex.ru ',
    phone: '+7 (000) 000-00-00',
  }
];

delegateDb.forEach((value, id) => {
  value.path = `/kpk-farvater/about-us/delegate/agent-${+id + 1}`;
  value.id = 'agent-' + id + 1;
});
