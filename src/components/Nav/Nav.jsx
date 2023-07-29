import React from 'react';
import { NavLink } from 'react-router-dom';
import { navArrNew } from '../../data/NavDb';

const Nav = () => {
  const changeDropDownMenu = (e) => {
    const subMenuActive = e.target
      .closest('.nav__item')
      .querySelector('.sub-menu_active'); //ищем активное subMenu
    const subMenuA = e.target
      .closest('.nav__item')
      .querySelector('.nav__sub-menu'); // смотрим на наличие у меню subMenu

    subMenuA && e.preventDefault(); // если subMenu есть, то отключаем переход на страницу

    // если есть активное subMenu, то выключаем его и завершаем выполнение функции
    if (subMenuActive) {
      subMenuActive.classList.remove('sub-menu_active');
      return;
    }

    closeSubMenu();

    subMenuA && subMenuA.classList.add('sub-menu_active'); // если у меню есть subMenu, то открываем его
  };

  const closeSubMenu = () => {
    const subMenuActiveGlobal = document.querySelector('.sub-menu_active'); // ищем активное subMenu в других менюшках

    // если есть активное subMenu в других менюшках, то закрываем его
    if (subMenuActiveGlobal) {
      subMenuActiveGlobal.classList.remove('sub-menu_active');
    }
  };

  const mouseCloseSubMenu = (e) => {
    closeSubMenu();
  };

  return (
    <section className="section-box">
      <nav>
        <ul className="nav width-adaptiv">
          {navArrNew.map((value, id) => {
            if (value.subMenu) return null;
            return (
              <li
                className={'nav__item '}
                key={id}
                onMouseLeave={mouseCloseSubMenu} // при потере фокуса, закрыть subMenu
              >
                <NavLink
                  to={value.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'nav__link nav__link_active nav__link_backgraund'
                      : 'nav__link nav__link_backgraund'
                  }
                  onClick={changeDropDownMenu}
                >
                  {value.breadcrumb}
                  {value.mainMenu && (
                    <svg
                      className="burger__main"
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="burger__line-1"
                        width="14"
                        height="2"
                        rx="1"
                        fill="#7D7D7D"
                      />
                      <rect
                        className="burger__line-2"
                        y="5"
                        width="14"
                        height="2"
                        rx="1"
                        fill="#7D7D7D"
                      />
                      <rect
                        className="burger__line-3"
                        y="10"
                        width="14"
                        height="2"
                        rx="1"
                        fill="#7D7D7D"
                      />
                    </svg>
                  )}
                </NavLink>
                {value.mainMenu && (
                  <ul className="nav__sub-menu">
                    {navArrNew.map((valueSub, id) => {
                      if (value.mainMenu === valueSub.subMenu) {
                        return (
                          <li className="nav__item-sub" key={id}>
                            <NavLink
                              to={valueSub.path}
                              onClick={closeSubMenu}
                              className={({ isActive }) =>
                                isActive
                                  ? 'nav__link nav__link_active'
                                  : 'nav__link'
                              }
                            >
                              {valueSub.breadcrumb}
                            </NavLink>
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
