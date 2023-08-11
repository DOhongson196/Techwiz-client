import { Link } from 'react-router-dom';
import { CheckIcon, FireIcon } from '../../../components/Icons';
import { getProductImageUrl } from '../../../services/Constant';

function RecommendItem({ data }) {
  return (
    <div className="px-12 py-4">
      <Link to={'/nftdetail/' + data?.id}>
        <div className=" ease-in-out shadow-xl cursor-pointer rounded-xl duration-300 hover:translate-y-[-4px] hover:shadow-2xl overflow-hidden">
          {/* background image */}
          <div className="relative w-full h-[400px]">
            <div className="object-cover w-full h-full">
              <img className="w-full h-full object-cover" src={getProductImageUrl(data?.image)} alt="" />
            </div>
          </div>
          {/* info */}
          <div className="pd-4 px-3 flex items-center h-[50px] dark:bg-[#474d57]">
            <div className="flex items-center pt-4 mx-auto">
              <span className="text-lg font-semibold text-[#1e2329] dark:text-textDarkMode text-ellipsis truncate whitespace-nowrap">
                {data?.name}
              </span>
            </div>
          </div>

          {/* content */}
          <div className="flex pb-3 px-6 justify-between items-center dark:bg-[#474d57]">
            <div className="flex w-full justify-between mt-2">
              <div className="text-[#707a8a] dark:text-[#b7bdc6] text-lg">Price:</div>
              {!data?.discount > 0 ? (
                <div className="text-lg font-bold dark:text-[#eaecef]">{data?.price} USD</div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="text-lg text-[#707a8a] dark:text-[#b7bdc6] line-through  decoration-double decoration-1">
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
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RecommendItem;
