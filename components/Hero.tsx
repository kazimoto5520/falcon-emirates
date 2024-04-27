import React from 'react';
import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="py-24 px-12 hero-background h-[72vh]">
            <div className="mx-32">
                <div className="text-white w-full max-w-[800px]">
                    <h1 className="text-5xl font-medium mb-4">A problem <span className="text-[#f14833]">solving</span> platform</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim quis reprehenderit. Ad
                        adipisci autem consequatur, culpa cumque cupiditate dolorum est expedita facilis hic inventore
                        laborum magnam, nobis obcaecati quae quam voluptates! Accusantium autem consequatur distinctio
                        eos et fugiat harum id illo ipsum maiores neque recusandae saepe sint tenetur, voluptates.</p>
                </div>

                <div className="flex space-x-2 mt-8">
                    <Button variant={"default"} className="bg-[#f14833] text-white rounded-xl hover:bg-[#d93c29] shadow-md">Get started</Button>
                    <Button className="bg-[#f14833] text-white rounded-xl hover:bg-[#d93c29] shadow-md">Learn more</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;