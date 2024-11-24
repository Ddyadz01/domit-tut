import { TextComponent } from '../../IndexComponents';
import './button.scss';

export const Button = ({ type, text }) => {
  return (
    <button className={'button ' + type}>
      <TextComponent size={'base'} text={text} />
    </button>
  );
};
