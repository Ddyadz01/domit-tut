import './text.scss';

const sizes = {
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'lg',
};

export const TextComponent = ({ text, size }) => {
  return <div className={sizes[size]}>{text}</div>;
};
