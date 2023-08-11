import Button from '../../Button';

function MenuItem({ data }) {
  return (
    <Button
      to={`/product/` + data?.id}
      className={
        'w-full px-4 py-2 text-lg hover:bg-[#f5f5f5]  dark:hover:bg-[#2b3139] hover:text-[#c99400] dark:hover:text-[#c99400]'
      }
    >
      {data?.name}
    </Button>
  );
}

export default MenuItem;
