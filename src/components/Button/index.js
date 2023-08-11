import { Link } from 'react-router-dom';

function Button({
  to,
  href,
  text = false,
  children,
  primary = false,
  className,
  disabled = false,
  onClick,
  leftIcon = false,
  rightIcon = false,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on' && typeof props[key] === 'function')) {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const styleDisabled = disabled ? 'pointer-events-none opacity-50' : '';
  const stylePrimary = primary ? 'bg-primary hover:opacity-90 rounded' : '';
  const styleText = text ? ' hover:text-[#c99400] dark:hover:text-[#c99400]' : '';

  const classes = `text-base font-semibold py-1.5 px-4 inline-flex items-center text-center leading-5 select-none text-textColor dark:text-textDarkMode group ${stylePrimary} ${styleText} ${styleDisabled} ${className} `;
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className="mr-2 inline-flex w-5 group-hover:text-[#c99400]">{leftIcon}</span>}
      <span className="flex items-center justify-center">{children}</span>
      {rightIcon && <span className="ml-2 inline-flex w-5 group-hover:text-[#c99400]">{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
