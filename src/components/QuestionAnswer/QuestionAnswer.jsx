import React, { useState } from 'react';

const QuestionAnswerItem = (value, id) => {
  const [active, setActive] = useState(false);

  const changeActive = () => {
    setActive(active ? false : true);
  };

  return (
    <li className="question-answer__item" key={id}>
      <div
        className="question-answer__item-title"
        onClick={() => changeActive()}
      >
        <span className="question-answer__item-caption">
        {value.question}
        </span>
        <span className="question-answer__item-svg">
            <svg
            className={`question-answer__item-svg-vert ${active ? "question-answer__item-svg-vert_active" : ""}`}
            width="3"
            height="18"
            viewBox="0 0 3 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 1V8.75V16.5"
              stroke="#41426D"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="question-answer__item-svg-gor"
            width="18"
            height="3"
            viewBox="0 0 18 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.75L8.75 1.75L16.5 1.75"
              stroke="#41426D"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
      <span
        className={`question-answer__item-text ${
          active ? 'question-answer__item-text_active' : ''
        }`}
        dangerouslySetInnerHTML={{ __html: value.answer }}
      >
      </span>
    </li>
  );
};

const QuestionAnswer = ({ questionAnswer }) => {
  return (
    <section className="question-answer width-adaptiv">
      <h2 className="question-answer__title">{questionAnswer.title}</h2>
      <ul className="question-answer__list">
        {questionAnswer.collection.map((value, id) => {
          return QuestionAnswerItem(value, id);
        })}
      </ul>
    </section>
  );
};

export default QuestionAnswer;
