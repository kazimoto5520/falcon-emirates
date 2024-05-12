import React from 'react';
import {FaLightbulb, FaPeopleCarryBox, FaReact} from "react-icons/fa6";
import {Separator} from "@/components/ui/separator";

const OurCoreValues = () => {
    return (
        <div className="bg-white py-24 px-12 max-sm:px-4 max-sm:py-8 max-lg:py-12 max-lg:px-8">
            <div className="mx-32 max-sm:mx-0 max-lg:mx-16">
                <div className="grid grid-cols-3 gap-12 max-sm:grid-cols-1 max-sm:gap-8">
                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="mb-4">
                                <FaLightbulb size={64} className="text-main-secondary"/>
                            </div>
                            <h1 className="text-xl text-center font-medium border-b border-b-gray-200 pb-2">Unlocking the Future</h1>
                            <p className="text-center mt-2 max-sm:text-sm">Our team relentlessly pursues innovation, developing solutions that shape a brighter
                                tomorrow.</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="mb-4">
                                <FaPeopleCarryBox size={64} className="text-main-secondary"/>
                            </div>
                            <h1 className="text-xl text-center font-medium border-b border-b-gray-200 pb-2">Technology for Everyone</h1>
                            <p className="text-center mt-2 max-sm:text-sm">Our solutions break down barriers and create opportunities for individuals and businesses
                                to thrive.</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="mb-4">
                                <FaReact size={64} className="text-main-secondary"/>
                            </div>
                            <h1 className="text-xl text-center font-medium border-b border-b-gray-200 pb-2">Technology with a Purpose</h1>
                            <p className="text-center mt-2 max-sm:text-sm">We strive to develop technology that tackles real-world challenges and creates a more
                                sustainable and equitable future for all.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OurCoreValues;