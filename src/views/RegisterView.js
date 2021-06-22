// import React, { Component } from 'react';
// import { connect } from 'react-redux';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Button from 'react-bootstrap/Button';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

//a@qaz.com
//qwertyu

export default function RegisterView() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = user;

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    setUser({ name: '', email: '', password: '' });
  };

  return (
    <div>
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button type="submit" variant="outline-dark">
          Register
        </Button>
      </form>
    </div>
  );
}

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div>
//         <h1>Create Account</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//           autoComplete="off"
//         >
//           <label style={styles.label}>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             Email
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             Password
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <Button type="submit" variant="outline-dark">
//             Register
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }
// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
