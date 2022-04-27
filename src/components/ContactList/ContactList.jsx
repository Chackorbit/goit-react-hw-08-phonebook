import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';

import { contactsOperations } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();

  //   const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const getFilter = state => state.filter;
  const getContacts = state => state.contacts;

  const getAllContacts = state => {
    const contacts = getContacts(state);
    const searchName = getFilter(state);

    const normalizeFilter = searchName.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);

  const allContacts = useSelector(getAllContacts);

  return (
    <div className={s.container}>
      <ul className={s.ul}>
        {allContacts?.length < 1 ? (
          <p>We dont have contacts</p>
        ) : (
          allContacts?.map(el => (
            <ContactItem
              key={nanoid()}
              name={el.name}
              number={el.number}
              id={el.id}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ContactList;
