import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai'
import { images } from '../constants'

const Footer = () => {
    return (
        <footer className='flex flex-1 flex-col bg-black text-white mt-[2rem] px-[1rem] md:px-[2rem] pb-0'>
            <div className='m-auto  border-red-800  md:w-[80%] w-[100%] font-appleMedium px-[2rem] py-[3rem] flex flex-col items-center justify-center '>
                <div className='flex md:flex-row flex-warp  flex-col  justify-between items-center w-[100%]'>
                    {/* <AiOutlineHeart /> */}
                    <div className='flex md:border-none border flex-col  w-full  p-4 gap-[1rem] md:w-fit'> 
                        <Image src={images.LogoS} width={40} alt='logo' />
                        <p className='w-[66%]'>Designed and Developed by Aman</p>
                    </div>

                    <div className='md:border-none border p-4 my-4 text-left md:w-fit w-full'>
                        Copyright@2023
                    </div>
                    <div className='md:border-none border p-4 md:w-fit w-full'>
                        <p className='flex items-center text-right gap-[1rem]  py-2'>
                            <AiOutlineMail className='text-[1.5rem]' />
                            Email
                        </p>
                        amanbairagi1089@gmail.com
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
