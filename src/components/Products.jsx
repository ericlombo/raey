'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import React from 'react'
import {supabase} from "../utils/supabaseConfig"




const Products = () => {
 
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async ()=>{
    try {
      let { data: Products, error } = await supabase
      .from('Products')
      .select('*')
      if (error){
        console.log(error)
      } else {
        setProducts(Products)
      }
    }catch(error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])


  return (
    <div className="bg-blackish">
      <div className="container pt-16 text-white">
        <h2 className="font-medium text-2xl pb-4 items-center justify-center flex"> OUR PRODUCTS</h2>
        {
          loading 
          ? 
            <h1>Loading</h1>
          :

            <div className="w-full flex flex-wrap gap-4">
              {
                    products.map((product)=>{
                      return (
                        <div key={product.id} className=" bg-gray-200 flex items-center justify-center hover:scale-110">
                          <div className=" bg-white text-gray-700 w-72 min-h-[10rem]
                                      shadow-lg rounded-md overflow-hidden">
                                          <img src={product.image} alt="Moon Pendant Necklace" 
                                            className=" w-full h-full object-cover"

                                          />

                                          <div className="p-5 flex flex-xl gap-3">
                                              <span className="px-3 py-1 rounded-full text-xs bg-gray-100">Item Available</span>
                                              <span className="px-3 py-1 rounded-full text-xs bg-gray-100">Official store</span>

                                          </div>

                                          <h2 className="font-semibold text-sm overflow-ellipsis overflow-hidden whitespace-nowrap">
                                              {product.description}
                                          </h2>

                                          <div>
                                            <span className="text-xl font-bold justify-center items-center flex">
                                              {product.price}
                                            </span>
                                            <div className="flex items-center gap-2 mt-1 justify-center">
                                              {/* <span className="text-sm line-through opacity-50">
                                                KSH 800

                                              </span> */}
                                              <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
                                                save 25%
                                              </span>
                                            </div>
                                          </div>

                                          <div className="mt-5 flex gap-2 justify-center items-center">
                                              <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
                                                  Add to cart
                                              </button>

                                          </div>


                          </div>
                        </div>
                      )
                    })
              }
            </div>
        }
      </div>
      </div>
  )
}

export default Products