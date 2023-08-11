import axios from 'axios';
import Button from '../../components/Button';
import FormResetPass from './FormResetPass';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useState } from 'react';
import * as yup from 'yup';
import { API_AUTH } from '../../services/Constant';
import { routesConfig } from '../../config';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';

function ResetPass() {
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  useEffect(() => {
    if (login) {
      navigate(routesConfig.home);
    }
  }, [login]);

  const schema = yup
    .object({
      email: yup.string().required('Email is required').email('Email is not valid'),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLoginForm = (data) => {
    console.log(data.email);
    axios
      .get(API_AUTH + '/pin?email=' + data.email)
      .then((res) => {
        console.log(res);
        setError('');
        setEmail(data.email);
        setPage(2);
      })
      .catch((err) => {
        console.log(err);
        setError(error?.response?.data?.message);
      });
  };
  return (
    <div className="flex flex-col mt-32 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode">
      <div className=" flex-col max-w-screen-xl mx-auto w-full text-textColor dark:text-textDarkMode">
        <div className="flex justify-center  my-10 text-3xl font-semibold mx-auto">Reset Password</div>
        {page === 1 && (
          <div className="max-w-[420px] mx-auto">
            <form onSubmit={handleSubmit(handleLoginForm)}>
              {/* Email */}
              <div>
                <div className="font-normal cursor-text mb-4">
                  We will send your password reset PIN code to your email.
                </div>
                <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
                  <input
                    className="w-full h-full px-3 outline-none bg-transparent mb-[2px]"
                    {...register('email')}
                    placeholder="Enter your email"
                  />
                  <small className="text-[#F6465D]">{errors.email?.message}</small>
                </div>
              </div>
              <div className="text-[#F6465D] mb-2">{error}</div>
              {/* button */}
              <Button
                type="submit"
                primary
                className={
                  'w-full justify-center items-center whitespace-nowrap h-12 py-[6px] dark:text-textColor mt-4'
                }
              >
                Send email
              </Button>
            </form>
          </div>
        )}
        {page === 2 && <FormResetPass email={email} />}
      </div>
    </div>
  );
}

export default ResetPass;
