import Image from "next/image";
import Hero from "@/components/Hero";
import OurCoreValues from "@/components/OurCoreValues";
import OurBlogs from "@/components/OurBlogs";

export default function Home() {
  return (
    <div className="">
        <Hero />
        <OurCoreValues />
        <OurBlogs />
    </div>
  );
}
