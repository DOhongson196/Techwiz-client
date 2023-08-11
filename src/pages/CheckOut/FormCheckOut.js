import { Link } from 'react-router-dom';
import { routesConfig } from '../../config';
import { LeftIcon } from '../../components/Icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';

function FormCheckOut({ setFormValue, setValid, formValue }) {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup
    .object({
      email: yup.string().required('Email is required').email('Email is not valid'),
      phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required'),
      customerName: yup.string().min(4).max(30).required('Password is required'),
      address: yup.string().min(8).max(30).required('Confirm Password is required'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customerName: formValue?.customerName || '',
      email: formValue.email || '',
      address: formValue.address || '',
      phone: formValue.phone || '',
    },
    resolver: yupResolver(schema),
  });

  const handleLoginForm = (data) => {
    setFormValue(data);
    setValid(true);
  };

  return (
    <>
      <form className="mt-4 text-textColor dark:text-textDarkMode text-sm" onSubmit={handleSubmit(handleLoginForm)}>
        {/* fullname */}
        <div>
          <label className="font-normal cursor-text">FullName</label>
          <div className="relative mt-1 w-11/12 leading-4 h-10 rounded border border-[#B7BDC6]  hover:border-[#c99400]  mb-5 ">
            <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" {...register('customerName')} />
            <small className="text-[#F6465D]"> {errors.customerName?.message}</small>
          </div>
        </div>
        {/* Email */}
        <div>
          <label className="font-normal cursor-text">Email</label>
          <div className="relative mt-1 w-11/12 leading-4 h-10 rounded border border-[#B7BDC6]  hover:border-[#c99400]  mb-5 ">
            <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" {...register('email')} />
            <small className="text-[#F6465D]"> {errors.email?.message}</small>
          </div>
        </div>
        {/* phone */}
        <div>
          <label className="font-normal cursor-text">Phone Number</label>
          <div className="relative mt-1 w-11/12 leading-4 h-10 rounded border border-[#B7BDC6]  hover:border-[#c99400]  mb-5 ">
            <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" {...register('phone')} />
            <small className="text-[#F6465D]"> {errors.phone?.message}</small>
          </div>
        </div>
        {/* address */}
        <div>
          <label className="font-normal cursor-text">Address</label>
          <div className="relative mt-1 w-11/12 leading-4 h-10 rounded border border-[#B7BDC6]  hover:border-[#c99400]  mb-5 ">
            <input className="w-full h-full px-3 outline-none bg-transparent mb-[2px]" {...register('address')} />
            <small className="text-[#F6465D]"> {errors.address?.message}</small>
          </div>
        </div>
        <Button
          primary
          className={'w-11/12 justify-center items-center whitespace-nowrap h-12 py-[6px] dark:text-textColor my-6'}
        >
          Method Payment
        </Button>
      </form>

      {/* back to cart */}
      <Link to={routesConfig.cart}>
        <span className="text-[#d0980b] flex items-center decoration-solid underline text-lg font-medium italic">
          <LeftIcon width="1.5rem" height="1.5rem" className={'fill-[#d0980b]'} />
          Back to cart
        </span>
      </Link>
    </>
  );
}

export default FormCheckOut;
