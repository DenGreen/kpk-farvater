
const basUrl = "/kpk-farvater/"
export const navArrNew = [
  { breadcrumb: 'Главная', path: basUrl },

  { breadcrumb: 'Финансовые услуги', path: `${basUrl}services`, mainMenu: "services" },
  { breadcrumb: 'Заём под залог автомобиля', path: `${basUrl}services/zaym-car`, subMenu: "services" },
  {
    breadcrumb: 'Заём с использованием материнского капитала',
    path: `${basUrl}services/zaym-mat`, subMenu: "services"
  },
  { breadcrumb: 'Потребительский заём без обеспечения', path: `${basUrl}services/zaym-potreb`, subMenu: "services" },
  { breadcrumb: 'Заём под залог недвижимости', path: `${basUrl}services/zaym-estate`, subMenu: "services" },
  { breadcrumb: 'Сбережения', path: `${basUrl}services/for-savers`, subMenu: "services" },

  { breadcrumb: 'О кооперативе', path: `${basUrl}about-us`, mainMenu: "about-us"  },
  { breadcrumb: 'О нас', path: `${basUrl}about-us/base`, subMenu: "about-us" },
  { breadcrumb: 'Отзывы', path: `${basUrl}about-us/reviews`, subMenu: "about-us" },
  { breadcrumb: 'Новости', path: `${basUrl}about-us/news-report`, subMenu: "about-us" },
  { breadcrumb: 'Сотрудники', path: `${basUrl}about-us/staff`, subMenu: "about-us" },
  { breadcrumb: 'Реквизиты', path: `${basUrl}about-us/requisites`, subMenu: "about-us" },
  { breadcrumb: 'Документы', path: `${basUrl}about-us/docs`, subMenu: "about-us" },
  { breadcrumb: 'Представители по доверенности', path: `${basUrl}about-us/delegate`, subMenu: "about-us" },
  { breadcrumb: 'Законы и нормативные акты', path: `${basUrl}about-us/laws`, subMenu: "about-us" },
  { breadcrumb: 'Регулирующие органы', path: `${basUrl}about-us/regulatory`, subMenu: "about-us" },

  { breadcrumb: 'Сотрудничество', path: `${basUrl}cooperation` },
  { breadcrumb: 'Контакты', path: `${basUrl}contacts` },
];
