import { useDispatch, useSelector } from 'react-redux';

import { login, logout } from '../../store/Slices/UserSlice';

import { Button } from '../../_components/IndexComponents';

const HeaderDevelopment = () => {
  const { token } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: '100%',
        position: 'sticky',
        top: '60px',
        zIndex: '2',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgb(145, 143, 142)',
          padding: '20px 5px',
          borderRadius: '9px',
        }}
      >
        <p style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 10px' }}>
          Функции в Dev режиме:
        </p>
        {token ? (
          <Button
            text={'Выйти из системы'}
            type={'default-primary'}
            clickFn={() => dispatch(logout())}
          />
        ) : (
          <Button text={'Вход в систему'} type={'default'} clickFn={() => dispatch(login())} />
        )}
      </div>
    </div>
  );
};

export default HeaderDevelopment;
