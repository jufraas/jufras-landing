import Image from "next/image"
import Link from "next/link"
import React from "react"


export default function Header() {
  return (
    <div className='w-full fidex bg-gradient-to-r from-blue-500 to-transparent py-[15px]'>
      <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">  
        <a className="flex items-center">
          <Image 
          src='./assets/icons/principal-logo.svg'
          alt="principal-logo"
          width={55}
          height={55}
          />
          <span className="text-black text-xl font-semibold">Landwind</span>
        </a>

        <div className="flex items-center lg:order-2">
          <ul>
            <li>
              <Link href='#' legacyBehavior>
                <h3 className="text-black hover:bg-[#909090] font-medium rounded-lg text-sm px-4 py-[5px] lg:px-5 lg:py-[3px] sm:mr-2">
                  Login
                </h3>
              </Link>
            </li>
            <li>
              <Link href='#' legacyBehavior>
                <h3 className="text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-[2px] lg:py-[3px] sm:mr-2 lg:mr-0 hover:bg-[#1F8D85] ">
                  Repository{' '}
                </h3>
              </Link>
            </li>
            
          </ul>
          
          

          <button 
          type="button"
          className="items-center p-2 ml-1 text-sm rounded-lg lg:hidden text-gray hover:bg-[#015A66]"
          >
            <Image 
              className="w-6 h-6"
              src='./assets/icons/tres-rayas.svg'
              width={16}
              height={16}
            />
           
          </button>
        </div>

        <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link href='#' legacyBehavior >
              <h3 className="py-[2px] pl-3 pr-4 bg-[#00C1CA] rounded lg:bg-transparent lg:text-[#00C1CA] lg:p-0 text-black cursor-pointer">
                Home
              </h3>
              </Link>
            </li>

            <li>
              <Link href='/Code' legacyBehavior> 
              <h3 className="py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-[#5C5C5C] lg:hover:text-black hover:bg-[##909090] hover:text-black">
                Code
              </h3>
              </Link>
            </li>
            <li>
              <Link href='/Programers' legacyBehavior>
              <h3 className="py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-[#5C5C5C] lg:hover:text-black hover:bg-[##909090] hover:text-black">
                Programers
              </h3>
              </Link>
            </li>
          </ul>
        </div> 
      </div>
    </div>
  )
}
