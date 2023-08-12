import { Link } from 'react-router-dom';
import images from '../../assets/images';
import { routesConfig } from '../../config';

function NotFound() {
  return (
    <div className="flex pt-40 pb-20 flex-col bg-[#FFFFFF] dark:bg-bgDarkMode">
      <div className="flex mx-auto w-full items-center justify-center flex-col">
        <div className="w-[340px]">
          <img src={images.notFound} alt="NotFound" />
        </div>
        <div className="mt-20 items-center">
          <span className="text-2xl text-textColor font-semibold dark:text-textDarkMode">
            Sorry! The page you’re looking for cannot be found.
          </span>
          <span className="ml-4 text-[#d0980b] decoration-solid underline">
            <Link to={routesConfig.home}>Go to HomePage</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
