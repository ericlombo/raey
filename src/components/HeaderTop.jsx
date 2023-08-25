'use client'
import React from "react"
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"

function HeaderTop(){
    return (
        <div className="border-b border-gray-200 hidden sm:block">
          <div className="container py-4"> 
             <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                  <div className="header_top_icon_wapper bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-accent hover:text-white;">
                    <BsFacebook/>
                    </div>  
                    <div className="header_top_icon_wapper bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-accent hover:text-white;">
                    <BsTwitter/>
                    </div>
                    <div className="header_top_icon_wapper bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-accent hover:text-white;">
                    <BsInstagram/>
                    </div>
                    <div className="header_top_icon_wapper bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-accent hover:text-white;">
                    <BsLinkedin/>
                    </div>                  
                </div>

                <div className="text-gray-500 text-[12px">
                    <b>FREE DELIVERIES</b> THIS WEEK ON ORDERS ABOVE - KSH 2000
                </div>

                <div>
                    <select className="text-gray-500 text-[12px] w-[80px]"
                    name="language"
                    id="language"
                    >
                        <option value="English">English</option>
                        <option value="Swahili">Swahili</option>
                    </select>
                </div>
             </div>
          </div>
        </div>
    )
}
export default HeaderTop