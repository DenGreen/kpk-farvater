import React from 'react'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const PageHeader = ({pageHeaderDb}) => {
  return (
    <section className="page-header section-box">
      <div className="width-adaptiv">
        <Breadcrumbs />
        <div className="page-header__content">
          <h1 className="page-header__title">{pageHeaderDb}</h1>
        </div>
      </div>
    </section>
  )
}

export default PageHeader