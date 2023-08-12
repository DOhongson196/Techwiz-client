import { faAddressCard, faHeart, faTags, faUser, faSignOut, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../assets/images';
import { DarkIcon, LightIcon } from '../../../components/Icons';
import Button from '../../../components/Button';
import { useContext, useEffect, useState } from 'react';
import StraightBrick from '../../../components/Brick';
import MenuAccount from '../../../components/Popper/MenuAccount';
import MenuUtil from '../../../components/Popper/MenuUtil';
import routesConfig from '../../../config/routes';
import { Link } from 'react-router-dom';
import { AuthContext, DarkModeContext } from '../../../context';
import { API_CATEGORY } from '../../../services/Constant';
import axios from 'axios';
import Modal from '../../../components/Modal';

function Header() {
  const context = useContext(DarkModeContext);
  const { login } = useContext(AuthContext);
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);

  const menuAccountItem = [
    {
      icon: <FontAwesomeIcon icon={faHeart} />,
      title: 'Favorites',
      onClick: () => setOpen(true),
    },
    {
      icon: <FontAwesomeIcon icon={faTags} />,
      title: 'My Orders',
      to: routesConfig.myorder,
    },
    {
      icon: <FontAwesomeIcon icon={faAddressCard} />,
      title: 'Profile',
      onClick: () => setOpen(true),
    },
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: routesConfig.logout,
      separate: true,
    },
  ];

  useEffect(() => {
    const fectchApi = async () => {
      try {
        const response = await axios.get(API_CATEGORY + '/status');
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fectchApi();
  }, []);

  return (
    <header className="bg-white dark:bg-bgDarkMode h-24 fixed w-full top-0 left-0 flex shadow-sm  justify-center z-50 border-b border-[#eaecef]">
      <div className=" w-[1280px] flex items-center justify-between">
        <div className="flex">
          {/* header logo */}
          <Link to={routesConfig.home} className="flex select-none items-center">
            <img src={images.logo} alt="Incredible" className="w-[219px] h-[68px] mr-4" />
          </Link>
        </div>
        <div>
          {/* header Ranking */}
          <div className="flex items-center text-xl">
            <div>
              <MenuUtil items={category}>
                <div className="select-none mx-5 cursor-pointer hover:text-[#c99400] font-semibold text-textColor dark:text-textDarkMode dark:hover:text-[#c99400]">
                  ACCESSORIES
                </div>
              </MenuUtil>
            </div>

            <Button to={routesConfig.explore} text className={'text-xl'}>
              SCHEDULE
            </Button>

            <Button to={routesConfig.players} text className={'text-xl'}>
              PLAYERS
            </Button>

            <Button to={routesConfig.news} text className={'text-xl'}>
              NEWS & UPDATES
            </Button>
          </div>
        </div>
        {/* header action */}
        <div className="flex items-center">
          {login ? (
            <>
              {/* header account */}
              <div className="mr-2 dark:text-textDarkMode">
                <MenuAccount items={menuAccountItem}>
                  <button className="text-xl ml-1 flex hover:text-[#c99400]">
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                </MenuAccount>
              </div>
            </>
          ) : (
            <>
              {/* header login */}
              <Link to={routesConfig.login} className="flex">
                <Button text className={'text-xl'}>
                  Log In
                </Button>
              </Link>
              {/* header register */}
              <Link to={routesConfig.register} className="flex">
                <Button primary className={'mx-3 dark:text-textColor text-xl'}>
                  Register
                </Button>
              </Link>
            </>
          )}
          {/* header cart */}
          <StraightBrick className={'h-[16px]'} />
          <Link className="flex" to={routesConfig.cart}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={'dark:text-textDarkMode hover:text-[#c99400] dark:hover:text-[#c99400] text-xl'}
            />
          </Link>
          {/* header darkmode */}
          <StraightBrick className={'h-[16px]'} />
          <button onClick={context.handleDarkModeSwitch} className="ml-1 flex ">
            {context.darkMode === 'dark' ? <LightIcon /> : <DarkIcon />}
          </button>
        </div>
      </div>
      {/* modal */}
      <Modal open={open} onClose={() => setOpen(false)} className={'top-[-100px]'} close>
        <div className="text-2xl font-semibold mb-6 mt-2">Feature under development</div>
        <div className="max-w-[400px] text-[#707a8a] dark:text-[#b7bdc6]">
          Thank you for your interest. We are currently working on implementing this functionality to enhance your
          experience. Stay tuned for future updates!
        </div>
        <button
          className="float-right px-4 py-2 mt-4 bg-primary text-textColor rounded font-semibold"
          onClick={() => setOpen(false)}
        >
          OK
        </button>
      </Modal>
    </header>
  );
}

export default Header;
