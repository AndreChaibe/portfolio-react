import { Outlet } from 'react-router-dom';
import Header from './Header.js';
import { OwlMascot } from '../shared/components/index.js';
import { BlurGradient } from '../ui/animations/index.jsx';

const RootLayout = () => {
  return (
    <>
      <Header />
      <div
        className="relative z-1 flex justify-center items-center w-[100%] h-[100%] right-34 
                   max-[1010px]:right-0 
                   max-[690px]:top-[-2rem]"
      >
        <Outlet />
        <OwlMascot />
      </div>

      <BlurGradient
        colors={['#8B5CF69C', '#846AAF']}
        position="bottom"
        height="200px"
        intensity="heavy"
      />
    </>
  );
};

export default RootLayout;