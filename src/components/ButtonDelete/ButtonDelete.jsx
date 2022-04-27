import { AiOutlineClose } from 'react-icons/ai';
import { TailSpin } from 'react-loader-spinner';
import s from './ButtonDelete.module.css';
import { contactsOperations } from 'redux/contacts';
import { useDispatch } from 'react-redux';

const ButtonDelete = ({ id, btnLoading }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={s.btnDelete}
      disabled={btnLoading}
      onClick={() => dispatch(contactsOperations.removeContact(id))}
    >
      {btnLoading ? <TailSpin height={12} width={12} /> : <AiOutlineClose />}
    </button>
  );
};

export default ButtonDelete;
