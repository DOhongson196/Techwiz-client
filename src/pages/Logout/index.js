import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { routesConfig } from '../../config';
import { AuthContext } from '../../context';

function LogOut() {
  const { keepLogin, setKeepLogin, login, setLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (login) {
      keepLogin ? localStorage.removeItem('user') : sessionStorage.removeItem('user');
      localStorage.setItem('login', false);
      localStorage.removeItem('keep');
      setKeepLogin(true);
      setLogin(false);
      navigate(routesConfig.home);
    } else {
      navigate(routesConfig.home);
    }
  }, []);

  return <></>;
}

export default LogOut;
