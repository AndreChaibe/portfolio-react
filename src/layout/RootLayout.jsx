import { Outlet } from 'react-router-dom';
import Header from './Header'
import { BigOwlMascot } from '../shared/components';

const RootLayout = () => {
    return (
        <>
            <Header />
            <div className='relative z-1 flex justify-center items-center w-[100%] h-[100%]'>
                <Outlet />
                <BigOwlMascot />
            </div>
        </>
    )
}

export default RootLayout;