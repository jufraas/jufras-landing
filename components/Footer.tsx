import GitHub from '@/public/assets/icons/GitHub';
import React from 'react';

const Footer = () => {
    return (
        <footer
        id='holis'
            className='static bottom-0 text-white box-border w-full font-sans pt-[35px] pb-[35px] align-top'
        >
            <div className='grid grid-cols-2 justify-center items-center font-bold text-[16px]'>


                <div className='flex justify-center items-center flex-col'>

                    <h3 className='text-whiteText m-0'>Jufra<span className='text-redNormal'>Developer</span></h3>

                    <p className='text-whiteText mt-[20px] mx-0 mb-[12px]'>
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >Home</a>{' '}/{' '}
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >About</a>{' '}/{' '}
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >Contact</a>{' '}/{' '}
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >Blog</a>{' '}
                    </p>
                </div>


                <div className='flex flex-col my-[30px] gap-2 justify-center items-center'>
                    <a href='https://github.com/jufraas' className='flex items-center gap-1'>
                        <GitHub className='hover:fill-[#f0453f]' width={30} height={30} />
                    </a>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <p className='text-[#ffffff] text-[14px] font-normal'>All rights reserved @ 2023 <strong>Juan Francisco<span className='text-[#b43430]'>Developer</span></strong> </p>
            </div>
        </footer>
    );
}

export default Footer;