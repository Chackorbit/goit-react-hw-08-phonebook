import s from './ContactItem.module.css';
import ButtonDelete from 'components/ButtonDelete/ButtonDelete';

const ContactItem = ({ name, number, id }) => {
  return (
    <li className={s.li}>
      {name}: {number}
      <ButtonDelete id={id} />
    </li>
  );
};

export default ContactItem;
