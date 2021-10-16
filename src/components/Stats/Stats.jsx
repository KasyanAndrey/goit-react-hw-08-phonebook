import { useSelector } from 'react-redux';
import s from './Stats.module.css';
import { contactsSelectors } from '../../redux/contacts/';

export default function Stats() {
  const total = useSelector(contactsSelectors.getTotalContactsCount);

  return (
    <div className={s.container}>
      <p className={s.item}>
        <span className={s.label}>Total contacts: </span>
        <span className={s.value}>{total}</span>
      </p>
    </div>
  );
}