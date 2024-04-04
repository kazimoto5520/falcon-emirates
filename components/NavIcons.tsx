import React from 'react';
import Link from "next/link";
import {FaFacebookF, FaHeadset, FaInstagram, FaLinkedinIn, FaRegCircleUser, FaXTwitter} from "react-icons/fa6";

const NavIcons = () => {
    return (
        <div className="bg-[#3d3d3d] p-2 text-[#b3b3b3]">
            <div className="mx-32 px-6 flex justify-between items-center">
                <div className="flex space-x-4 items-center">
                    <div className="hover:text-[#f14833] duration-300">
                        <Link href="#">
                            <FaFacebookF/>
                        </Link>
                    </div>
                    <div className="hover:text-[#f14833] duration-300">
                        <Link href="#">
                            <FaXTwitter/>
                        </Link>
                    </div>
                    <div className="hover:text-[#f14833] duration-300">
                        <Link href="#">
                            <FaInstagram/>
                        </Link>
                    </div>
                    <div className="hover:text-[#f14833] duration-300">
                        <Link href="#">
                            <FaLinkedinIn/>
                        </Link>
                    </div>
                </div>

                <div className="flex space-x-4 items-center">
                    <div>
                        <Link href="#" className="flex items-center space-x-1">
                            <FaHeadset size={20}/>
                            <h5 className="hover:text-[#fafafa] duration-300">+255747277931</h5>
                        </Link>
                    </div>

                    <div>
                        <Link href="#" className="flex items-center space-x-1">
                            <FaRegCircleUser size={20}/>
                            <h5 className="hover:text-[#fafafa] duration-300">Login</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavIcons;