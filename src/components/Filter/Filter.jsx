import styles from './filter.module.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import contactSelectors from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className={styles.searchWrap}>
    <span className={styles.title}>Find contacts by name:</span>
    <input type="text" value={value} onChange={onChange} />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactSelectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
