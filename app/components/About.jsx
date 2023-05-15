"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { RiAccountPinBoxLine } from "react-icons/ri"

const about = {
    name: "Aman",
    detail: " This is Aman Kumar Bairagi . Currently I am a sophomore at M.L.V. TEXTILE AND ENGINEERING COLLEGE , Bhilwara , Rajasthan and pursuing my Bachelor's of Technology majorly in INFORMATION TECHNOLOGY branch. I am a zealous and passionate kind of a person, I always strive for helping people by contributing through my skillset.I have been learning different types of tools and technology in my domain and actively upgrading myself ",
    sub_detail: "With a love for creativity and a drive to innovate, I am a Web Developer with a passion for delivering customized web app soutions, I posses a good knowlege about my tech stack.  ",
    des_detail: "When I'm not coding, you can find me exploring new technologies and creating design in order to bring my idea into life."
}


const About = () => {
    return (
        <>
            <section className='flex flex-1 flex-col my-[2rem]  px-[1rem] md:px-[2rem] pb-0' id="About">
                <div className='m-auto  border-red-800  md:w-[80%] w-[100%] font-appleMedium px-[2rem] py-[3rem] flex flex-col items-center  text-left'>
                    <div>
                        <motion.div
                            whileInView={{ y: [30, 0], opacity: [0, 1] }}
                            transition={{ duration: 1 }}
                            className='flex justify-between items-center'
                        >
                            <h1 className='text-[4rem] font-appleBold leading-none mb-4' >About Me</h1>
                            <RiAccountPinBoxLine className='text-[3rem]' />

                        </motion.div>
                        <p className='font-appleRegular text-justify my-2'>{about.detail}</p>
                        <p className='font-appleRegular text-justify my-2'>{about.sub_detail}</p>
                        <p className='font-appleRegular text-justify my-2'>{about.des_detail}</p>

                    </div>
                    <div>
                        <p className='mt-8 font-appleBoldItalic md:text-[2rem] text-center text-base '>You can not connect the dots looking forward you can only connect them looking backwards <span className='font-appleBold text-base'> - Steve Jobs</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
