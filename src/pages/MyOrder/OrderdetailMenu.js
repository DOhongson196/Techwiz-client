function Menu() {
  return (
    <>
      <div className="flex w-[600px] h-10 border-b border-[#EAECEF] font-semibold text-base items-center text-textColor dark:text-[#848e9c] mt-10">
        <div className="flex items-center w-[200px] pb-4 justify-start">Product</div>
        <div className="flex items-center w-[100px] pb-4 justify-center   mr-10 cursor-pointer">
          <span className="mr-1">Price</span>
        </div>
        <div className="flex items-center w-[100px] pb-4 justify-center mr-10 cursor-pointer">
          <span className="mr-1">Quantity</span>
        </div>
        <div className="flex items-center w-[100px] pb-4 justify-center   mr-10 cursor-pointer">
          <span className="mr-1">Sale</span>
        </div>
        <div className="flex items-end w-[100px] pb-4 justify-end ">SubTotal</div>
      </div>
    </>
  );
}

export default Menu;
