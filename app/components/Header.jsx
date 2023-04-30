"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { images } from '../constants'
import { FaHandPeace } from "react-icons/fa"
import {HiOutlineFolderDownload} from "react-icons/hi"

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut"
        }

    }
}

const Header = () => {

    return (
        <>
            <div className='flex flex-1 flex-col  md:px-[2rem] px-[1rem] w-[100%] md:h-[100vh] h-[100%] py-[6rem] pb-0 bg-gray-100 '>
                <div className="border flex-1 md:flex-row flex-col border-red-800 m-auto pb-0 md:w-[80%] w-[100%] font-appleMedium px-[3rem] flex items-center justify-start text-left">
                    <motion.div
                        whileInView={{ x: [10, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className='flex flex-col justify-between items-center '
                    >
                        <div className='py-4 px-8 my-2'>
                            <div className='flex items-center justify-center flex-col '>
                                <FaHandPeace className='text-3xl text-yellow-400' />
                                <div className='flex items-center justify-start flex-col'>
                                    <p className='font-appleRegular mb-0 text-xl'>Hello, This is</p>
                                    <h1 className='font-appleBold p-0 text-[6rem] md:text-[4rem] leading-none text-center '>Aman <span className=''>Kumar Bairagi</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 text-center md:w-[80%]'>
                            <h1 className='font-appleBold text-xl text-center my-2 mb-4'>Web Developer</h1>
                            <p className='font-appleRegular'><span className='bg-black text-white p-1 px-2 rounded-md'>Explore</span> my portfolio and let's <span className='bg-black text-white p-1 px-2 rounded-md'>collaborate</span> to elevate your online presence with custom web development that is both <span className='bg-black text-white p-1 px-2 rounded-md'>beautiful</span> and functional .</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, delayChildren: 0.5 }}
                        className='flex items-center justify-center  md:w-[55rem] relative pb-4'
                    >
                        <Image src={images.Aman} className='absolute md:w-[30rem] z-[1] w-[40rem] pb-2 mt-4' />
                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            src={images.circle}
                            alt="back-circle"
                            // className='flex justify-between'
                        >
                            <Image src={images.circle} />

                        </motion.div>
                    </motion.div>

                    <div className=' w-[80%] h-[3rem] my-3 flex items-center justify-center md:hidden'>
                        <button className='w-[40%] py-2 mx-2 rounded-md transition-all hover:bg-gray-700 bg-black text-white flex items-center justify-center gap-4'>
                            <span>Resume</span>
                            <HiOutlineFolderDownload className='text-2xl' />
                        </button>
                        <button className='w-[40%] py-2 rounded-md border-2 transition-all hover:bg-gray-200 border-black mx-2'>
                            <span>E-Mail</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
