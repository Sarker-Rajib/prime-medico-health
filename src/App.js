import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { useEffect } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  SwiperCore.use([Autoplay]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
