import React from 'react';
import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="py-24 px-12 hero-background h-[72vh] max-sm:py-8 max-sm:px-4 max-sm:h-auto">
            <div className="mx-auto max-sm:mx-0 max-lg:mx-16">
                <div className="text-white w-full max-w-full max-sm:max-w-full max-lg:max-w-full">
                    <h1 className="text-5xl text-center font-medium mb-4 max-sm:text-3xl max-sm:text-start">A problem <span className="text-main-primary">solving</span> platform</h1>
                    <p className="text-center p-8 max-sm:text-sm max-sm:text-start max-sm:p-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim quis reprehenderit. Ad
                        adipisci autem consequatur, culpa cumque cupiditate dolorum est expedita facilis hic inventore
                        laborum magnam, nobis obcaecati quae quam voluptates! Accusantium autem consequatur distinctio
                        eos et fugiat harum id illo ipsum maiores neque recusandae saepe sint tenetur, voluptates.</p>
                </div>

                <div className="flex justify-center items-center space-x-4 mt-8 max-sm:justify-start">
                    <Button variant={"default"} className="bg-main-secondary text-white rounded-xl hover:bg-main-primary shadow-md">Get started</Button>
                    <Button className="bg-main-secondary text-white rounded-xl hover:bg-main-primary shadow-md">Learn more</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;