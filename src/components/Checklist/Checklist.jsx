import React from 'react';

const Checklist = ({ checklistDb }) => {
  return (
    <section className="checklist width-adaptiv">
      <h3 className="checklist__title">{checklistDb.title}</h3>
      <ul className="checklist__list">
        {checklistDb.collection.map((value, id) => {
          return <li className="checklist__item" key={id}>{value}</li>;
        })}
      </ul>
    </section>
  );
};

export default Checklist;
