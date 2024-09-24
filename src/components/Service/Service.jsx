import React from 'react';
import Img2 from "../../assets/biryani2.png";

const ServicesData = [
    {
      id: 1,
      img: Img2,
      name: "Biryani",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
      id: 2,
      img: Img2,
      name: "Chiken kari",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
      id: 3,
      img: Img2,
      name: "Cold Cofee",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
  ];

export const Service = () => {
  return (
    <>
        <div className='py-10'>
            <div className='container'>
                <div className='text-center mb-20 max-w-[400px] mx-auto' data-aos="zoom-out" data-aos-duration="400" data-aos-once="true">
                    <p className='text-sm dark:text-primary'>Our Services</p>
                    <h1 className='text-3xl font-bold dark:text-white pb-4'>Services</h1>
                    <p className='text-xs text-gray-400 dark:text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quis est aut delectus fugiat provident illo tenetur facere expedita similique?</p>
                </div>
                {/* Card Section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                        {ServicesData.map(({id, img, name, description}) => {
                            return (
                                <div data-aos="zoom-out" data-aos-duration="400" data-aos-once="true" key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-600 dark:hover:bg-primary hover:bg-primary hover:text-white dark:hover:text-white duration-300 p-4 shadow-xl'>
                                    <div className='h-[100px]'>
                                        <img 
                                            src={img}
                                            alt=''
                                            className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300'
                                        />
                                    </div>
                                    <div className='p-4 text-center'>
                                        <h1 className='text-xl font-bold dark:text-primary group-hover:text-white'>{name}</h1>
                                        <p className='text-gray-500 dark:text-primary group-hover:text-white duration-300 text-sm line-clamp-2'>{description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service;
