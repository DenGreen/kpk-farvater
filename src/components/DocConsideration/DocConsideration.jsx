import React from 'react'

const DocConsideration = ({docArr, title, descActive = true}) => {
  return (
    <section className="doc-consideration width-adaptiv">
        <h2 className="doc-consideration__title">{title ? title : 'Документы для рассмотрения заявки:'}</h2>
        <ul className="doc-consideration__list">
            {docArr.map((value, id) => {
                return <li className="doc-consideration__item" data-item={id + 1} key={id}>{value}</li>
            })}
        </ul>
        {descActive && <span className="doc-consideration__desc">В некоторых случаях необходимо предоставить дополнительные документы </span>}
    </section>
  )
}

export default DocConsideration