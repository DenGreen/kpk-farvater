import React from 'react'
import ApplicationForm from '../ApplicationForm';

const StaticApplication = () => {
  return (
    <section className="application-form width-adaptiv">
      <h2 className="application-form__title">
      Получите бесплатную консультацию!
      </h2>
        <ApplicationForm />
    </section>
  )
}

export default StaticApplication