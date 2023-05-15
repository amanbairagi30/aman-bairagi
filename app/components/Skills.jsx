"use client"
import React, { useState } from 'react'
import { AiOutlineSetting } from "react-icons/ai"
import { motion } from 'framer-motion'
import image from '../constants/image'
import Image from 'next/image'
import { Skill } from '../skillsData'

const Skills = () => {

  const [click, setClick] = useState(0)
  const [collection, setCollection] = useState(Skill)

  const filterItem = (item, index) => {
    setClick(index)
    const updatedFilters = Skill.filter((currElem) => {
      return currElem.category === item;
    });

    setCollection(updatedFilters)
  }

  return (
    <>
      <section className='flex flex-1 flex-col my-[2rem]  px-[1rem] md:px-[2rem] pb-0' id="Skills">
        <div className='m-auto  border-red-800  md:w-[80%] w-[100%] font-appleMedium px-[2rem] py-[3rem] flex flex-col items-center  text-left'>

          {/* Heading of the Skills Section */}
          <motion.div
            whileInView={{ y: [30, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className='flex flex-wrap justify-between items-center w-[100%]'
          >
            <h1 className='md:text-[4rem] text-[3rem] font-appleBold' >Skills</h1>
            {/* Icon */}
            <AiOutlineSetting className='text-[3rem] setting ' />
          </motion.div>

          {/* Different Skills Chosing system */}

          <div className='flex flex-wrap py-2 w-[100%]'>
            {['All', 'Development', 'Design', 'Language', 'Version Control', 'Database'].map((item, index) => (
              <div className={`${click === index ? `bg-black text-white border-2 border-black` : `border-2 border-black`} mx-2 my-1 px-2 py-1 hover:cursor-pointer`} onClick={() => filterItem(item, index)}>
                {/* {item === 'All' ? setCollection(Skill) :"" } */}
                {item}
              </div>
            ))}
          </div>

          {/* Mapping Skills Data */}
          <div className='grid lg:grid-cols-4  grid-cols-2  mt-4 p-2 flex-warp border w-[100%]  items-center '>
            {collection.map((elem) => {
              const { name, image, category } = elem

              return (
                <>
                  <motion.div
                    whileInView={{ y: [30, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className='border flex place-items-center flex-col p-2 h-[40] my-2 mx-2 '>
                    <Image className='w-[80%] text-center' loading='lazy' src={image} />
                    <p className='text-center border p-2 w-[100%] transition-all hover:bg-black hover:cursor-pointer  hover:text-white rounded-t-md'>{name}</p>
                  </motion.div>
                </>
              )
            })}
          </div>
        </div>

      </section>
    </>
  )
}

export default Skills
