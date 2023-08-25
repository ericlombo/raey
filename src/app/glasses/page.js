'use client'
import Link from 'next/link';
import { supabase } from "../../utils/supabaseConfig"
import { useState, useEffect} from "react"

const Necklaces = () => {

    const [ necklaces, setNecklaces] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchNecklaces = async ()=>{
      try {
        let { data: Necklaces, error } = await supabase
        .from('Products') //remains the same
        .select('*')
        .eq('category', 'Sunglasses') //bracelets
        if (error){
          console.log(error)
        } else {
          setNecklaces(Necklaces)  // to bracelets
        }
      }catch(error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  
    useEffect(()=>{
      fetchNecklaces()
    }, [])
    return (
        <>
            {
                loading 
                    ?
                      <h1> Loading..</h1>
                    :
                    <div className="w-full flex flex-wrap gap-4 items-center justify-center">
                        {
                            necklaces.map((necklace)=>{
                                return (
                                    <div key={necklace.id} className=" bg-gray-200 flex items-center justify-center">
                                    <div className=" bg-white text-gray-700 w-72 min-h-[10rem]
                                                shadow-lg rounded-md overflow-hidden">
                                                    <img src={necklace.image} alt="" 
                                                    className=" w-full h-full object-cover"
                    
                                                    />
                    
                                                    <div className="p-5 flex-xol gap-3">
                                                        <span className="px-3 py-1 rounded-full text-xs bg-gray-100">Raey Luxe</span>
                                                        <span className="px-3 py-1 rounded-full text-xs bg-gray-100">Store</span>
                    
                                                    </div>
                    
                                                    <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
                                                    {necklace.description}
                                                    </h2>
                    
                                                    <div className="mt-5 flex gap-2">
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


        </>

    );
}

export default Necklaces;