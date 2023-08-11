import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { API_PRODUCT } from '../../services/Constant';
import { ToastContainer } from 'react-toastify';
import { CollectionItem, CollectionMenu } from '../../components/Collection';

function Explore() {
  const [active, setAcvite] = useState(true);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    setLoading(true);
    if (active) {
      axios
        .get(API_PRODUCT + '/rank/view')
        .then((res) => {
          console.log(res);
          setResult(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      axios
        .get(API_PRODUCT + '/rank/buy')
        .then((res) => {
          console.log(res);
          setResult(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [active]);
  return (
    <div className="flex min-h-screen flex-col mt-32 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode text-textColor dark:text-textDarkMode">
      <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
        <div className=" text-textColor font-semibold  dark:text-textDarkMode my-10 text-3xl">Ranking</div>
        <CollectionMenu active={active} setAcviteTrue={() => setAcvite(true)} setAcviteFalse={() => setAcvite(false)} />
        {result.map((data, index) => (
          <CollectionItem data={data} key={data.id} index={index} cart />
        ))}
        <ToastContainer />
        <div></div>
      </div>
    </div>
  );
}

export default Explore;
