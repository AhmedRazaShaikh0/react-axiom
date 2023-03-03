import React from 'react'

interface sec {
    subTitle: string,
    title: string,
    desc: string
}

export default function Shop(shop:sec) {
    return (

        <div className=' w-[80%] flex justify-between m-auto sm:flex-row flex-col-reverse h-[15cm]'>
            <div className='flex relative lg:w-[15cm]'>
                <img src="/img1.webp" alt="" className='absolute top-[30px] sm:top-[50px] left-[80px] sm:left-[140px] z-10 shadow-2xl w-[140px] sm:w-[280px]' />
                <img src="/img3.jpg" alt="" className='absolute top-[0px] sm:top-[10px] left-[10px] sm:left-[20px] w-[90px] sm:w-[180px]' />
                <img src="/img2.jpg" alt="" className='absolute top-[140px] sm:top-[240px] left-[30px] sm:left-[40px] w-[100px] sm:w-[200px]' />
                <img src="/img5.jpg" alt="" className='absolute top-[40px] sm:top-[90px] left-[210px] sm:left-[400px] w-[50px] sm:w-[100px]' />
                <img src="/img4.jpg" alt="" className='absolute top-[140px] sm:top-[260px] left-[200px] sm:left-[400px] w-[80px] sm:w-[160px]' />
            </div>
            <div className=' sm:w-1/3 my-auto'>
                <h2 className=' text-[17px] tracking-widest text-gray-700'>{shop.subTitle}</h2>
                <h1 className=' text-[30px] font-bold leading-[35px] mt-[5px]'>{shop.title}</h1>
                <p className=' text-[16px] text-gray-700 mt-[20px]'>{shop.desc}</p>
                <button className='text-white bg-[#111111] font-bold px-[20px] py-[12px] mt-[20px]'>Shop Tops</button><br className='sm:hidden' />
                <button className='text-white bg-[#111111] font-bold px-[20px] py-[12px] mt-[20px] sm:ml-[20px]'>Shop All Womens</button>
            </div>
        </div>
    )
}
