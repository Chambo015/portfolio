import video from '../assets/videoplayback.mp4';
import '../assets/header.scss'

export default function Header() {
  return (
    <div className="header min-h-[screen] overflow-hidden">
      <div className='bg-gradient-to-l from-mainBg via-mainBg z-10  '></div>
      <video
        src={video}
        autoPlay
        muted
        loop
        className="object-[50%] object-cover max-w-[70vmax] min-h-screen bg-mainBg"
      />
      <div className='content-wrap z-30'></div>
      <div className='absolute right-0 top-0 md:w-[55%] w-[95%] h-full z-20 flex flex-col p-5 justify-center '>
        <h1 className='text-[110px] xl:text-8xl md:text-7xl text-6xl font-extrabold w-1/2 antialiased '>Eraly Aisahanov</h1>
        <h2 className='xl:text-4xl text-3xl font-semibold antialiased my-5'>Привет Мир! Я <span className='text-highlight'>Frontend Разработчик </span></h2>
      <div className='pl-10'>
          <h3 className='xl:text-3xl md:text-2xl text-xl font-semibold antialiased text-white/90'>Мои навыки:</h3>
          <ul className='flex flex-col gap-1 my-2'>
            <li><p className='xl:text-3xl md:text-2xl text-lg'><span className='font-semibold text-highlight'>HTML</span>, <span className='opacity-90 font-normal text-highlight'>CSS</span>, <span className='opacity-80 font-light'>Адаптивная вёрстка</span></p></li>
            <li><p className='xl:text-3xl md:text-2xl text-lg'><span className='font-semibold text-highlight'>JavaScript</span>, <span className='opacity-90 font-normal text-highlight'>ООП</span>, <span className='opacity-75 font-light'>Axios</span>, <span className='opacity-70 font-light'>TypeScript</span></p></li>  
            <li><p className='xl:text-3xl md:text-2xl text-lg'><span className='font-semibold text-highlight'>Vue 3</span>, <span className='opacity-90 font-normal'>React</span>, <span className='opacity-75 font-light'>React-Native</span></p></li>
            <li><p className='xl:text-3xl md:text-2xl text-lg'>< span className='font-normal text-highlight'>Redux Toolkit</span>, <span className='opacity-90 font-normal'>React-Router</span>, <span className='opacity-75 font-light'>React-Hook-Form</span></p></li>
            <li><p className='xl:text-3xl md:text-2xl text-lg'>< span className='font-normal text-highlight'>Pinia</span>, <span className='opacity-90 font-normal'>Vue Router</span>, <span className='opacity-75 font-light'>VueUse</span></p></li>
            <li><p className='xl:text-3xl md:text-2xl text-lg'><span className='font-semibold text-highlight'>Node Js</span>, <span className='opacity-90 font-normal text-highlight'>Express</span>, <span className='opacity-75 font-light'>Mongoose</span></p></li>  
            <li><p className='xl:text-3xl md:text-2xl text-lg'><span className='font-semibold text-highlight'>Tailwindcss</span>, <span className='opacity-80 font-normal'>SCSS</span></p></li>  
            <li><p className='xl:text-3xl md:text-2xl text-lg'><span className='font-semibold text-highlight'>GitHub</span>, <span className='opacity-80 font-normal'>Git</span></p></li>  
            <li><p className='xl:text-3xl md:text-2xl text-lg'><span className='font-semibold text-highlight'>GSAP</span>, <span className='opacity-80 font-normal'>Motion One</span></p></li>  
          </ul>
      </div>
      </div>
    </div>
  )
}