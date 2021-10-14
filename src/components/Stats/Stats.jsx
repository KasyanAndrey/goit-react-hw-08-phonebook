import { useSelector } from 'react-redux';
import styles from './Stats.module.css';
import { contactsSelectors } from '../../redux/contacts/';

export default function Stats() {
  const total = useSelector(contactsSelectors.getTotalContactsCount);

  return (
    <div className={styles.container}>
      <p className={styles.item}>
        <span className={styles.value}>{total}</span>
        <span className={styles.label}>Всего контактов</span>
      </p>
    </div>
  );
}