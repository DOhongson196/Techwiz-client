import { useState } from 'react';
import Button from '../../components/Button';
import { LeftIcon } from '../../components/Icons';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import useAxios from '../../hooks/useAxios';
import { API_ORDER } from '../../services/Constant';
import { useEffect } from 'react';
import Modal from '../../components/Modal';
import { useNavigate } from 'react-router-dom';
import { routesConfig } from '../../config';

function MethodPayment({ formValue, setValid, subTotal }) {
  const [radio, setRadio] = useState('1');
  const [payment, setPayment] = useState('');
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const navigate = useNavigate();
  const onChange = (e) => {
    setRadio(e.target.value);
  };
  const handleBack = () => {
    setValid(false);
  };
  const api = useAxios();

  useEffect(() => {
    if (payment !== '') {
      const fectchApi = async () => {
        try {
          await api.post(API_ORDER, { ...formValue, invoicePayment: payment });
          setOpen(true);
        } catch (error) {
          console.log(error);
        }
      };

      fectchApi();
    }
  }, [payment]);

  const handleConfirm = () => {
    navigate(routesConfig.home);
  };

  return (
    <>
      <div className="col-end-5 w-11/12 bg-[#f5f5f5] dark:bg-[#0b0e11] p-6 mt-5 rounded-xl">
        <div className="text-lg font-semibold pb-2 border-textColor border-b ">Method payment</div>
        <div className="text-base  text-textColor my-2 dark:text-textDarkMode">
          <div className="flex items-center mb-2">
            <input
              id="cod"
              type="radio"
              name="pay"
              value="1"
              onChange={(e) => onChange(e)}
              className="mr-3"
              defaultChecked
            />
            <label htmlFor="cod">Cash On Delivery(COD)</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="online" name="pay" value="2" onChange={(e) => onChange(e)} className="mr-3" />
            <label htmlFor="online">Online Payment</label>
          </div>
        </div>
        {radio === '1' && (
          <Button
            primary
            className={'w-full justify-center items-center whitespace-nowrap h-12 py-[6px] dark:text-textColor my-6'}
            onClick={() => setPayment('COD')}
          >
            Order confirmation
          </Button>
        )}
        {radio === '2' && (
          <div className="my-6">
            <PayPalScriptProvider
              options={{
                'client-id': 'ATdIMK863PUHVxaIZlrr8WU2Gh3RZaFlzVPiWM6n8XjlGS_WSm3G5ySM4yDvpK9gX19MG3F1EHGCVQ9X',
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: `${subTotal}`,
                          currency_code: 'USD',
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    console.log(details);
                    setPayment('ONLINE');
                  });
                }}
                onCancel={(data) => {
                  setOpen2(true);
                }}
                onError={(data) => {
                  setOpen1(true);
                }}
              />
            </PayPalScriptProvider>
          </div>
        )}
      </div>
      <button
        className="text-[#d0980b] decoration-solid underline text-lg font-medium italic mt-4"
        onClick={handleBack}
      >
        <div className="flex">
          <LeftIcon width="1.5rem" height="1.5rem" className={'fill-[#d0980b]'} />
          Back to CheckOut
        </div>
      </button>
      <Modal open={open} className={'top-[-100px]'}>
        <div className="text-2xl font-semibold mb-4"> Order Successful</div>
        <div className="max-w-[350px] text-justify ">
          Thank you for choosing our products. This email serves as confirmation of your order and provides details
          regarding your purchase.
        </div>
        <button
          className="float-right px-4 py-2 mt-4 bg-primary text-textColor rounded font-semibold"
          onClick={handleConfirm}
        >
          Back homepage
        </button>
      </Modal>
      <Modal open={open1} onClose={() => setOpen1(false)} className={'top-[-100px]'} close>
        <div className="text-2xl font-semibold mb-4"> Order error</div>
        <div className="max-w-[310px] text-justify text-[#707a8a] dark:text-[#b7bdc6]">
          We regret to inform you that your recent purchase attempt was unsuccessful. We apologize for any inconvenience
          caused.
        </div>
        <button
          className="float-right px-4 py-2 mt-4 bg-primary text-textColor rounded font-semibold"
          onClick={() => setOpen1(false)}
        >
          OK
        </button>
      </Modal>
      <Modal open={open2} onClose={() => setOpen2(false)} className={'top-[-100px]'} close>
        <div className="text-2xl font-semibold mb-4"> Payment Cancellation</div>
        <div className="max-w-[310px] text-justify text-[#707a8a] dark:text-[#b7bdc6]">
          We regret to inform you that your payment has been canceled. We apologize for any inconvenience caused.
        </div>
        <button
          className="float-right px-4 py-2 mt-4 bg-primary text-textColor rounded font-semibold"
          onClick={() => setOpen2(false)}
        >
          OK
        </button>
      </Modal>
    </>
  );
}

export default MethodPayment;
