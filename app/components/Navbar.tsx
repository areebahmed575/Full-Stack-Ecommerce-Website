"use client"
import React from 'react'
import Image from 'next/image'
import { Arraynavbar, type } from './Arraynavbar'
import Link from 'next/link'
import { BiSearch } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import { HiOutlineChevronDown } from "react-icons/hi"
import Dropdown from './Dropdown'
import Navbarmobile from './Navbarmobile'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)
  const [cart, setCart] = useState<number>(0)
  return (
    <div className="sticky top-0 backdrop-blur bg-opacityDownColor bg-white z-50">
      <div className=' py-5 flex justify-between items-center space-x-12'>
        <div className='w-36 flex-shrink-0'>
          <Image src={"/next.svg"} alt={"image"} width={500} height={500} />
        </div>

        <div className='hidden lg:flex justify-between items-center w-full '>

          <ul className='flex space-x-5 font-medium text-lg'>

            {Arraynavbar.map((item: type, index: number) => (
              <li key={index} className='flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group'>
                <Link href={item.href}> {item.label}</Link>
                {item.isDropDown ? <HiOutlineChevronDown className="mt-1 rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
                {item.isDropDown && <div className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}><Dropdown item={item} /></div>}

              </li>

            ))}
          </ul>
          <div className='border flex  items-center text-gray-600 px-3 rounded-md'>
            <BiSearch />
            <input type='text' placeholder='Search in our store' className='focus:outline-none pl-1 pr-5  flex-grow py-1 w-80' />
          </div>
          <div className='flex-shrink-0 relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center '>
            <div className='h-4 w-4 absolute top-1 right-2 bg-red-600 text-xs font-light rounded-full flex justify-center items-center '>{cart}</div>
            <BsCart2 size={24} />
          </div>

        </div>
        <div onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? <div className='flex lg:hidden'>
            <RxCross2 size={25} />
          </div>
            : <div className='flex lg:hidden'>
              <GiHamburgerMenu size={25} />
            </div>
          }
        </div>

      </div>
      {navbarOpen && <Navbarmobile />}
    </div>
  )
}

export default Navbar
