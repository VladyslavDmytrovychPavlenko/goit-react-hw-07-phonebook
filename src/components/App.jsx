import ContactForm from './ContactsForm/ContactForm';
import ContactList from './ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import style from './App.module.css';
import React from 'react';

function App() {
  return (
    <div className={style['App']}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
