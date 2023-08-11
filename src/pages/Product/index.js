import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '../../components/Icons';
import { useState } from 'react';
import { useRef } from 'react';
import { useDebounce } from '../../hooks';
import { useEffect } from 'react';
import NFTItem from '../../components/Collection/NFTItem';
import Select from './Select';
import Pagination from '../../components/Pagination';
import { ToastContainer } from 'react-toastify';
import { API_PRODUCT } from '../../services/Constant';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../components/Button';
import Skeleton from '../../components/Collection/NFTItemSkeleton';
//import Skeleton from '../../components/Collection/NFTItemSkeleton';

const sortPrice = [
  {
    id: 1,
    name: 'Price Low - High',
    sort: 'price',
    direction: 'ASC',
  },
  {
    id: 2,
    name: 'Price High - Low',
    sort: 'price',
    direction: 'DESC',
  },
  {
    id: 3,
    name: 'Recently Created',
    sort: 'createDate',
    direction: 'DESC',
  },
];

function Product() {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const id = useParams();
  const [selected, setSelected] = useState(sortPrice[0]);
  const [priceStart, setPriceStart] = useState(0);
  const [priceEnd, setPriceEnd] = useState(10000);
  const [totalPages, setTotalPages] = useState(Number);

  const debounced = useDebounce(searchValue, 500);
  const refInput = useRef();
  const schema = yup
    .object({
      start: yup.number().integer().required().moreThan(-1),
      end: yup.number().integer().required().moreThan(0),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    const fectchApi = async () => {
      try {
        const response = await axios.get(API_PRODUCT + '/find/menu', {
          params: {
            query: debounced,
            id: id.id,
            pricestart: priceStart.toFixed(1),
            priceend: priceEnd.toFixed(1),
            page: currentPage,
            size: 12,
            sort: selected.sort + ',' + selected.direction,
          },
        });
        setData(response.data.content);
        console.log(response);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fectchApi();
  }, [debounced, selected, priceEnd, priceStart, id, currentPage]);

  const handleClear = () => {
    setSearchValue('');
    refInput.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  const handleSubmitInput = (data) => {
    console.log(data);
    setPriceStart(data.start);
    setPriceEnd(data.end);
  };

  return (
    <div className="flex min-h-screen flex-col mt-32 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode text-textColor dark:text-textDarkMode">
      <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
        <div className=" text-textColor font-semibold  dark:text-textDarkMode my-10 text-3xl">
          ACCESSORIES COLLECTION
        </div>
        {/* nav bar */}
        <div className="flex items-center justify-between">
          {/* Search */}
          <div className="flex flex-1">
            <div className="relative w-10/12">
              <button className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#B7BDC6] dark:text-[#5e6673] ">
                {<SearchIcon width="1.2rem" height="1.2rem" />}
              </button>
              <input
                ref={refInput}
                value={searchValue}
                onChange={handleChange}
                placeholder="Search"
                className="h-11 items-center rounded border border-[#eaecef] dark:border-[#474D57] focus:border-primary dark:focus:border-primary dark:bg-bgDarkMode w-full outline-none px-12 text-base text-textColor dark:text-textDarkMode"
              />
              {!!searchValue && (
                <button
                  className="text-[#B7BDC6] dark:text-[#5e6673] pr-5 absolute right-[-6px] top-1/2 translate-y-[-46%] "
                  onClick={handleClear}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              )}
            </div>
          </div>
          <div className="flex">
            {/* filter price */}
            <form autoComplete="off" className="ml-6 flex" onSubmit={handleSubmit(handleSubmitInput)}>
              <div
                className={`p-2 h-11 border rounded-l ${
                  errors.start?.message || errors.end?.message ? 'border-red-500' : ' dark:border-[#474D57]'
                }`}
              >
                <input
                  {...register('start')}
                  className="outline-none border-none bg-transparent dark:bg-transparent h-full w-20"
                  placeholder="Min"
                  autoComplete="off"
                />
                <span className="pr-2">-</span>
                <input
                  {...register('end')}
                  className="outline-none border-none bg-transparent dark:bg-transparent h-full w-20"
                  placeholder="Max"
                  autoComplete="off"
                />
              </div>
              <Button
                type="submit"
                className="h-11 border  dark:border-[#474D57] rounded-r  px-4"
                disabled={errors.start?.message || errors.end?.message ? true : false}
              >
                Apply
              </Button>
            </form>
            {/* sort */}
            <Select list={sortPrice} selected={selected} setSelected={setSelected} />
          </div>
        </div>
        {/* item */}
        <div className="grid grid-cols-4 gap-10 mt-14 ">
          {!loading && data.map((data, index) => <NFTItem data={data} key={data.id} index={index} cart />)}
          {loading &&
            Array(8)
              .fill(0)
              .map((item, index) => <Skeleton key={index} />)}
        </div>
        <ToastContainer />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Product;
