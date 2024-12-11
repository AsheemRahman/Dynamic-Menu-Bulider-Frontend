import React from 'react';
import Mainimage from '../assets/Main-image.jpeg';
import MenuList from './MenuList';

const Menu = () => {
    return (
        <>
            <div className="relative h-96 bg-cover bg-no-repeat max-h-[600px] flex items-center justify-center px-4 sm:px-8"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Mainimage})`, }}>
                <div className="relative z-10 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="font-oswald font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-9xl leading-tight lg:leading-[111.15px] mb-4">
                        Menu
                    </h1>
                    <p className="font-kelly-slab font-normal text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed lg:leading-[21.82px]">
                        Please take a look at our menu featuring food, drinks, and brunch. If you'd like to <br className="hidden lg:block" />
                        place an order, use the "Order Online" button located below the menu.
                    </p>
                </div>
            </div>
            <MenuList />
        </>
    );
};

export default Menu;
