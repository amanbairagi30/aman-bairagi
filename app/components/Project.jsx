"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineLaptop,AiFillGithub } from "react-icons/ai"
import { ProjectData } from '../projectData'
import Image from 'next/image'
import Link from 'next/link'



const Project = () => {
    return (
        <>
            <section className='flex flex-1 flex-col my-[2rem] px-[1rem] md:px-[2rem] pb-0' id="Projects">
                <div className='m-auto  md:w-[80%] w-[100%] font-appleMedium px-[2rem] py-[3rem] flex flex-col items-center  text-left'>
                    {/* Heading of the Project Section */}
                    <motion.div
                        whileInView={{ y: [30, 0], opacity: [0, 1] }}
                      transition={{ duration: 1 }}  
                        className='flex flex-wrap justify-between items-center w-[100%]'
                    >
                        <h1 className='md:text-[4rem] text-[3rem] font-appleBold ' >Projects</h1>
                        {/* Icon */}
                        <AiOutlineLaptop className='text-[3rem]' />
                    </motion.div>
                    <div className='mt-8 grid md:grid-cols-2 grid-cols-1  gap-x-10'>
                        {ProjectData.map((item) => {
                            const { name, desc, pic, tech, live, category,github_link } = item

                            if (category === "Featured") {
                                return (
                                    <div key={""} className='bg-[#303030] text-white md:col-span-2 mt-8 transition-all hover:cursor-pointer hover:rounded-lg hover:scale-105 hover:shadow-2xl col-span-1 border border-black rounded-lg flex flex-wrap items-center p-6 justify-between gap-[20px]'>
                                        <div className='border p-2 text-center rounded-b-lg w-[100%] text-white'>
                                            <span>{category}</span>
                                        </div>
                                        <div className='lg:flex lg:flex-row lg:items-center justify-between gap-[20px]'>

                                            <Link href={live} target='_blank'>
                                                <Image
                                                    sizes="(max-width : 768px) 100vw,
                                                (max-width : 1200px) 50vw,
                                                50vw"
                                                    className=' lg:w-[20rem] rounded-lg shadow-lg' src={pic} alt="" />
                                            </Link>

                                            <div>
                                                <div className='flex justify-between items-center mt-5'>

                                                    <Link href={live} target='_blank'><h1 className='md:text-[2.5rem] text-[1.5rem] font-appleBold md:leading-0 leading-tight hover:underline '>{name}</h1></Link>

                                                    <Link href={github_link} target='_blank'><AiFillGithub className='text-[2rem]'/></Link>
                                                </div>
                                                <p className='my-4'>{desc}</p>
                                                <p>Tech Used : {tech}</p>
                                            </div>
                                        </div>

                                    </div>

                                )
                            }
                            else {
                                return (
                                    <>
                                        <div className='mt-8'>
                                            <div className='border md:px-10 transition-all hover:cursor-pointer hover:rounded-lg hover:scale-105 hover:shadow-2xl p-4 col lg:flex flex-col lg:items-center justify-between gap-[20px]'>

                                                <Link href={live} target='_blank'>
                                                    <Image
                                                        sizes="(max-width : 768px) 100vw,
                                                    (max-width : 1200px) 50vw,
                                                    50vw"
                                                        className=' lg:w-[20rem] rounded-lg shadow-lg' src={pic} alt="" />
                                                </Link>
                                                <div>
                                                <div className='flex justify-between items-center mt-5'>

                                                    <Link href={live} target='_blank'><h1 className='md:text-[2.5rem] text-[1.5rem] font-appleBold md:leading-0 md:w-[80%] leading-tight hover:underline '>{name}</h1></Link>

                                                    <Link href={github_link} target='_blank'><AiFillGithub className='text-[2rem]'/></Link>

                                                </div>
                                                <p className='my-4'>{desc}</p>
                                                <p>Tech Used : {tech}</p>
                                            </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            }
                        })}

                        <div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Project
