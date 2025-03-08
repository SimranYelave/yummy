import React from 'react'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 


const Footer = () => {
  return (
    <>
      <div className='bg-gray-200'>
        <div className='flex gap-2 mx-32 '>
          <div className='text-2xl font-bold text-gray-700 my-7'>For better experience,download the Yummy app now.</div>
          <a><img className='w-56 my-6' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" /></a>
          <a><img className='w-56 my-6' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" /></a>
        </div>
        {/* <div className='bg-black w-full h-1 flex px-32'></div> */}
        <div className='flex flex-row mt-10'>
        <div className='flex-col  text-[15px]   text-gray-500 ml-52'>
          <div className='flex gap-2 items-center'><img className="bg-amber-400 w-16 h-12 rounded-[200px]" src={Logo} alt="" /><p className='font-extrabold text-black font-cursive text-[30px]'>Yummy</p></div>
          <div>© 2025 Yummy Limited</div>
        </div>
        <div className='flex flex-col  text-[15px]   text-gray-500 ml-16 gap-3 '>
          <a href="" className='text-black' >Contact</a>
          <a href="">About us</a>
          <a href="">Yummy Corporate</a>
          <a href="">Careers</a>
          <a href="">Team</a>
          <a href="">Yummy one</a>
          <a href="">Yummy Instamart</a>
          <a href="">Yummy Dineout</a>
          <a href="">Yummy Ginne</a>
          <a href="">Minis</a>
        </div>
        <div className='flex flex-col gap-14'>
          <div className='flex flex-col  text-[15px]   text-gray-500 ml-16 gap-3 '>
            <a href="" className='text-black'>Contact us</a>
            <a href="">Help & Support</a>
            <a href="">Partner With Us</a>
            <a href="">Ride With Us</a>
          </div>
          <div className='flex flex-col  text-[15px]   text-gray-500 ml-16 gap-3 '>
            <a href="" className='text-black'>Legal</a>
            <a href="">Teams & Conditions</a>
            <a href="">Cookie policy</a>
            <a href="">Privacy policy</a>
          </div>
        </div>
        <div className='flex flex-col  text-[15px]   text-gray-500 ml-16 gap-3 '>
          <a href="" className='text-black' >Available in:</a>
          <a href="">Bangalore</a>
          <a href="">Gurgoan</a>
          <a href="">Hyderabad</a>
          <a href="">Delhi</a>
          <a href="">Mumbai</a>
          <a href="">Pune</a>
        </div>
        <div className='flex flex-col gap-24' >
          <div className='flex flex-col  text-[15px]   text-gray-500 ml-16 gap-3 '>
            <a href="" className='text-black'>Life at Yummy</a>
            <a href="">Explore with yummy</a>
            <a href="">Yummy News</a>
            <a href="">Snackables</a>
          </div>
          <div className='flex flex-col  text-[15px]   text-gray-500 ml-16 gap-3'>
            <a href="" className='text-black'>Social links</a>
            <div className='flex gap-2 text-[15px]'>
            <a href=""><FontAwesomeIcon icon={faEnvelope }  /></a>
            <a href=""><FontAwesomeIcon icon={faInstagram}  /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter}  /></a>
            <a href=""><FontAwesomeIcon icon={faFacebook}  /></a>
            <a href=""><FontAwesomeIcon icon={faLinkedin}  /></a>

            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer
