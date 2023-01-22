import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
