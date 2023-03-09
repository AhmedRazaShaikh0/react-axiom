import { IoPlay } from 'react-icons/io5'
import { index } from './Databse'
import '../index.css'

interface heroType {
    title: string,
    vidSrc: string,
    btn: string
}

const heroData: heroType = index;

export default function Hero() {

    return (
        <div className=' relative flex items-center justify-center overflow-hidden'>
            <div className='z-30 relative text-center py-[6.5cm]'>
                <h1 className=' text-white md:text-7xl text-4xl font-bold fadeUp'>{heroData.title}</h1>
                <button className=' border-[2px] border-white md:px-[25px] px-[15px] md:py-[10px] py-[5px] text-white hover:text-black hover:bg-white duration-500 mt-[25px] font-bold text-lg'>
                    <IoPlay className='inline -mt-[5px] text-xl mr-[5px]' />
                    {heroData.btn}
                </button>
            </div>
            <video className='absolute w-auto min-w-full min-h-full max-w-none' src={heroData.vidSrc} autoPlay loop muted></video>
        </div>
    )
}
