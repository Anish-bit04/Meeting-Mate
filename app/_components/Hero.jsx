"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from "next/image"

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
    <div className='hidden lg:block'>
        <Image src='/profile1.png' width={100} height={100}
        className='h-[100px] object-cover rounded-full absolute right-36'/>
         <Image src='/profile3.png' width={100} height={100}
        className='h-[100px] object-cover rounded-full absolute top-48 left-16'/>
         <Image src='/profile2.png' width={100} height={100}
        className='h-[100px] object-cover rounded-full absolute bottom-20 left-36'/>
          <Image src='/profile4.png' width={100} height={100}
        className='h-[100px] object-cover rounded-full absolute right-16 bottom-32' />
    </div>
    <div className='text-center max-w-3xl'>
    <h2 className='font-bold text-[60px] text-slate-700'>Easy scheduling ahead</h2>
    <h2 className='text-xl mt-5 text-slate-500'>Unlock the power of seamless scheduling with our intuitive meeting planner, designed to maximize your productivity and minimize scheduling conflicts.</h2>
    <div className='flex gap-4 flex-col mt-5'>
        <h3 className='text-sd'>Sign Up free with Google and Facebook</h3>
        <div className='flex justify-center gap-8'>
            <Button className="p-7 flex gap-4">
                <Image src='/google.png' alt='google'
                width={40} height={40}/>
                Sign up with Google
                </Button>
             
               <Button className="p-7 flex gap-4">
                <Image src='/facebook.png' alt='google'
                width={40} height={40}/>
                Sign up with Facebook</Button>
        </div>
        <hr></hr>
       <h2><span className='text-primary'>Sign up Free with Email.</span> No Credit card required</h2> 
    </div>
    </div>
</div>
  )
}

export default Hero