import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import borderimage from '../assets/Border-image.png'
import BackgroundImage from '../assets/Background-image.png'
import DrinkImage1 from '../assets/Glass-1.png'
import DrinkImage2 from '../assets/Glass-2.png'

const MenuPage = () => {
    const [menus, setMenus] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedMenuItems, setSelectedMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/menus');
                setMenus(response.data);
                if (response.data.length > 0) {
                    setSelectedCategory(response.data[0]);
                    setSelectedMenuItems(response.data[0]?.items || []);
                }
            } catch (error) {
                console.error('Error fetching menus:', error);
            }
        };
        fetchMenus();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedMenuItems(category?.items || []);
    };

    return (
        <div className='text-white ' >
            <div className="flex  justify-center space-x-6 py-6" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${borderimage})`, }} >
                {menus.map((menu) => (
                    <button key={menu._id} onClick={() => handleCategoryClick(menu)}
                        className={`text-lg font-bold px-4 py-2 rounded 
                            ${selectedCategory?.name === menu.name ? 'bg-blue-500 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}>
                        {menu.name}
                    </button>
                ))}
            </div>

            <div className="text-white flex p-10"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundImage})`, }}>
                <img src={DrinkImage1} alt="Drink 1" className="absolute left-72 pb-14 w-48 h-52 object-contain mx-auto md:ml-0" />
                <img src={DrinkImage2} alt="Drink 2" className="absolute mt-44 right-72 w-48 h-56 object-contain mx-auto md:mr-0" />
                <div className="max-w-7xl mx-auto p-8 border-2">
                    <h1 className="text-3xl font-serif font-extrabold  text-center mb-8">
                        ------  {selectedCategory?.name?.toUpperCase()}   ------
                    </h1>
                    {selectedMenuItems.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
                            {selectedMenuItems.map((item) => (
                                <div key={item.name} className="flex items-start gap-4  p-4 rounded-lg shadow-md">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-3xl  font-bold">{item.name}</h3>
                                            <div className="border-b border-dotted border-white flex-1" />
                                            <span className="text-white text-3xl font-bold">${item.price}</span>
                                        </div>
                                        <p className="text-gray-400 text-lg mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-red-600 text-6xl p- font-extrabold mt-4">
                            There is no product available now.
                        </p>
                    )}

                    {selectedCategory && (
                        <Link to={`/create-menu-item/${selectedCategory._id}`}
                            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Add Menu Item
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
