import { CheckIcon } from '../../components/Icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API_CART, getProductImageUrl } from '../../services/Constant';
import useAxios from '../../hooks/useAxios';
import { useState } from 'react';
import { useEffect } from 'react';

function CartItem({ data = [], setRender, render }) {
  const [quantity, setQuantity] = useState(data?.quantity || 1);
  const [idProduct, setIdProduct] = useState(0);
  const api = useAxios();

  const handleRemove = async (id) => {
    try {
      const response = await api.delete(API_CART + '/' + id);
      console.log(response);
      setRender(!render);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idProduct !== 0) {
      const fectchApi = async () => {
        try {
          const response = await api.get(API_CART + '/' + idProduct + '/' + quantity);
          console.log(response);
          setRender(!render);
        } catch (error) {
          console.log(error);
        }
      };
      fectchApi();
    }
  }, [quantity]);

  const handleDecrement = (id) => {
    if (quantity > 1) {
      setIdProduct(id);
      setQuantity((preCount) => preCount - 1);
    }
  };

  const handleIncrement = (id) => {
    setIdProduct(id);
    setQuantity((preCount) => preCount + 1);
  };

  return (
    <div>
      <div className="relative rounded-xl flex w-full h-[120px] font-normal text-base items-center text-textColor dark:text-[#eaecef]">
        {/* info */}
        <div className="flex items-center w-[480px] justify-start pl-2">
          {/* delete */}
          <button className="text-[#B7BDC6] dark:text-[#848e9c]" onClick={() => handleRemove(data?.id)}>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </button>
          {/* logo */}
          <div className="w-20 h-20 mr-4 ml-4">
            <img
              className="w-full h-full rounded-xl object-cover shrink-0 "
              src={getProductImageUrl(data?.image)}
              alt=""
            />
          </div>
          {/* name */}
          <div className="flex-1 min-w-0 h-full">
            <div className="flex items-center">
              <span className="text-base font-semibold text-[#1e2329] dark:text-textDarkMode text-ellipsis">
                {data?.nameProduct}
              </span>
            </div>
          </div>
        </div>
        {/* price */}
        <div className="flex flex-col  items-center justify-center w-[135px] mr-10">
          <div>{data?.price} USD</div>
        </div>
        {/* quantity */}
        <div className="flex items-center justify-center flex-col w-[135px] mr-40 ">
          <div className="flex items-center text-textColor dark:text-[#eaecef]">
            <div
              className="w-6 h-6 flex items-center justify-center bg-[#eaecef] dark:bg-[#474D57]  rounded-l cursor-pointer"
              onClick={() => handleDecrement(data?.id)}
            >
              -
            </div>
            <div className="border border-[#eaecef] dark:border-[#474D57] px-4 w-6 h-6 flex items-center justify-center hover:border-primary">
              {quantity}
            </div>
            <div
              className="w-6 h-6 flex items-center justify-center bg-[#eaecef] dark:bg-[#474D57]  rounded-r cursor-pointer"
              onClick={() => handleIncrement(data?.id)}
            >
              +
            </div>
          </div>
        </div>
        {/* price */}
        <div className="flex items-end justify-end w-[300px]">{data?.subTotal} USD</div>
      </div>
    </div>
  );
}

export default CartItem;
