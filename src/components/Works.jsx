import { useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

import '../assets/works.scss';
import data from '../data';
import Slide from './Slide';

const classNavigators =
  'text-3xl cursor-pointer text-stone-400 hover:text-white active:translate-y-1 select-none';

export default function Works({setScrollTo}) {
  const [translateX, setTranslateX] = useState({});
  const [current, setCurrent] = useState(0);
  const carousel = useRef(null);
  const worksRef = useRef(null);

  useEffect(() => {
    setTranslateX({
      transform: `translateX(-${current * (96 / data.length)}%)`,
    });
  }, [current]);

  useEffect(() => {
    console.log(worksRef.current.offsetTop);
    setScrollTo(worksRef.current.offsetTop);
  }, [worksRef, setScrollTo]);

  return (
    <div ref={worksRef} className="min-h-screen works  ">
      <div className="container mx-auto relative py-9 overflow-x-hidden ">
        <h2 className="text-4xl font-semibold mb-10 text-center">Работы</h2>
        <div className="carousel ml-[30%] relative 2xl:min-h-[40vmin] min-h-[60vmin]">
          <div
            ref={carousel}
            className="inner-carousel absolute"
            style={translateX}
          >
            {data.map(({ img, id }, index) => (
              <Slide
                key={id}
                img={img}
                setCurrent={setCurrent}
                current={current}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="md:ml-[30%] p-5 px-7">
          <div className="flex mb-5 gap-2">
            <BsChevronLeft
              className={classNavigators}
              onClick={() => setCurrent(current && current - 1)}
            />
            <BsChevronRight
              onClick={() =>
                setCurrent(current === data.length - 1 ? current : current + 1)
              }
              className={classNavigators}
            />
          </div>
          <h2 className="text-3xl font-semibold">{data[current].title}</h2>
          <div className='text-2xl flex my-4 gap-4'> 
            {data[current].gitHubLink &&  <a href={data[current].gitHubLink} target="_blank" rel="noreferrer"><FaGithub className='hover:text-highlight' /></a>}
            {data[current].demoLink && <a href={data[current].demoLink} target="_blank" rel="noreferrer"><RiExternalLinkFill className='hover:text-highlight' /></a>} </div>
          <ul className='max-h-[300px] xl:w-[350px] flex flex-col flex-wrap justify-start items-start'>{data[current].stack.map(e => <li key={e} className='text-lg font-semibold'>{e}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}
