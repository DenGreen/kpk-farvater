import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader/PageHeader';
import Location from '../../components/Location/Location';
import { checklistDb, locationDb } from '../../data/ContactsDb';
import Checklist from '../../components/Checklist/Checklist';

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Контакты</title>
      </Helmet>
      <main className="main">
        <PageHeader pageHeaderDb={'Контакты'} />
        <Location locationDb={locationDb} />
        <Checklist checklistDb={checklistDb} />
      </main>
    </>
  );
};

export default Contacts;
