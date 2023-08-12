import images from '../../assets/images';
import Button from '../../components/Button';

import { Link } from 'react-router-dom';
import routesConfig from '../../config/routes';
import FormRegister from './FormRegister';

function Register() {
  return (
    <div className="flex min-h-[87.2vh] flex-col bg-[#FFFFFF] dark:bg-bgDarkMode">
      <div className="flex mt-8 mx-auto w-full items-center justify-center">
        <div className="flex p-8  w-[1000px] shadow-xl text-sm rounded-xl  text-textColor  dark:text-textDarkMode ">
          <div className="w-[390px] mr-16">
            {/* heading */}
            <div className="  my-10 text-3xl font-semibold">Welcome to VILLARREAL!</div>
            {/* input */}
            <FormRegister />
            {/* or */}
            <div className="my-4 flex items-center">
              <div className="h-[1px] flex-1 bg-[#eaecef] dark:bg-[#474d57]"></div>
              <div className="mx-6 text-[#848e9c]">or</div>
              <div className="h-[1px] flex-1 bg-[#eaecef] dark:bg-[#474d57]"></div>
            </div>
            {/* button google */}
            <Button
              className={
                'w-full flex bg-[#eaecef] dark:bg-[#474d57] justify-center items-center whitespace-nowrap h-12 px-[12px] py-[6px] text-textColor rounded  dark:text-textDarkMode hover:opacity-80'
              }
            >
              <img className="w-5 select-none mr-3 block" src={images.logoGoogle} alt="logo google" />
              Continue with Google
            </Button>
            <div className="flex items-center mt-6">
              <div className="dark:text-[#848e9c]">Already registered?</div>
              <Link to={routesConfig.login}>
                <div className="text-[#c99400] dark:text-[#f0b90b] cursor-pointer  font-semibold hover:text-primary hover:underline ml-1">
                  Log In
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center">
            <img className="w-[384px] h-[216px]" src={images.logoRegister} alt="logo" />
            <div className="text-xl font-semibold dark:text-[#b7bdc6] mt-6 w-[340px] text-center">
              Sign up to receive many attractive offers
            </div>
            <div className="text-base text-[#707a8a] w-[380px] mt-4 text-center dark:text-[#848e9c]">
              Follow the registration steps to start your order now with us!!!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
