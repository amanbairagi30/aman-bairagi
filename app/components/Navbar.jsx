"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { images } from "../constants/index"
import { HiMenuAlt3, HiX , HiOutlineFolderDownload } from "react-icons/hi"
import { motion } from 'framer-motion'


const Navbar = () => {
    // const [nav,setNav] = useState(true)
    const [navbar, setNavbar] = useState(true)
    const [toggle, setToggle] = useState(false)

    const changeBg = () => {
        if (window.scrollY >= 8) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeBg);

    return (
        <nav className={` ${navbar ? `navbar-active` : `navbar`} w-[100%] flex justify-center items-center h-fit z-[2] fixed py-1 md:px-[2rem] px-[1rem] `} >
            <div className={` border-red-800 m-auto md:w-[80%] w-[100%] font-appleMedium md:px[2rem] p-[1rem] flex items-center justify-between`}>

                <div>
                    <Image className='bg-[#000] rounded-lg p-2 w-[4rem]' src={images.LogoS} alt='logo' />
                </div>
                <ul className='hidden md:flex md:flex-1 md:justify-center md:items-center'>
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li className='md:mx-2' key={item}>{item}</li>
                    ))}
                </ul>
                {/* <div className='border-none'>
                    <button>Hire Me</button>
                </div> */}

                <div className='hidden md:w-[10%] md:h-[3rem] md:flex md:items-center md:justify-center'>
                    <button className='w-[100%] py-2  rounded-md transition-all hover:bg-gray-700 bg-black text-white flex items-center justify-center gap-2'>
                        <span>Resume</span>
                        <HiOutlineFolderDownload className='text-xl' />
                    </button>
                </div>

                <div className='md:hidden flex flex-col items-center justify-center'>
                    <HiMenuAlt3 className='p-1 w-[35px] h-[35px] text-3xl flex rounded-[50%] relative justify-center items-center  hover:bg-gray-200 hover:cursor-pointer' onClick={() => setToggle(true)} />
                    {toggle && (
                        <motion.div className='border burger fixed top-0 bottom-0 right-0 z-50  w-[80%] h-[100vh] flex flex-col p-8 '
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: "easeOut" }}
                        >
                            <HiX className='border w-[35px] h-[35px] my-[1rem] rounded-[50%] p-1 hover:bg-gray-200 hover:cursor-pointer' onClick={() => setToggle(false)} />
                            <ul className=' list-none h-[100%] w-[100%] flex justify-start flex-col'>

                                {["Home", "About", "Projects", "Contact"].map((item) => (
                                    <li className={`text-black list-none my-[1.5rem] hover:cursor-pointer`} key={item} onClick={() => setToggle(false)}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
