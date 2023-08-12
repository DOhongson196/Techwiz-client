import images from '../../assets/images';
import Button from '../../components/Button';

import { Link } from 'react-router-dom';
import routesConfig from '../../config/routes';
import FormLogin from './FormLogin';

function Login() {
  return (
    <div className="flex min-h-[87.2vh] flex-col bg-[#FFFFFF] dark:bg-bgDarkMode">
      <div className="flex mt-10 mx-auto w-full items-center justify-center">
        <div className="flex flex-col p-8  w-[440px] shadow-xl text-sm rounded-xl  text-textColor  dark:text-textDarkMode ">
          {/* heading */}
          <div className="  my-10 text-3xl font-semibold">VILLARREAL Login</div>
          {/* input */}
          <FormLogin />
          {/* or */}
          <div className="my-4 flex items-center">
            <div className="h-[1px] flex-1 bg-[#eaecef] dark:bg-[#474d57]"></div>
            <div className="mx-6 text-[#848e9c]">or</div>
            <div className="h-[1px] flex-1 bg-[#eaecef] dark:bg-[#474d57]"></div>
          </div>
          {/* button google */}
          <Button
            className={
              'flex bg-[#eaecef] dark:bg-[#474d57] justify-center items-center whitespace-nowrap h-12 px-[12px] py-[6px] text-textColor rounded  dark:text-textDarkMode hover:opacity-80'
            }
          >
            <img className="w-5 select-none mr-3 block" src={images.logoGoogle} alt="logo google" />
            Continue with Google
          </Button>
          <div className="flex justify-between">
            <Link to={routesConfig.resetpass}>
              <div className="text-[#c99400] dark:text-[#f0b90b] cursor-pointer mt-6 font-semibold hover:text-primary hover:underline">
                Forgot password?
              </div>
            </Link>
            <Link to={routesConfig.register}>
              <div className="text-[#c99400] dark:text-[#f0b90b] cursor-pointer mt-6 font-semibold hover:text-primary hover:underline">
                Create a VILLARREAL Account
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
