import React from 'react';
import NavIcons from "@/components/NavIcons";
import Link from "next/link";
import {FaMagnifyingGlass} from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="">
            <NavIcons/>

            <div className="bg-[#303030] text-[#fafafa] p-8">
                <div className="mx-32 flex justify-between items-center">
                    <div className="uppercase font-bold">
                        <Link href="/">
                            <h1>Falcon Emirates</h1>
                        </Link>
                    </div>

                    <div className="flex space-x-6 font-semibold">
                        <Link href="#" className="text-[#f14833]">
                            Home
                        </Link>

                        <Link href="#">
                            Blog
                        </Link>

                        <Link href="#">
                            Contact
                        </Link>

                        <Link href="#">
                            About
                        </Link>
                    </div>

                    <div className="hover:cursor-pointer">
                        <FaMagnifyingGlass/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;