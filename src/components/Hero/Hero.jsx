import React from 'react';
import BgImg from "../../assets/vector3.png";
import Food1 from "../../assets/biryani2.png";
import Food2 from "../../assets/biryani3.png";
import Food3 from "../../assets/biryani5.png";

const ImageList = [
    {
        id: 1,
        img: Food1,
    },
    {
        id: 2,
        img: Food2,
    },
    {
        id: 3,
        img: Food3,
    }
];

const BgImage = {
    backgroundImage: `url(${BgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    widht: "100%",
    height: "100%",
};

export const Hero = () => {
    const [imageId, setImageId] = React.useState(Food1)
  return (
    <>
        <div style={BgImage} className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center">
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1" data-aos="zoom-out" data-aos-duration="400" data-aos-once="true">
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Welcome to the <span className="text-primary">Foodie</span> Zone</h1>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ullam corporis libero 
                            deleniti sed iure! Consequuntur quasi enim laudantium asperiores.
                        </p>
                        <div>
                            <button className='bg-gradient-to-t from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>Order Now</button>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
                        {/* Main Image */}
                        <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
                            <img src={imageId} alt='' className="w-[300px] sm:w-[450px] mx-auto spin" data-aos="zoom-in" data-aos-duration="400" data-aos-once="true"/>
                        </div>
                        {/* List Image */}
                        <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-0 lg:-right-10 bg-white/30 rounded-full'>
                            {ImageList.map((item) => (
                                <img 
                                    data-aos="zoom-in" data-aos-duration="400" data-aos-once="true"
                                    key={item.id}
                                    src={item.img}
                                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                                    onClick={() => {
                                        if (item.id === 1) {
                                            setImageId(Food1);
                                        } else if (item.id === 2) {
                                            setImageId(Food2);
                                        } else {
                                            setImageId(Food3);
                                        }
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero;