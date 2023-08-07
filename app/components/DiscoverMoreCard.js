import Image from 'next/image'
import React from 'react'
import DiscoverMoreNftData from '@/data/DiscoverMoreNftdata'
import avtar from "@/public/Avatar.png"

const DiscoverMoreCard = () => {

    const data = DiscoverMoreNftData
    return (
        data.map((item, index) => (
            <div key={index} className=' bg-black h-[470px] w-[340px]  rounded-2xl bg-opacity-20 relative'>
                <Image src={item.mainImg} className='object-contain w-full' alt='img' />
                <div className='p-4 flex flex-col justify-between'>
                    <h5 className='text-2xl font-semibold text-white '>{item.heading}</h5>
                    <div className='mt-2 flex items-center gap-3'>
                        <Image src={avtar} className='object-contain' alt='avatar' />
                        <span className='text-base font-normal text-white'>{item.title}</span>
                    </div>
                    <div className='flex justify-between items-center mt-4 '>
                        <div className='flex flex-col gap-1'>
                            <h5 className='capitalize text-[#858584] text-sm font-normal tracking-wider'>price</h5>
                            <h4 className='text-white font-normal text-base'>{item.price}</h4>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h5 className='capitalize text-[#858584] text-sm font-normal tracking-wider'>Highest Bid</h5>
                            <h4 className='text-white font-normal text-base'>{item.highestBid}</h4>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default DiscoverMoreCard
