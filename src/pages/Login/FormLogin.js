import { useForm } from 'react-hook-form';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_AUTH } from '../../services/Constant';
import { routesConfig } from '../../config';
import { useEffect } from 'react';

function FormLogin() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { keepLogin, setKeepLogin, login, setLogin } = useContext(AuthContext);

  const schema = yup
    .object({
      email: yup.string().required('Email is required').email('Email is not valid'),
      password: yup.string().min(4).max(16).required('Password is required'),
    })
    .required();
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (login) {
      navigate(routesConfig.home);
    }
  }, [login]);

  const handleLoginForm = (data) => {
    console.log(data);
    axios
      .post(API_AUTH + '/login', data)
      .then((res) => {
        console.log(res);
        setError('');
        setLogin(true);
        if (keepLogin) {
          localStorage.setItem('user', JSON.stringify(res.data));
          localStorage.setItem('keep', true);
          localStorage.setItem('login', JSON.stringify(true));
        } else {
          sessionStorage.setItem('user', JSON.stringify(res.data));
          localStorage.removeItem('keep');
        }

        navigate(routesConfig.home);
      })
      .catch((err) => {
        console.log(err);
        if (!err?.response) {
          setError('No Server Response');
        } else if (err.response?.status === 400) {
          setError(err.response?.data.message);
        } else if (err.response?.status === 401) {
          setError('Wrong Password');
        } else {
          setError('Login Failed');
        }
      });
  };

  const watchLoginId = watch('email');

  const handleCheckbox = () => {
    setKeepLogin(!keepLogin);
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(handleLoginForm)}>
        {/* Email */}
        <div>
          <label className="font-normal cursor-text">Email</label>
          <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
            <input
              className="w-full h-full px-3 outline-none bg-transparent mb-[2px]"
              {...register('email')}
              autoComplete="new-password"
            />
            <small className="text-[#F6465D]">{errors.email?.message}</small>

            {!!watchLoginId && (
              <button
                type="button"
                className=" w-5  text-[#B7BDC6] dark:text-[#5e6673] pr-5 absolute right-0 top-1/2 translate-y-[-46%] "
                onClick={() => setValue('email', '')}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            )}
          </div>
        </div>
        {/* password */}
        <div>
          <label className="font-normal cursor-text ">Password</label>
          <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
            <input
              className="w-full h-full px-3 outline-none bg-transparent mb-[2px]"
              type="password"
              autoComplete="new-password"
              {...register('password')}
            />
            <small className="text-[#F6465D]">{errors.password?.message}</small>
          </div>
        </div>
        {/* Checkbox */}
        <div className="flex items-center my-3">
          <input
            id="yellow-checkbox"
            type="checkbox"
            checked={keepLogin}
            onChange={handleCheckbox}
            className=" h-[14px] w-[14px] accent-primary  rounded cursor-pointer"
          />
          <label htmlFor="yellow-checkbox" className="ml-2 text-sm font-medium">
            Keep me signed in
          </label>
        </div>
        <div className="text-[#F6465D] mb-2">{error}</div>
        {/* button */}
        <Button
          type="submit"
          primary
          className={'w-full justify-center items-center whitespace-nowrap h-12 py-[6px] dark:text-textColor mt-2'}
        >
          Log In
        </Button>
      </form>
    </>
  );
}

export default FormLogin;
