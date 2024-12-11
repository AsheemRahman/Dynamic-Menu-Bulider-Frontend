import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateMenu = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://dynamic-menu-bulider-backend.onrender.com/api/menus', { name, description });
            navigate('/');
        } catch (error) {
            console.error('Error creating menu:', error);
        }
    };

    return (
        <div className="max-w-md m-48 mx-auto ">
            <h1 className="text-3xl font-bold mb-6">Create Menu</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Menu Name
                    </label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required
                        className="mt-1 h-14 block w-full rounded-md border-gray-300 shadow-lg focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/>
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                    </textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Create Menu
                </button>
            </form>
        </div>
    );
};

export default CreateMenu;