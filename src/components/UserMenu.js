import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import defaultAvatar from '../image/defaultAvatar.png';
import Button from 'react-bootstrap/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <Button variant="outline-primary" type="button" onClick={onLogout}>
      Logout
    </Button>
  </div>
);

const mapStateToProprs = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProprs, mapDispatchToProps)(UserMenu);
