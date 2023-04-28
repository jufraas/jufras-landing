import Image from "next/image"
import React from "react"

export default function Header() {
  return (
    <div className='w-full bg-[#0C0E1E] py-[15px]'>
      <div>
        <a className="flex items-center">
          <Image 
          src='./assets/icons/principal-logo.svg'
          alt="principal-logo"
          width={55}
          height={55}
          />
          <span className="text-white text-xl font-semibold">Landwind</span>
        </a>

        <div className="flex items-center">
          <a className="text-white hover:bg-[#909090] font-medium rounded-lg text-sm py-[5px] lg:py-[3px] sm:mr-2">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}
