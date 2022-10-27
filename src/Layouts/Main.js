import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Headers from '../Components/Header/Headers';
import LeftSideNav from '../Components/LestSideNav/LeftSideNav';
import './Main.css'
const Main = () => {
    return (
        <div className='main' >
            <div>  <Headers></Headers>  </div>

            <div className='grid  md:grid-cols-8'>
                <div className='grid md:col-span-2'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='grid md:col-span-6'>
                    <Outlet></Outlet>

                </div>




            </div>

            <div> <Footer></Footer>  </div>









        </div>
    );
};

export default Main;