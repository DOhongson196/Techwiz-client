import { ChevronDownIcon } from '@heroicons/react/20/solid';

function CollectionMenu({active, setAcviteFalse, setAcviteTrue}) {
  return (
    <div>
      <div className="flex w-full h-10 border-b border-[#EAECEF] font-normal text-sm items-center text-textColor dark:text-[#848e9c]">
        <div className="flex items-center w-[480px] pb-4 justify-start">Products</div>
        <div onClick={setAcviteTrue} className={`flex items-center w-[175px] pb-4 justify-end mr-48 cursor-pointer ${active ? 'text-[#c99400]' : ''}`}>
          <span className="mr-1">View Count</span>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
        <div onClick={setAcviteFalse} className={`flex items-center w-[165px] pb-4 justify-end  cursor-pointer ${!active ? 'text-[#c99400]' : ''}`}>
          <span className="mr-1">Buying Volume</span>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
        <div className="flex items-end w-[266px] pb-4 justify-end ">Price</div>
      </div>
    </div>
  );
}

export default CollectionMenu;
