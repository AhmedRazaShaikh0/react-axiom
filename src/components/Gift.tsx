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
        <div className='bg-white w-[90%] flex md:flex-row flex-col-reverse m-auto max-w-6xl my-32 justify-between'>
            <div className=' md:w-1/3 lg:mt-[60px] mt-[40px]'>
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

            <div className='flex lg:w-[50%] md:w-[60%] m-auto md:m-0'>
                <div className='sm:-mr-[40px] -mr-[30px] ml:mt-[150px] md:mt-[140px] mt-[90px] z-10'>
                    <img src={giftData.imgLeft} width={305} height={204} alt="" />
                </div>
                <div>
                    <img src={giftData.imgRight} width={305} height={410} alt="" />
                </div>
            </div>
        </div>
    )
}
