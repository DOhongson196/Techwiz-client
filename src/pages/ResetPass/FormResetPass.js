import PinInput from 'react-pin-input';
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

function FormResetPass({ email }) {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [pinC, setPin] = useState(Number);

  const schema = yup
    .object({
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
    const newData = { ...data, token: pinC, email: email };
    console.log(newData);
    axios
      .post(API_AUTH + '/pin', newData)
      .then((res) => {
        console.log(res);
        setOpen(true);
        navigate(routesConfig.login);
      })
      .catch((err) => {
        console.log(err);
        setError(err?.response?.data?.message);
        setValue('password', '');
        setValue('confirmPassword', '');
      });
  };

  const handleOnComplete = (value, index) => {
    console.log(value, index);
    setPin(value);
  };
  return (
    <div className="flex flex-col items-center">
      <div className=" mb-4">PIN code has been sent your email.Input PIN code below </div>

      <PinInput
        length={6}
        initialValue=""
        type="numeric"
        inputMode="number"
        style={{ padding: '10px', color: 'grey' }}
        inputStyle={{ borderColor: 'grey' }}
        inputFocusStyle={{ borderColor: '#c99400' }}
        onComplete={(value, index) => {
          handleOnComplete(value, index);
        }}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />

      <div className="w-[400px] mt-4">
        <form onSubmit={handleSubmit(handleLoginForm)}>
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
          <span className="text-[#F6465D] text-sm">{error}</span>
          <Button
            type="submit"
            primary
            className={'w-full justify-center items-center whitespace-nowrap h-12 py-[6px] dark:text-textColor mt-2'}
          >
            Submit
          </Button>
        </form>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} className={'top-[-100px]'}>
        <div className="text-2xl font-semibold mb-4"> Update Successful</div>
        <div className="max-w-[300px]">
          Your new password has been updated and you can now access your account using the new password
        </div>
        <button
          className="float-right px-6 py-2 mt-2 bg-primary text-textColor rounded font-semibold"
          onClick={handleConfirm}
        >
          Login now!
        </button>
      </Modal>
    </div>
  );
}

export default FormResetPass;
