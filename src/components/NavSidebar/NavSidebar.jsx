import React from 'react';
import { NavLink } from 'react-router-dom';
import { navArrNew } from '../../data/NavDb';

const NavSidebar = () => {
  return (
    <section className="nav-sidebar">
      <nav className="nav-sidebar__list">
        <ul className="nav-sidebar__list">
        {navArrNew.map((value, id) => {
          return value.subMenu === 'about-us' && <li className="nav-sidebar__item" key={id}>
              <NavLink
                to={value.path}
                className={({ isActive }) =>
                  isActive ? 'nav-sidebar__link nav-sidebar__link_active' : 'nav-sidebar__link'
                }
              >
                {value.breadcrumb}
              </NavLink>
            </li>;
        })}
        </ul>
      </nav>
    </section>
  );
};

export default NavSidebar;
