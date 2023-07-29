import React from 'react';
import { Link } from 'react-router-dom';
import { navArrNew } from '../../data/NavDb';
import { newsDb } from "../../data/NewsDb";
import { delegateDb } from '../../data/DelegateDb';
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  const breadcrumbsCollection = []
  navArrNew.forEach((value) => breadcrumbsCollection.push(value))
  newsDb.forEach((value) => breadcrumbsCollection.push(value))
  delegateDb.forEach((value) => breadcrumbsCollection.push(value))

  const breadcrumbs = useBreadcrumbs(breadcrumbsCollection);

  return (
    <>
      {breadcrumbs.length > 1 && <ul className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }, id) => {
        return (
            <li className="breadcrumbs__item" key={id}>
            {id !== 0 && <span className="breadcrumbs__decor">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999848 1L6.51709 6.5L0.999848 12"
                  stroke="#F8F8F8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>}
            <Link to={'' + match.pathname} className="breadcrumbs__link">
              {breadcrumb}
            </Link>
          </li>
        )
      })}
    </ul>}
    </>
  );
};

/* const Breadcrumbs = () => {
  const url = window.location.href.split('/');
  url.splice(0, 2);

const arrBreadcrumbs = [];

  const searchMenu = () => {
    for (let index = 0; index < url.length; index++) {
        const element = url[index];

        navArr.forEach((value) => {
            if(value.link === element) arrBreadcrumbs.push({text: value.text, link: value.link})
            if(value.submenu) {
                value.submenu.forEach((valueSub) => {
                    if(valueSub.subLink === element) arrBreadcrumbs.push({text: valueSub.text, link: `${valueSub.link}/${valueSub.subLink}`})
                })
            }
        });
        
    }
  };

  searchMenu()

  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item">
        <Link to='/' className="breadcrumbs__link">
          Главная
        </Link>
      </li>
      {arrBreadcrumbs.map((value, id) => {
        return (
            <li className="breadcrumbs__item" key={id}>
            <span className="breadcrumbs__decor">
              <svg
                width="18"
                height="12"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999848 1L6.51709 6.5L0.999848 12"
                  stroke="#F8F8F8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <Link to={'/' + value.link} className="breadcrumbs__link">
              {value.text}
            </Link>
          </li>
        )
      })}
    </ul>
  );
}; */

export default Breadcrumbs;
