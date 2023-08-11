import { DocumentMagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { routesConfig } from '../../config';
import useAxios from '../../hooks/useAxios';
import { API_ORDER } from '../../services/Constant';
import OrderItem from './OrderItem';

function MyOrder() {
  const [order, setOrder] = useState([]);
  const api = useAxios();
  useEffect(() => {
    const fectchApi = async () => {
      try {
        const response = await api.get(API_ORDER + '/page/user');
        console.log(response.data.content);
        setOrder(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };

    fectchApi();
  }, []);
  return (
    <>
      {order.length > 0 ? (
        <div className="flex pt-40 pb-20 flex-col bg-[#FFFFFF] dark:bg-bgDarkMode">
          <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
            {/* Heading */}
            <div className="text-textColor mx-auto dark:text-textDarkMode mb-20 text-3xl font-semibold">My Order</div>
            {/* Menu */}
            <div className="flex mx-auto w-[900px] h-10 border-b border-[#EAECEF] font-semibold text-base items-center text-textColor dark:text-[#848e9c]">
              <div className="flex items-center w-[100px] pb-4 justify-center mr-10">ID</div>
              <div className="flex items-center w-[400px] pb-4 justify-start  mr-20">
                <span className="mr-1">Address</span>
              </div>
              <div className="flex items-center w-[100px] pb-4 justify-center mr-20">
                <span className="mr-1">Phone</span>
              </div>
              <div className="flex items-end w-[200px] pb-4 justify-center">Order Status</div>
              <div className="flex items-end w-[200px] pb-4 justify-center">Action</div>
            </div>
            {order.map((data) => (
              <OrderItem data={data} key={data?.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex pt-40 pb-20 flex-col bg-[#FFFFFF] dark:bg-bgDarkMode">
          <div className="flex mx-auto w-full items-center justify-center flex-col">
            <div className="mx-auto text-textColor font-semibold dark:text-textDarkMode">
              <DocumentMagnifyingGlassIcon className="w-520 h-52" />
            </div>
            <div className="mt-10 text-2xl mx-auto text-textColor font-semibold dark:text-textDarkMode">
              Your order has not been placed yet.
            </div>
            <div className="mt-10 items-center mx-auto">
              <span className="text-base text-textColor font-semibold dark:text-textDarkMode">
                Return to the homepage for shopping.
              </span>
              <span className="ml-4 text-[#d0980b] decoration-solid underline">
                <Link to={routesConfig.home}>Go to home page!</Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyOrder;
