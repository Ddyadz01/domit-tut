import './text.scss';

const sizes = {
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'lg',
  heading: 'title-block',
};

export const TextComponent = ({ text, size = 'base' }) => {
  return <p className={sizes[size]}>{text}</p>;
};
