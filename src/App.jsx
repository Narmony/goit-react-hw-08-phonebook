import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';

import AppBar from './components/AppBar.js';
import Container from './components/Container';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterView" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "LoginView" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "ContactsView" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect');
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Download...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }
//   render() {
//     return (
//       <Container>
//         <AppBar />

//         <Suspense fallback={<p>Download...</p>}>
//           <Switch>
//             <PublicRoute exact path="/" component={HomeView} />
//             <PublicRoute
//               path="/register"
//               restricted
//               redirectTo="/contacts"
//               component={RegisterView}
//             />
//             <PublicRoute
//               path="/login"
//               restricted
//               redirectTo="/contacts"
//               component={LoginView}
//             />
//             <PrivateRoute
//               path="/contacts"
//               redirectTo="/login"
//               component={ContactsView}
//             />
//           </Switch>
//         </Suspense>
//       </Container>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
