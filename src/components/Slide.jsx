import { useRef } from 'react';

export default function Slide({ img, setCurrent, current, index }) {
  const slide = useRef(null);

  function handleSlideClick(index) {
    setCurrent(index);
  }

  function handleMouseMove(event) {
    const el = slide.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x',  event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  }

  function handleMouseLeave(event) {
    slide.current.style.setProperty('--x',0);
    slide.current.style.setProperty('--y', 0);
  }
  return (
    <div
      key={img}
      ref={slide}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleSlideClick(index)}
      className={
        (index === current
          ? 'item--current'
          : index > current
          ? 'item--next'
          : 'item--prev') + ' item'
      }
    >
      <div className="image-wrapper">
        <img src={img} alt="" className='object-cover object-center ' />
      </div>
    </div>
  );
}
