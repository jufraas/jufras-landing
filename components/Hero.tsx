import React from "react";

const Hero = () => {
    return (
        <div className='flex justify-center items-center flex-col'>

            <div className='flex justify-center items-center flex-col'>

                <div
                    className='grid justify-center items-centerx'
                >
                    <img
                        src='/assets/images/imagene-portafolio.jpg'
                        alt='portfolio-image'
                        className='w-[270px] h-[270px] my-[60px] rounded-[50%]'
                    />
                    <div
                        className='h-[57px] relative top-[-100px] left-[10px] flex justify-center items-center
                        rounded '
                    >
                        <h1
                            className='text-[30px] text-[#ffffff] '
                        >Welcome to my Portfolio</h1>
                    </div>
                </div>

            </div>

            <div
                className='m-[4px] p-[20px] gap-[25px] flex justify-center items-center flex-col'
            >
                <h2
                    className='text-[33px] font-thin text-[#ffffff]'
                >My name is Juan Francisco Camacho Posso</h2>

                <p
                    className='my-0 mx-auto w-[53%] text-[17px] inline-block text-[#ffffff]'
                >
                    Este portafolio es solo una muestra, se estira y se esta preparano un portafolio mas grande, mas variedad de cosas y mucho mas dinamico
                    tanto para los usurios como para empresas
                </p>
                <h1 className="text-white">------------------------------------------------------------------------------------------------------------</h1>
                <p
                   className='my-0 mx-auto w-[53%] text-[17px] inline-block text-[#ffffff]'
                >
                    This portfolio is just a sample, it is being stretched and a bigger portfolio is being prepared, with more variety of things and much more dynamic
                    for both users and companies
                </p>
            </div>
        </div>
    );
}

export default Hero