import Image from "next/image"
import Link from "next/link"
import React from "react"


export default function Header() {
  return (
    <div className='w-full fidex bg-gradient-to-r bg-[#000] py-[15px]'>
      <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">  
        <a className="flex items-center">
          <Image 
          src='./assets/icons/principal-logo.svg'
          alt="principal-logo"
          width={55}
          height={55}
          />
          <span className="text-white text-xl font-semibold">Juan Francisco</span>
        </a>

        <div className="flex items-center lg:order-2">
          <Link href='/'>
                <h3 className="text-white hover:bg-[#b90a0ae3] font-medium rounded-lg text-sm px-4 py-[5px] lg:px-5 lg:py-[3px] sm:mr-2">
                  Login
                </h3>
          </Link>
          <Link href='/'>
                 <h3 className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-[2px] lg:py-[3px] sm:mr-2 lg:mr-0 hover:bg-[#b90a0ae3] ">
                  Repository{' '}
                </h3>
          </Link>
            <a 
            type="button"
            className="items-center p-2 ml-1 text-sm rounded-lg lg:hidden text-gray hover:bg-[#015A66]"
            >
            <Image 
              className="w-6 h-6"
              src='./assets/icons/tres-rayas.svg'
              alt="tres-rayas"
              width={16}
              height={16}
            />
           
            </a>
        </div>

        <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 font-semibold">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <Link
                    href='/'
                    ><h3 className="py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-[#5C5C5C] lg:hover:text-white hover:bg-[##909090] hover:text-white" >Home</h3>
                </Link>
                <Link
                    href='/proyects'
                    className="py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-[#5C5C5C] lg:hover:text-white hover:bg-[##909090] hover:text-white"
                >
                    <h3>Proyects</h3>
                </Link>
                <Link
                    href='/About_Me'
                    className="py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-[#5C5C5C] lg:hover:text-white hover:bg-[##909090] hover:text-white"
                >
                    <h3>About Me</h3>
                </Link>
                <Link
                    href='/proyects.tsx'
                    className="py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-[#5C5C5C] lg:hover:text-white hover:bg-[##909090] hover:text-white"
                >
                    <h3>Contact Me</h3>
                </Link>
          </ul>
        </div> 
      </div>
    </div>
  )
}
