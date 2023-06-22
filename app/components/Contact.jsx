"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { ColorRing } from 'react-loader-spinner'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
// {process.env.NEXT_PUBLIC_MONGO_URI}

const Contact = () => {

  const[loading ,setLoading] = useState(false)

  const [user, setUser] = useState({
    username: "",
    email: "",
    message: ""
  })

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {
      const response = await fetch("/api/contact ", {
        method: "POST",
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          message: user.message
        })
      })

      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          message: ""
        })
        setStatus("success");
      } else {
        setStatus("error")
      }

    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  return (
    <>
      <section className='flex flex-1 flex-col my-[2rem] px-[1rem] md:px-[2rem] pb-0' id="Contact">
        <div className='m-auto  border-red-800  md:w-[80%] w-[100%] font-appleMedium px-[2rem] py-[3rem] flex flex-col items-center justify-center '>
          <div className=' w-full flex md:flex-row flex-col p-3 items-center '>

            <motion.div
              whileInView={{ y: [30, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <h1 className='font-appleBold text-[2rem]'>Let&apos;s Collaborate and Discuss your project 🚀</h1>
              <p>Let&apos;s create something amazing together !</p>
              <div className='flex gap-[40px] py-2'>
                <Link href={"https://www.linkedin.com/in/aman-kumar-bairagi-9315b3242/"} target='_blank'><AiFillLinkedin className='text-[2rem] hover:cursor-pointer' /></Link>
                <Link href={"https://github.com/amanbairagi30"} target='_blank'><AiFillGithub className='text-[2rem] hover:cursor-pointer' /></Link>
                <Link href={"https://www.instagram.com/amanbairagi_30/"} target='_blank'><AiFillInstagram className='text-[2rem] hover:cursor-pointer' /></Link>
              </div>
            </motion.div>

            <div className='flex flex-col  my-4 '>
              <h1 className='text-[1.5rem] my-4 mb-2'>Feel Free to send message to us 😄 </h1>
              <form action="" onSubmit={handleSubmit}>
                <input name='username' required autoComplete='off' type="text" placeholder='Name?' value={user.username} onChange={handleChange} className='border w-full py-4 px-2 mt-4' />
                <input name='email' required autoComplete='off' type="email" placeholder='E-Mail?' value={user.email} onChange={handleChange} className='border w-full py-4 px-2 mt-4' />
                <textarea name='message' required autoComplete='off' placeholder='Message ?' value={user.message} onChange={handleChange} className='border w-full py-4 px-2 mt-4 !h-[15rem]' draggable="false" />

                {status === "success" && <p className='font-appleMedium text-green-600'>Thank you for Contacting us</p>}
                {status === "error" && <p className='font-appleMedium text-red-600'>There was error while submitting the form</p>}

                <div className='font-appleBold flex items-center justify-center  text-center my-4 transition-all hover:rounded-lg bg-black text-white hover:bg-[#313131] hover:cursor-pointer'>
                  {!loading ?
                    <button className=' p-4 w-full h-full'>Send Message</button>
                  :
                  <ColorRing
                    visible={true}
                    height="60"
                    width="60"
                    // ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    // wrapperClass="blocks-wrapper"
                    // colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    colors={['#ffff', "#ffff", "#ffff", "#ffff", "#fff"]}
                  />
                  }

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
