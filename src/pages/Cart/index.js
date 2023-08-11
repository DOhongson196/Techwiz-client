import Button from '../../components/Button';
import CartItem from './CartItem';
import { routesConfig } from '../../config';
import { useEffect } from 'react';
import { useState } from 'react';
import { API_CART } from '../../services/Constant';
import useAxios from '../../hooks/useAxios';
import images from '../../assets/images';

function Cart() {
  const [carts, setCarts] = useState([]);
  const api = useAxios();
  const [render, setRender] = useState(false);
  const [confirmPolicy, setConfirmPolicy] = useState(true);
  var subTotal = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
    const fectchApi = async () => {
      try {
        const response = await api.get(API_CART);
        setCarts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fectchApi();
  }, [render]);

  const handleCheckbox = () => {
    setConfirmPolicy(!confirmPolicy);
  };

  return (
    <>
      {carts.length > 0 ? (
        <div className="flex flex-col mt-32 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode">
          <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
            {/* Heading */}
            <div className="text-textColor mx-auto dark:text-textDarkMode my-10 text-3xl font-semibold">
              Shopping Cart
            </div>
            {/* Menu */}
            <div className="flex w-full h-10 border-b border-[#EAECEF] font-semibold text-base items-center text-textColor dark:text-[#848e9c]">
              <div className="flex items-center w-[480px] pb-4 justify-start">Product</div>
              <div className="flex items-center w-[135px] pb-4 justify-center   mr-10 cursor-pointer">
                <span className="mr-1">Price</span>
              </div>
              <div className="flex items-center w-[135px] pb-4 justify-center mr-40 cursor-pointer">
                <span className="mr-1">Quantity</span>
              </div>
              <div className="flex items-end w-[300px] pb-4 justify-end ">Total</div>
            </div>
            {/* CartItem */}
            {carts.map((data) => {
              subTotal += data?.subTotal;
              return (
                <CartItem
                  data={data}
                  key={data.nameProduct}
                  setRender={setRender}
                  render={render}
                  subTotal={subTotal}
                />
              );
            })}
            {/* Checkout */}
            <div className="grid grid-cols-3 ">
              <div className="col-end-5 w-[350px] bg-[#f5f5f5] dark:bg-[#0b0e11] p-6 mt-5 rounded-xl">
                <div className="flex justify-between font-bold text-lg  text-textColor dark:text-[#eaecef] mb-2">
                  <span>Subtotal</span>
                  <span>{subTotal}</span>
                </div>
                <span className="text-textColor dark:text-[#848e9c] text-sm ">Free shipping and taxes</span>
                <div className="flex relative text-textColor dark:text-[#848e9c] text-sm my-4">
                  <input
                    id="yellow-checkbox"
                    type="checkbox"
                    checked={confirmPolicy}
                    onChange={handleCheckbox}
                    className=" h-[14px] w-[14px] accent-primary  rounded cursor-pointer absolute bottom-[23px]"
                  />
                  <span className="ml-6">
                    By sharing an email, you agree to the Terms of Service and Privacy Policy.
                  </span>
                </div>

                <Button
                  primary
                  disabled={!confirmPolicy ? true : false}
                  className={'w-full justify-center dark:text-textColor py-2'}
                  to={routesConfig.checkout}
                >
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mt-32 bg-[#FFFFFF] dark:bg-bgDarkMode">
          <div className="flex relative flex-col max-w-screen-xl mx-auto w-full items-center justify-center">
            <div className="text-textColor mx-auto dark:text-textDarkMode mt-10 text-3xl font-semibold">
              Shopping Cart
            </div>
            <div className="w-[800px]">
              <img alt="" src={images.emptyCart} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
