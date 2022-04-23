import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/fetchContacts';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { isFetching } = useGetAllContactsQuery();

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const getFilter = state => state.filter;
  const getContacts = state => {
    const data = state.contacts.queries['getAllContacts(undefined)'];
    return data?.data;
  };
  const getAllContacts = state => {
    const contacts = getContacts(state);
    const searchName = getFilter(state);

    const normalizeFilter = searchName.toLocaleLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const allContacts = useSelector(getAllContacts);

  return (
    <div className={s.container}>
      <ul className={s.ul}>
        {isFetching ?? allContacts.length < 1 ? (
          <p>We dont have contacts</p>
        ) : (
          allContacts.map(el => (
            <ContactItem
              key={nanoid()}
              name={el.name}
              number={el.number}
              id={el.id}
              isDeleting={isDeleting}
              deleteContact={deleteContact}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ContactList;
