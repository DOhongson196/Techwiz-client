function FooterItem({ children, content = false, heading = false }) {
  const styleHeading = heading ? 'block mt-8 mb-6 leading-7 text-xl text-textColor dark:text-[#eaecef]' : '';
  const styleContent = content ? 'mb-2 block cursor-pointer hover:text-textColor dark:hover:text-[#eaecef]' : '';
  return <span className={`${styleContent} ${styleHeading}`}>{children}</span>;
}

export default FooterItem;
