import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { routesConfig } from './index';

const PrivateRoute = () => {
  //const auth = true;
  const { keepLogin } = useContext(AuthContext);
  const roles = ['ROLE_CUSTOMER'];
  let user = keepLogin ? JSON.parse(localStorage.getItem('user')) : JSON.parse(sessionStorage.getItem('user'));
  return user?.roles?.find((role) => roles.includes(role.authority)) ? (
    <Outlet />
  ) : user?.roles ? (
    <Navigate to={routesConfig.authority} />
  ) : (
    <Navigate to={routesConfig.login} />
  );
  // return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
