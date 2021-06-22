import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

// const mapStateToProprs = state => ({
//   name: authSelectors.getUserName(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProprs, mapDispatchToProps)(UserMenu);

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );
  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <Button variant="outline-primary" type="button" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
}
