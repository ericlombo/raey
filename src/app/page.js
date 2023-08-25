"use client"
import Products from "../components/Products.jsx"
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Hero from '@/components/Hero';
import { useContext } from "react";
import { AuthContext } from "@/context/authContext.js";
import Footer from '@components/Footer.jsx'

export default function Home() {
  const { session, handleLogout } = useContext(AuthContext)

  return (
    <main>
      {
        !session 
        ?
          <h1>Login</h1>
          :
          <>
            <button onClick={handleLogout}>Logout</button>
            <Carousel/>
            <Hero/>
            <Products />
            <Footer/>
          </>
      }
    </main>
  )
}
