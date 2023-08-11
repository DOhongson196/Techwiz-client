import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [login, setLogin] = useState(localStorage.getItem('login') ? JSON.parse(localStorage.getItem('login')) : false);
  const [keepLogin, setKeepLogin] = useState(
    localStorage.getItem('keep') ? JSON.parse(localStorage.getItem('keep')) : true,
  );
  let contextData = {
    login: login,
    keepLogin: keepLogin,
    setLogin: setLogin,
    setKeepLogin: setKeepLogin,
  };
  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext, AuthProvider };
