import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '..';
import MenuItem from './MenuItem';

function MenuAccount({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      placement="bottom-start"
      interactive
      delay={[0, 200]}
      hideOnClick={false}
      render={(attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
          <PopperWrapper className={'bg-white dark:bg-[#1e2329] py-4'}>
            <div className="flex flex-col justify-center">{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default MenuAccount;
