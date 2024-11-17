import { Link } from 'react-router-dom';
import { TextComponent } from '../../IndexComponents';

import './link.scss';

export const LinkComponent = ({ text, path }) => {
  return (
    <Link to={path}>
      <TextComponent text={text} size={'base'} />
    </Link>
  );
};
