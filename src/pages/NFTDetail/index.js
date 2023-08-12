import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_PRODUCT } from '../../services/Constant';
import ProductItem from './ProductItem';
import { ToastContainer } from 'react-toastify';

function NFTDetail() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [url, setUrl] = useState(false);
  const productId = useParams();

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    const fectchApi = async () => {
      try {
        const response = await axios.get(API_PRODUCT + '/brief/' + productId.id);
        setProduct(response.data);
        console.log(response.data);
        setUrl(true);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fectchApi();
  }, []);

  return (
    <>
      {!loading ? (
        <div>
          <ProductItem product={product} url={url} />
          <ToastContainer />
        </div>
      ) : (
        <div className="flex flex-col mt-20 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode text-textColor dark:text-textDarkMode">
          <div className="flex relative max-w-screen-xl mx-auto w-full py-16">
            <div className="flex flex-col w-full gap-5 p-2 mx-auto select-none sm:p-6 sm:h-[500px] sm:flex-row ">
              <div className="bg-slate-300 dark:bg-slate-500 sm:h-full sm:w-[360px] rounded-xl animate-pulse"></div>
              <div className="flex flex-col flex-1 gap-5 sm:p-2">
                <div className="flex flex-col flex-1 gap-3">
                  <div className="w-20 bg-slate-300 dark:bg-slate-500 animate-pulse h-5 rounded-xl"></div>
                  <div className="w-[250px] h-8 bg-slate-300 dark:bg-slate-500 animate-pulse rounded-xl"></div>
                  <div className="w-[180px] h-5 bg-slate-300 dark:bg-slate-500 animate-pulse rounded-xl"></div>
                  <div className="w-20 h-4 bg-slate-300 dark:bg-slate-500 animate-pulse rounded-xl mt-10"></div>
                  <div className="w-[250px] h-8 bg-slate-300 dark:bg-slate-500 animate-pulse rounded-xl"></div>
                  <div className="w-[250px] h-10 bg-slate-300 dark:bg-slate-500 animate-pulse rounded-xl"></div>
                </div>
                <div className="flex gap-3 mt-auto">
                  <div className="w-full h-32  bg-slate-300 dark:bg-slate-500 rounded-xl animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NFTDetail;
