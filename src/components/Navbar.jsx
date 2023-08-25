'use client'
import React from 'react'
import Link from 'next/link'

function Navbar(){
  return (
    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
               <Link className="navbar_link relative" href="/"> HOME </Link >
               <Link className="navbar_link relative" href="/necklaces"> NECKLACES </Link >
               <Link className="navbar_link relative" href="/earings"> EARRINGS </Link >
               <Link className="navbar_link relative" href="/glasses"> GLASSES </Link >
               <Link className="navbar_link relative" href="/handbags"> HANDBAGS </Link >
               <Link className="navbar_link relative" href="/belts"> BELTS </Link >
            </div>
        </div>
    </div>
  )
}

export default Navbar