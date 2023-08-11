import { CheckIcon } from '../../../components/Icons';
import { getProductImageUrl } from '../../../services/Constant';
import { Link } from 'react-router-dom';

function NFTItems({ data, setShowResult }) {
  return (
    <Link to={'/nftdetail/' + data?.id} onClick={() => setShowResult(false)}>
      <div className="flex items-center mx-2 p-2 cursor-pointer hover:bg-[#f5f5f5] dark:hover:bg-[#2b3139] hover:rounded-lg">
        <div className="w-8 h-8 mr-4">
          <img
            className="w-full h-full rounded-xl object-cover shrink-0 "
            src={getProductImageUrl(data?.image)}
            alt=""
          />
        </div>
        <div className="flex-1 min-w-0 h-9">
          <div className="flex items-center">
            <span className="text-sm font-semibold leading-5 text-[#1e2329] dark:text-textDarkMode text-ellipsis">
              {data?.name}
            </span>
            <CheckIcon className={'text-[#f0b90b] ml-2'} />
          </div>
          <div className="font-normal leading-4 text-xs text-[#707a8a]">Price: {data?.price} UsD</div>
        </div>
      </div>
    </Link>
  );
}

export default NFTItems;
