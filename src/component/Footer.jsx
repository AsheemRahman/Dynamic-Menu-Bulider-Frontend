import React from "react";
import { Mail, Phone, MapPin, Facebook, Youtube, Twitter, Instagram, } from "lucide-react";
import Logo from "../assets/Logo.png";

const Footer = () => {
    return (
        <>
            <div className="bg-black">
                <div className="mx-auto px-4 sm:px-6 md:px-28">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 pt-20 pb-16 items-center">

                        <div className="flex flex-col items-center border-2 border-white/20 rounded-xl p-10 text-center min-h-[200px]">
                            <h2 className="text-blue-500 mb-6 text-lg font-bold uppercase tracking-wide">
                                Connect with us
                            </h2>
                            <div className="flex items-center space-x-2 text-gray-300 mb-2">
                                <Phone size={16} className="text-gray-400" />
                                <span>+91 9507843340</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-300">
                                <Mail size={16} className="text-gray-400" />
                                <span>info@deepnetsoft.com</span>
                            </div>
                        </div>

                        <div className="border-2 border-white/25 rounded-xl p-10 text-center relative min-h-[200px]">
                            <div className="flex items-center justify-center">
                                <img src={Logo} alt="Logo" className="absolute w-16 h-16 -top-9" />
                            </div>
                            <div className="mt-12">
                                <span className="text-2xl font-bold text-blue-500 mr-2">DEEP</span>
                                <span className="text-2xl font-bold text-white">NET</span>
                                <span className="text-2xl font-bold text-gray-400"> SOFT</span>
                            </div>
                            <div className="flex gap-4 justify-center mt-6">
                                <a target="_blank" rel="noreferrer">
                                    <Facebook size={24} className="text-gray-400 hover:text-blue-500 transition" />
                                </a>
                                <a target="_blank" rel="noreferrer">
                                    <Youtube size={24} className="text-gray-400 hover:text-red-500 transition" />
                                </a>
                                <a target="_blank" rel="noreferrer">
                                    <Twitter size={24} className="text-gray-400 hover:text-blue-400 transition" />
                                </a>
                                <a target="_blank" rel="noreferrer">
                                    <Instagram size={24} className="text-gray-400 hover:text-pink-500 transition" />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center border-2 border-white/20 rounded-xl p-10 text-center min-h-[200px]">
                            <h2 className="text-blue-500 text-lg font-bold uppercase tracking-wide mb-4">
                                Find us
                            </h2>
                            <div className="flex items-center text-gray-300 space-x-2">
                                <MapPin size={16} className="text-gray-400" />
                                <span>
                                    First floor, Geo Infopark,
                                    <br />
                                    Infopark EXPY, Kakkanad
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <footer className="bg-gray-900 px-4 sm:px-7 py-4">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                    <div>
                        © {new Date().getFullYear()} Deepnetsoft Solutions. All rights
                        reserved.
                    </div>
                    <div className="flex gap-4 mt-2 sm:mt-0">
                        <a href="#" className="hover:text-white transition-colors">
                            Terms & Conditions
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
