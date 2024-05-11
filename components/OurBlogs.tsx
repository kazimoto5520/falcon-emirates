import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";

const OurBlogs = () => {

    const posts = [
        {
            id: 1,
            title: "The Evolution of Tractors: From Fields to Future",
            image: "/blogs/devices.jpeg",
            description: "Explore the remarkable journey of tractors from humble beginnings to modern marvels shaping the agricultural landscape. This blog post delves into the rich history, technological advancements, and promising future of these indispensable machines.",
            categories: [
                {
                    id: 1,
                    category: "Tech",
                },
                {
                    id: 2,
                    category: "Science",
                }
            ]
        },
        {
            id: 2,
            title: "Transforming Mo Dewji Bottles: A Sustainable Solution for Dustbins, Life Jackets, and Brooms",
            image: "/blogs/bottles.jpeg",
            description: "Embark on a journey of innovation and sustainability as we explore the creative reuse of Mo Dewji bottles. In this blog post, we delve into the ingenious ways these bottles can be repurposed into essential everyday items such as dustbins, life jackets, and brooms.",
            categories: [
                {
                    id: 1,
                    category: "Tech",
                },
            ]
        },
        {
            id: 3,
            title: "Augmented Reality: Bridging the Gap Between Virtual and Physical Worlds",
            image: "/blogs/post.jpeg",
            description: "Step into a realm where reality is enhanced with digital overlays in this exploration of augmented reality (AR) technology. From immersive gaming experiences to practical applications in education and commerce, AR is reshaping how we interact with the world around us.",
            categories: [
                {
                    id: 1,
                    category: "Tech",
                },
                {
                    id: 3,
                    category: "Space",
                },
            ]
        },
        {
            id: 4,
            title: "The Rise of Quantum Computing: Unlocking the Power of the Unseen",
            image: "/blogs/post2.jpg",
            description: "Dive into the forefront of computing with this exploration of quantum technology. From the fundamental principles to real-world applications, this blog post illuminates the revolutionary potential of quantum computing.",
            categories: [
                {
                    id: 1,
                    category: "Tech",
                },
                {
                    id: 3,
                    category: "Space",
                },
            ]
        },
    ]

    return (
        <div className="blog-background py-24 px-12 max-sm:px-4 max-sm:py-8 max-lg:py-12 max-lg:px-8 max-sm:mt-12">
            <div className="mx-32 max-sm:mx-0 max-lg:mx-16">
                <div className="flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-3xl uppercase max-sm:text-xl max-lg:text-2xl">Latest <span className="text-[#f14833]">Posts</span> From Our Blog</h1>
                    <div className="w-32 h-[0.15rem] bg-red-500 max-sm:w-16 max-lg:w-24"></div>
                </div>

                <div className="mt-12">
                    <div className="grid grid-cols-4 gap-12 max-sm:grid-cols-1 max-lg:grid-cols-2">
                        {posts.map((post) => (
                        <div key={post.id} className="flex flex-col justify-between max-w-full bg-white rounded overflow-hidden shadow-lg">
                            <div className='w-200 h-200'>
                                <Image className="w-full h-full object-cover max-h-[300px]" width={1000} height={1000} src={post.image} alt="Card image"/>
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{post.title}</div>
                                <p className="text-gray-700 text-base">{post.description}</p>


                                <div className="mt-4">
                                    {post.categories.map(category => (
                                        <span key={category.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{category.category}</span>
                                    ))}
                                </div>

                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                <center>
                    <div className="mt-12">
                        <Button className="uppercase bg-gray-300 rounded-xl hover:bg-[#d93c29] shadow-md">More Posts</Button>
                    </div>
                </center>

            </div>
        </div>
    );
};

export default OurBlogs;