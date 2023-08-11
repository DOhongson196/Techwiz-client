import Button from '../../components/Button';
import { CheckIcon } from '../../components/Icons';
import { API_CART, getProductImageUrl } from '../../services/Constant';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext, DarkModeContext } from '../../context';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { routesConfig } from '../../config';

function CollectionItem({ data = [], index, cart = false }) {
  const api = useAxios();
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const notify = () => {
    toast('🦄  Add to cart successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: darkMode === 'light' ? 'light' : 'dark',
    });
  };

  const error = () => {
    toast.error('🦄  Add to cart fail!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: darkMode === 'light' ? 'light' : 'dark',
    });
  };
  const handleAddToCart = (id) => {
    if (!login) {
      return navigate(routesConfig.login);
    }
    console.log(API_CART + '/' + id);
    const fectchApi = async () => {
      try {
        await api.get(API_CART + '/' + id);
        notify();
      } catch (err) {
        if (err.response?.status === 403) {
          navigate(routesConfig.authority);
        } else {
          console.log(err);
          error();
        }
      }
    };

    fectchApi();
  };

  return (
    <div>
      <div className="relative cursor-pointer rounded-xl group flex w-full h-[78px] font-normal text-base items-center text-textColor dark:text-[#eaecef] hover:bg-[#f5f5f5] hover:scale-105 ease-in-out duration-300 dark:hover:bg-[#2b3139]">
        {/* info */}
        <div className="flex items-center w-[480px] justify-start pl-2">
          {/* ranking */}
          <div
            className={`${
              index === 0
                ? 'text-red-400 text-3xl font-bold'
                : index === 1
                ? 'text-orange-400 text-2xl font-semibold'
                : index === 2
                ? 'text-yellow-300 text-2xl font-medium'
                : ''
            }`}
          >
            {index + 1}
          </div>
          {/* logo */}
          <div className="w-10 h-10 mr-4 ml-5">
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
                {data?.name}
              </span>
              <CheckIcon className={'text-[#f0b90b] ml-2'} />
            </div>
          </div>
        </div>
        {/* volume */}
        <div className="flex flex-col  items-end justify-center w-[175px] mr-48">
          <div>{data?.viewCount}</div>
        </div>
        {/* floor price */}
        <div className="flex items-end justify-center flex-col w-[165px] mr-20">
          <div>{data?.volume}</div>
        </div>
        {/* price */}
        <div className={`flex items-end justify-end w-[200px] ${cart ? 'group-hover:hidden' : ''}`}>
          {!data?.discount > 0 ? (
            <div className="text-base font-bold dark:text-[#eaecef]">{data?.price} USD</div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="text-base text-[#707a8a] dark:text-[#b7bdc6] line-through  decoration-double decoration-1">
                {data?.price} USD
              </div>
              <div>
                <div className="ml-3 text-lg font-bold text-[#f04f4f]">
                  {data?.price * ((100 - data?.discount) / 100)} USD
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Button */}
        {cart && (
          <Button
            onClick={() => handleAddToCart(data?.id)}
            primary
            className={
              'absolute w-32 hidden justify-center items-center whitespace-nowrap right-12 h-10 px-[12px] py-[6px] dark:text-textColor group-hover:block'
            }
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default CollectionItem;
