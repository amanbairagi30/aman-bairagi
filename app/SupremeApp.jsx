"use client"
import React, { useEffect, useState } from 'react'
import MainApp from './MainApp'
import { ProgressBar } from 'react-loader-spinner'

const SupremeApp = () => {
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },880)
    },[])

    return (
        <>
            {loading ?
                <div className='w-[100vw] h-[100vh] border border-red-800 flex items-center justify-center'>

                    <ProgressBar
                        height="60"
                        width="60"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor='black'
                        barColor='black'
                    />
                </div>
                :
                <MainApp />
            }
        </>
    )
}

export default SupremeApp
