import { FaLongArrowAltRight } from 'react-icons/fa'
import { data } from './Databse'

interface giftType {
    subTitle: string,
    title: string,
    desc: string,
    btn:string,
    imgLeft: string,
    imgRight: string
}

const giftData: giftType = data;

export default function Gift() {
    return (
        <div className='bg-white flex md:flex-row flex-col-reverse m-auto max-w-6xl my-32 justify-between px-[3%]'>
            <div className=' md:w-[50%] w-full md:pr-20 m-auto mt-10 md:mt-0 lg:mt-12'>
                <h2 className=' text-[17px] tracking-widest text-gray-700'>{giftData.subTitle}</h2>
                <h1 className=' text-[30px] font-bold leading-[35px] mt-[5px]'>{giftData.title}</h1>
                <p className=' text-[16px] text-gray-700 mt-[20px]'>{giftData.desc}</p>
                <button className='group text-white flex bg-[#111111] font-bold pl-[20px] py-[12px] mt-[20px] transition-all delay-300 duration-1000'>
                    <span className="transition-all duration-300 group-hover:pr-[35px]">
                    {giftData.btn}
                    </span>
                    <FaLongArrowAltRight className="relative -z-10 group-hover:z-0 -right-20 text-2xl text-white transition-all duration-300 group-hover:right-5" />
                </button>
            </div>

            <div className='flex'>
                <div className=' m-auto'>
                    <img src={giftData.imgLeft} alt="" className=' ml:translate-x-[3rem] translate-x-[2rem] ml:translate-y-12 translate-y-9' />
                </div>
                <div>
                    <img src={giftData.imgRight} alt="" />
                </div>
            </div>
        </div>
    )
}
