import Tippy from '@tippyjs/react/headless';
import jwtDecode from 'jwt-decode';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './Item';

function MenuAccount({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      placement="bottom-end"
      interactive
      delay={[0, 300]}
      hideOnClick={false}
      render={(attrs) => (
        <div className="box w-[200px]" tabIndex="-1" {...attrs}>
          <PopperWrapper className={'bg-white dark:bg-[#1e2329] pb-0'}>
            <div className="p-4 break-words text-base font-semibold text-textColor dark:text-textDarkMode leading-5">
              {jwtDecode(JSON.parse(localStorage.getItem('user'))?.accessToken).sub}
            </div>
            <div>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default MenuAccount;
