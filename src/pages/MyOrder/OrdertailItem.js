import { CheckIcon } from '../../components/Icons';
import { getProductImageUrl } from '../../services/Constant';

function Item({ data }) {
  return (
    <>
      <div>
        <div className="relative rounded-xl flex w-[600px] my-5 font-normal text-base items-center text-textColor dark:text-[#eaecef]">
          {/* info */}
          <div className="flex items-center w-[200px] justify-start">
            {/* name */}
            <div className="text-base font-semibold text-[#1e2329] dark:text-textDarkMode text-ellipsis">
              {data?.nameProduct}
            </div>
          </div>
          {/* price */}
          <div className="flex flex-col  items-center justify-center w-[100px] mr-10">
            <div>{data?.price} USD</div>
          </div>

          {/* quantity */}
          <div className="flex items-center justify-center flex-col w-[100px] mr-10 ">
            <div>{data?.quantity}</div>
          </div>
          {/* price */}
          <div className="flex flex-col  items-center justify-center w-[100px] mr-10">
            <div>{data?.discount}</div>
          </div>
          {/* price */}
          <div className="flex items-end justify-end w-[100px]">{data?.subTotal} USD</div>
        </div>
      </div>
    </>
  );
}

export default Item;
