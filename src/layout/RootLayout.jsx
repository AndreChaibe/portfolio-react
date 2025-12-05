import { Outlet } from 'react-router-dom';
import Header from './Header'
import { BigOwlMascot } from '../shared/components';
import { BlurGradient } from '../ui/animations/index';

const RootLayout = () => {
    return (
        <>
            <Header />
            <div className='relative z-1 flex justify-center items-center w-[100%] h-[100%]'>
                <Outlet />
                <BigOwlMascot />
            </div>
            <BlurGradient
                colors={['#8B5CF69C', '#846AAF']}
                position="bottom"
                height="200px"
                intensity="heavy"
            />
        </>
    )
}

export default RootLayout;