import s from './ContactItem.module.css';
import ButtonDelete from 'components/ButtonDelete/ButtonDelete';

const ContactItem = ({ deleteContact, name, number, id, isDeleting }) => {
  return (
    <li className={s.li}>
      {name}: {number}
      <ButtonDelete
        deleteContact={deleteContact}
        id={id}
        btnLoading={isDeleting}
      />
    </li>
  );
};

export default ContactItem;
