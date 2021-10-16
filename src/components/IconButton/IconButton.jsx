import PropTypes from 'prop-types';
import s from './IconButton.module.css';

export default function IconButton({
  children = null,
  onClick = () => null,
  ...otherProps
}) {
  return (
    <button
      type="button"
      className={s.button}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};