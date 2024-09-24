import React from 'react';
import Food1 from '../../assets/biryani5.png';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

export const Banner = () => {
  return (
    <>
        <div className='min-h-[550px'>
            <div>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        {/* Image Section */}
                        <div>
                            <img data-aos="fade-right" data-aos-duration="400" 
                                src={Food1}
                                alt=''
                                className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]'
                            />
                        </div>
                        {/* Text Content Section */}
                        <div className='flex flex-col justify-center gap-6 sm:pt-0 px-8'>
                            <h1 className='text-3xl sm:text-4xl font-bold dark:text-white' data-aos="fade-left" data-aos-duration="400">Lorem Lorem Ipsum Color</h1>
                            <p className='text-sm text-gray-500 tracking-wide leading-5 dark:text-primary' data-aos="fade-left" data-aos-duration="600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Eaque reiciendis inventore iste ratione ex alias quis magni at
                                optio
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Beatae ab sed, exercitationem minima aliquid eligendi
                                distinctio? Fugit repudiandae numquam hic quo recusandae.
                                Excepturi totam ad nam velit quasi quidem aspernatur.
                            </p>
                            <div className='flex gap-8'>
                                <div>
                                    <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-red-100 dark:bg-red-400' data-aos="slide-up" data-aos-duration="400"/>
                                </div>
                                <div>
                                    <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400' data-aos="slide-up" data-aos-duration="600"/>
                                </div>
                                <div>
                                    <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-grenn-400' data-aos="slide-up" data-aos-duration="800"/>
                                </div>
                            </div>
                            <div>
                                <button className='bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200' data-aos="slide-up" data-aos-duration="800">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner;
