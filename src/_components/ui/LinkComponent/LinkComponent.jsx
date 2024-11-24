import { Link } from 'react-router-dom';
import { TextComponent } from '../../IndexComponents';

import './link.scss';

export const LinkComponent = ({ text, path, type = 'default' }) => {
  return (
    <Link to={path} className={type}>
      <TextComponent text={text} size={'sm'} />
    </Link>
  );
};
