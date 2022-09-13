import { useEffect, useState } from 'react';

import './App.scss';
import Header from './components/Header';
import Works from './components/Works';



function App() {
   const [scrollTo, setScrollTo] = useState(969)

  useEffect(() => {
    const handleScroll = event => {
      console.log(event);
     // event.wheelDelta > 0 ? "Вверх": "Вниз"
     // event.pageY расположение курсора во время прокрутки
      if(event.wheelDelta < 0 && event.pageY < scrollTo) {
        window.scrollTo({
          top: scrollTo,
          behavior: "smooth"
      })
      } else if(event.wheelDelta > 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
      }
      
    };
  
    window.addEventListener('wheel', handleScroll);
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollTo]);
  return (
    <div className="App ">
      <Header />
      <Works setScrollTo={setScrollTo}/>
    </div>
  );
}

export default App;
