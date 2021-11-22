import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contactList, onDeleteContact }) => (
  <>
    <ul className="contactList">
      {contactList.map(({ id, name, number }) => (
        <li key={id} className={s.contactList__item}>
          {name} : {number}
          <button
            type="button"
            className={s.deleteButton}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

export default ContactList;
