import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../Components/Header/Headers';
import LeftSideNav from '../Components/LestSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <div>  <Headers></Headers>  </div>
            <div className='grid grid-cols-8'>
                <div className='grid col-span-2'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='grid col-span-6'>
                    <Outlet></Outlet>

                </div>






            </div>









        </div>
    );
};

export default Main;