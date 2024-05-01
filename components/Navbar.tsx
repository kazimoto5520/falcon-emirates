import React from 'react';
import NavIcons from "@/components/NavIcons";
import Link from "next/link";
import {FaBars, FaMagnifyingGlass} from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="max-sm:mx-0">
            <NavIcons/>

            <div className="bg-[#303030] text-[#fafafa] p-8 max-sm:p-4">
                <div className="mx-32 flex justify-between items-center max-sm:mx-0 max-lg:mx-16">
                    <div className="uppercase font-bold max-sm:text-sm">
                        <Link href="/">
                            <h1>Falcon Emirates</h1>
                        </Link>
                    </div>

                    <div className="flex space-x-6 font-semibold max-sm:hidden">
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

                    <div className="hover:cursor-pointer max-sm:hidden">
                        <FaMagnifyingGlass/>
                    </div>

                    <div className="hover:cursor-pointer hidden max-sm:block">
                        <FaBars />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;