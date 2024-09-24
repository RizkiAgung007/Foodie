import React from 'react';
import AppImg from '../../assets/app_store.png';
import PlayImg from '../../assets/play_store.png';
import Gif from '../../assets/mobile_bike.gif';

export const AppStore = () => {
  return (
    <>
        <div className='bg-gray-100 dark:bg-gray-800 py-14'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                    <div className='space-y-6 max-w-xl mx-auto'>
                        <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700'>Available for Android and IOS</h1>
                        <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                            <a href='#'>
                                <img src={AppImg} alt='App Store' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                            </a>
                            <a href='#'>
                                <img src={PlayImg} alt='Play Store' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                            </a>
                        </div> 
                    </div>
                    <div>
                        <img src={Gif} alt='gif' className='max-w-[300px] mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AppStore;
