import RecommendItem from './RecommendItem';
import { SimpleSlider } from '../../../components/Slider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_PRODUCT } from '../../../services/Constant';
import RecommendSkeleton from './RecommendSkeleton';

function Recommend() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(API_PRODUCT + '/top/featured')
      .then((res) => {
        setResult(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading ? (
        <div className="flex flex-col w-[1280px] mt-12 mx-auto ">
          <div className=" text-textColor dark:text-textDarkMode my-4  text-4xl font-semibold float-left w-full ">
            Featured products
          </div>
          <div className="mx-[-40px]">
            <SimpleSlider autoplay slidesToScroll={3} slidesToShow={3}>
              {result.map((result) => (
                <RecommendItem data={result} key={result?.id} />
              ))}
            </SimpleSlider>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col w-[1280px] mt-14 mx-auto ">
            <div className=" text-textColor dark:text-textDarkMode my-4 text-3xl font-semibold float-left w-full ">
              Featured products
            </div>
          </div>
          <div className="grid grid-cols-3 max-w-screen-xl mx-auto w-full mt-14 gap-x-24">
            {Array(3)
              .fill(0)
              .map((item, index) => (
                <RecommendSkeleton key={index} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Recommend;
