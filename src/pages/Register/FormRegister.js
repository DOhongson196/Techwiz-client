import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_AUTH } from '../../services/Constant';
import Modal from '../../components/Modal';
import { routesConfig } from '../../config';

function FormRegister() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup
    .object({
      email: yup.string().required('Email is required').email('Email is not valid'),
      phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required'),
      password: yup.string().min(4).max(16).required('Password is required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Confirm Password must match')
        .required('Confirm Password is required'),
    })
    .required();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleConfirm = () => {
    navigate(routesConfig.login);
  };

  const handleLoginForm = (data) => {
    axios
      .post(API_AUTH + '/signup', data)
      .then((res) => {
        console.log(res);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
        if (!err?.response) {
          setError('No Server Response');
        } else if (err.response?.status === 400) {
          setError(err.response?.data.message);
        } else {
          setError('Register Failed');
        }
        setValue('email', '');
        setValue('password', '');
        setValue('phone', '');
        setValue('confirmPassword', '');
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLoginForm)}>
        {/* Email*/}
        <div>
          <label className="font-normal cursor-text">Email</label>
          <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
            <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" {...register('email')} />
            <small className="text-[#F6465D]"> {errors.email?.message}</small>
          </div>
        </div>
        {/* Phone */}
        <div>
          <label className="font-normal cursor-text">Phone Number</label>
          <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
            <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" {...register('phone')} />
            <small className="text-[#F6465D]">{errors.phone?.message}</small>
          </div>
        </div>
        {/* password */}
        <div>
          <label className="font-normal cursor-text">Password</label>
          <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
            <input
              className="w-full h-full px-3 outline-none bg-transparent mb-[2px]"
              autoComplete="off"
              type="password"
              {...register('password')}
            />
            <small className="text-[#F6465D]">{errors.password?.message}</small>
          </div>
        </div>
        {/* confirm password */}
        <div>
          <label className="font-normal cursor-text">Confirm password</label>
          <div className="relative mt-1 w-full leading-4 h-12 rounded border border-[#eaecef] dark:border-[#474d57] hover:border-[#c99400] dark:hover:border-primary mb-5 ">
            <input
              className="w-full h-full px-3 outline-none bg-transparent mb-[2px]"
              autoComplete="off"
              type="password"
              {...register('confirmPassword')}
            />
            <small className="text-[#F6465D]">{errors.confirmPassword?.message}</small>
          </div>
        </div>
        {/* button */}
        <span className="text-[#F6465D] ">{error}</span>
        <Button
          type="submit"
          primary
          className={'w-full justify-center items-center whitespace-nowrap h-12 py-[6px] dark:text-textColor mt-2'}
        >
          Register
        </Button>
      </form>
      <Modal open={open} onClose={() => setOpen(false)} className={'top-[-100px]'}>
      <div className="text-2xl font-semibold mb-4">Registration successful! </div>
        <div className="max-w-[300px] text-base mb-4">
          Successful account registration, please check your email to activate account!
        </div>
        <button
          className="float-right px-6 py-2 mt-2 bg-primary text-textColor rounded font-semibold"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </Modal>
    </>
  );
}

export default FormRegister;
