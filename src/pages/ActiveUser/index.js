import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { routesConfig } from '../../config';
import { API_AUTH } from '../../services/Constant';
import {} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context';

function ActiveUser() {
  const token = useParams();
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  console.log(token.confirm);

  const { login } = useContext(AuthContext);
  useEffect(() => {
    const fectchApi = async () => {
      if (login) {
        return navigate(routesConfig.home);
      }
      try {
        const response = await axios.get(API_AUTH + '/confirm?token=' + token.confirm);
        console.log(response);
        setSuccess(true);
        const timer = setTimeout(() => {
          navigate(routesConfig.login);
        }, 5000);

        return () => clearTimeout(timer);
      } catch (error) {
        console.log(error);
        setSuccess(false);
        setErr(error?.response?.data?.message);
      }
    };

    fectchApi();
  }, []);

  return (
    <div className="flex min-h-[87.2vh] flex-col bg-[#FFFFFF] dark:bg-bgDarkMode">
      {success ? (
        <div className="mt-20 mx-auto">
          <div className="flex text-textColor dark:text-textDarkMode w-full justify-center text-9xl mb-20">
            <FontAwesomeIcon icon={faHouseUser} />
          </div>
          <div className="text-textColor flex justify-center mb-10 text-3xl  dark:text-textDarkMode font-bold">
            Active successfully!
          </div>
          <div className="text-textColor text-xl mx-auto dark:text-textDarkMode w-[800px] font-semibold">
            We are delighted to inform you that your account has been successfully activated. Please{' '}
            <span className="text-[#d0980b] decoration-solid  underline">
              <Link to={routesConfig.home}>Click here!</Link>
            </span>{' '}
            to return to login or you will be automatically redirected in 5 seconds.
          </div>
        </div>
      ) : (
        <div className="mt-20 mx-auto">
          <div className="text-textColor text-xl mx-auto dark:text-textDarkMode w-[800px] font-semibold">
            We regret to inform you that the activation of your account has failed. We apologize for any inconvenience
            caused.
            <div className="text-red-600">Error {err}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActiveUser;
