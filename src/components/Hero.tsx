import { IoPlay } from 'react-icons/io5'
import video from '../components/video.mp4'
import '../index.css'

interface sec {
    title:string, 
}

export default function Hero(hero:sec) {
    return (
        <div className=' relative flex items-center justify-center overflow-hidden h-screen'>
            <div className='z-30 relative text-center'>
                <h1 className=' text-white sm:text-7xl text-4xl font-bold fadeUp'>{hero.title}</h1>
                <button className=' border-[2px] border-white sm:px-[25px] px-[15px] sm:py-[10px] py-[5px] text-white hover:text-black hover:bg-white mt-[25px] font-bold text-lg'><IoPlay className='inline -mt-[5px] text-xl mr-[5px]' />Watch</button>
            </div>
            <video className='absolute w-auto min-w-full min-h-full max-w-none' src={video} autoPlay loop muted></video>
        </div>
    )
}
