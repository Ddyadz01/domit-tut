import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import styles from './slider.module.scss';

const slides = [
  {
    id: 1,
    title: 'С бассейном',
    imageUrl:
      'https://images.unsplash.com/photo-1575204015190-28962b6919bf?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Семейные и уютные',
    imageUrl:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Хиты продаж',
    imageUrl:
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const MiniSlider = () => {
  const [left, setLeft] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(3);

  const slideRef = useRef();

  const handleClick = (param) => {
    if (param === 'next') {
      if (currentSlide >= slides.length) return;
      setCurrentSlide((prev) => prev + 1);
      setLeft(left + slideRef.current.clientWidth + 40);
    } else {
      if (currentSlide <= 3) return;
      setCurrentSlide((prev) => prev - 1);
      setLeft(left - slideRef.current.clientWidth - 40);
    }
  };

  return (
    <div className={styles.mini__slider}>
      <div className={styles.mini__slider_btns}>
        <div className={styles.mini__slider_btns_left}>
          <ChevronLeft
            color={currentSlide === 3 ? 'var(--color-gray)' : 'white'}
            onClick={() => handleClick('prev')}
          />
        </div>
        <div className={styles.mini__slider_btns_right}>
          <ChevronRight
            color={currentSlide === slides.length ? 'var(--color-gray)' : 'white'}
            onClick={() => handleClick('next')}
          />
        </div>
      </div>
      <div
        className={styles.mini__slider_slides}
        style={{ transform: `translateX(${-left + 'px'})` }}
      >
        {slides.map((item) => (
          <div ref={slideRef} className={styles.mini__slider_slides__slide} key={item.id}>
            <img src={item.imageUrl} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
