import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";

const OurBlogs = () => {

    const posts = [
        {
            id: 1,
            title: "At Mario's Always Fresh Cupcake Ice Cream?",
            image: "/post1.jpg",
            description: "Veggies food taste better when cooked, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.",
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
            title: "7 Important Lessons I’ve Learned About Using Spices",
            image: "/post2.jpg",
            description: "From tall, frosted layer cakes to simple and delicious Bundts, our top-rated chocolate cakes are all here. Grab a glass of milk",
            categories: [
                {
                    id: 1,
                    category: "Tech",
                },
            ]
        },
        {
            id: 3,
            title: "The Top 10 List of Exotic Drinks for This Season",
            image: "/post3.jpg",
            description: "From tall, frosted layer cakes to simple and delicious Bundts, our top-rated chocolate cakes are all here. Grab a glass of milk",
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
            title: "The Top 10 List of Exotic Drinks for This Season",
            image: "/post4.jpg",
            description: "From tall, frosted layer cakes to simple and delicious Bundts, our top-rated chocolate cakes are all here. Grab a glass of milk",
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
                    <div className="grid grid-cols-4 gap-8 max-sm:grid-cols-1 max-lg:grid-cols-2">
                        {posts.map((post) => (
                        <div key={post.id} className="max-w-sm bg-white rounded overflow-hidden shadow-lg">
                            <Image className="w-full" width={200} height={200} src={post.image} alt="Card image"/>
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