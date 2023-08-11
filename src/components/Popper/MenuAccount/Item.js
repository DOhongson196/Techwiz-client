import Button from '../../Button';

function MenuItem({ data }) {
  const separate = data.separate ? 'border-t border-[#eaecef] dark:border-[#2b3139]' : '';
  return (
    <Button
      onClick={data.onClick}
      leftIcon={data.icon}
      to={data.to}
      className={`w-full  px-4 py-4 hover:bg-[#f5f5f5]  dark:hover:bg-[#2b3139] ${separate}`}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
