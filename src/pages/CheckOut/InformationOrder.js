import { useEffect } from 'react';

function InformationOrder({ data = [], setSubTotal, subTotal = 0 }) {
  useEffect(() => {
    setSubTotal(data.reduce((total, item) => total + item?.subTotal, 0));
  }, [data]);
  return (
    <div className="col-end-5 w-5/6 bg-[#f5f5f5] dark:bg-[#0b0e11]  p-6 mt-5 rounded-xl">
      <div className="flex justify-center text-lg font-semibold pb-2 border-textColor border-b ">Information order</div>
      {data.map((item) => {
        return (
          <div key={item?.id} className="flex justify-between text-base  text-textColor dark:text-textDarkMode my-2">
            <div>
              <span className="mr-1">{item?.nameProduct}</span>x<span className="ml-1">{item?.quantity}</span>
            </div>
            <span>{item?.subTotal}</span>
          </div>
        );
      })}
      <div className="flex justify-between text-base  text-textColor  dark:text-textDarkMode">
        <span>Shipping & taxes</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between text-lg font-semibold pt-2 border-textColor border-t ">
        <span>Subtotal</span>
        <span>{subTotal}</span>
      </div>
    </div>
  );
}

export default InformationOrder;
