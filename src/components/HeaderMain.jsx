'use client'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { AuthContext } from '@/context/authContext'
import { useContext } from 'react'
import Image from 'next/image'
import raeylogo from '../../public/raeylogo.png'

function HeaderMain(){
  const { session, handleLogout} = useContext(AuthContext)
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <Image src={raeylogo} alt="raey-luxe" className='w-12 h-12 flex flex-wrap gap-4 cursor-pointer'/>
        </div>

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Search Item..."
          />

          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-500"
            size={20}
          />
        </div>

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          {
            !session ? <h1>Login</h1> : <BiUser/>
          }

          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMain