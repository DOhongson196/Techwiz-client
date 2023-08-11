import { useState } from 'react';
import { useEffect } from 'react';
import Modal from '../../components/Modal';
import useAxios from '../../hooks/useAxios';
import { API_ORDER } from '../../services/Constant';
import Menu from './OrderdetailMenu';
import Item from './OrdertailItem';

function OrderItem({ data }) {
  const [orderId, setOrderId] = useState(0);
  const [open, setOpen] = useState(false);
  const [orderDetail, setOrderDetail] = useState([]);
  const api = useAxios();
  useEffect(() => {
    if (open) {
      const fectchApi = async () => {
        try {
          const response = await api.get(API_ORDER + '/page/order/' + orderId);
          console.log(response.data.content);
          setOrderDetail(response.data.content);
        } catch (error) {
          console.log(error);
        }
      };
      fectchApi();
    }
  }, [open]);
  return (
    <div>
      <div className="relative rounded-xl flex w-[900px] mx-auto h-[78px] font-normal text-base items-center text-textColor dark:text-[#eaecef]">
        {/* id */}
        <div className="flex items-center w-[100px] justify-center pl-2 mr-10">{data?.id}</div>
        {/* Address */}
        <div className="flex flex-col  items-start justify-start w-[400px] mr-20">
          <div>{data?.address}</div>
        </div>
        {/* total price */}
        <div className="flex flex-col  items-center justify-center w-[100px] mr-20">
          <div>{data?.phone}</div>
        </div>
        {/* status */}
        <div className="flex items-center justify-center flex-col w-[200px] ">
          {data?.invoiceStatus === 0 ? 'Success' : data?.invoiceStatus === 1 ? 'Pending' : 'Delivering'}
        </div>
        {/* action */}
        <div className="flex items-end justify-center w-[200px] cursor-pointer ">
          <button
            onClick={() => {
              setOrderId(data?.id);
              setOpen(true);
            }}
            className="px-4 py-1 bg-primary text-textColor rounded font-semibold hover:bg-opacity-80"
          >
            Detail
          </button>
        </div>
      </div>
      <Modal open={open} close onClose={() => setOpen(false)} className={'top-[-200px]'}>
        <Menu />
        {orderDetail.map((data) => (
          <Item data={data} key={data.nameProduct} />
        ))}
        <button
          className="float-right px-4 py-2 mt-4 bg-primary text-textColor rounded font-semibold"
          onClick={() => setOpen(false)}
        >
          OK
        </button>
      </Modal>
    </div>
  );
}

export default OrderItem;
